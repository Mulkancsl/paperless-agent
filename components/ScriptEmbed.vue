<template>
  <div>
    <div class="mb-1 font-medium text-lg">Skrip untuk Situs Web Anda</div>
    <p class="text-gray-600 text-sm mb-4">
      Gunakan skrip ini untuk menambahkan Agen AI ke situs web Anda. Sisipkan di antara &lt;head&gt; dan &lt;/head&gt; tags.
    </p>
    
    <div class="relative">
      <div class="bg-gray-50 rounded border p-4 text-sm font-mono overflow-x-auto whitespace-nowrap mb-1">
        <div class="flex items-center justify-between">
          <pre class="text-gray-700">&lt;script</pre>
          <button class="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        <pre class="text-gray-700">  src="{{ scriptUrl }}/chat-by-voice-embedded.min.js"</pre>
        <pre class="text-gray-700">  chat-hash="52hvqigiwhxlnhjt4lnfj"</pre>
        <pre class="text-gray-700">  defer&gt;</pre>
        <pre class="text-gray-700">&lt;/script&gt;</pre>
      </div>
      <div class="flex justify-between items-center text-sm text-gray-500 mt-2">
        <div class="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Skrip Anda tidak akan berubah jika Anda menambahkan lebih banyak <span class="font-medium">Training Sources</span>.</span>
        </div>
      </div>
    </div>
    
    <div class="flex gap-2 mt-4">
      <button 
        class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 flex items-center gap-1 text-sm transition"
        @click="copyScriptToClipboard"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span v-if="copySuccess">Copied!</span>
        <span v-else>Copy Script</span>
      </button>
      <NuxtLink to="/about" class="hover:text-blue-500">
        <button class="px-4 py-2 border rounded hover:bg-gray-50 flex items-center gap-1 text-sm">
            About This Agent
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';

const config = useRuntimeConfig();
const currentDomain = ref('');
const scriptUrl = computed(() => {
  // Gunakan value dari .env jika tersedia (untuk development/production)
  if (config.public.apiBaseUrl && config.public.apiBaseUrl !== 'http://localhost:3000') {
    return config.public.apiBaseUrl;
  }
  
  // Jika tidak ada di config, gunakan domain saat ini
  if (currentDomain.value) {
    return currentDomain.value;
  }
  
  // Fallback ke localhost jika semua opsi di atas gagal
  return 'http://localhost:3000';
});

// Generate script text yang akan di-copy
const scriptText = computed(() => {
  return `<script 
    src="${scriptUrl.value}/chat-by-voice-embedded.min.js" 
    chat-hash="52hvqigiwhxlnhjt4lnfj"
    defer
><\/script>`;
});

const copySuccess = ref(false);

// Deteksi domain saat komponen dimount
onMounted(() => {
  // Cek apakah berjalan di browser
  if (typeof window !== 'undefined') {
    // Ambil origin dari URL saat ini (protocol + domain + port)
    currentDomain.value = window.location.origin;
  }
});

// Fungsi untuk menyalin script ke clipboard
const copyScriptToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(scriptText.value);
    copySuccess.value = true;
    
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
    
    const textarea = document.createElement('textarea');
    textarea.value = scriptText.value;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      copySuccess.value = true;
      setTimeout(() => {
        copySuccess.value = false;
      }, 2000);
    } catch (err) {
      console.error('Fallback failed:', err);
      alert('Failed to copy script to clipboard');
    }
    
    document.body.removeChild(textarea);
  }
};
</script>