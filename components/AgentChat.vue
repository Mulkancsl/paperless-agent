<template>
  <div class="border rounded-lg overflow-hidden">
    <div class="flex items-center gap-2 p-4 border-b">
      <div class="w-10 h-10 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center text-white">
        <span class="font-bold">AI</span>
      </div>
      <div>
        <h3 class="font-medium">Paperless Agent Chat</h3>
        <div class="flex items-center">
          <button class="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div class="h-80 bg-gray-50 p-4 overflow-y-auto" ref="chatContainer">
      <div class="mb-4">
        <div class="text-sm text-gray-500 mb-1">{{ formattedDate }}</div>
        <div class="bg-white p-3 rounded-lg inline-block shadow">
          Assalamualaikum, apa yg bisa saya bantu?
        </div>
      </div>
      
      <div v-for="(message, index) in messages" :key="index" class="mb-4" :class="{'text-right': message.isUser}">
        <div v-if="!message.isUser" class="text-sm text-gray-500 mb-1">{{ formattedDate }}</div>
        <div 
          class="p-3 rounded-lg inline-block shadow" 
          :class="message.isUser ? 'bg-blue-500 text-white' : 'bg-white'"
        >
          {{ message.text }}
        </div>
      </div>
    </div>
    
    <div class="p-4 border-t">
      <div class="relative">
        <input 
          type="text"
          placeholder="Ask me anything..."
          class="w-full border rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-300"
          v-model="userInput"
          @keyup.enter="sendMessage"
        />
        <button 
          class="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition"
          @click="sendMessage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
    
    <div class="px-4 py-2 text-center text-xs text-gray-500 border-t">
      Powered by Paperless Agent - Mulkan
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';

const chatContainer = ref(null);
const userInput = ref('');
const messages = ref([]);

const formattedDate = computed(() => {
  const now = new Date();
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
});

function sendMessage() {
  if (!userInput.value.trim()) return;
  
  messages.value.push({
    text: userInput.value,
    isUser: true
  });
  
  const sentMessage = userInput.value;
  userInput.value = '';
  
  setTimeout(() => {
    messages.value.push({
      text: `Kamu mengatakan: "${sentMessage}". Ini adalah contoh respon demonstrasi.`,
      isUser: false
    });
    
    nextTick(() => {
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      }
    });
  }, 1000);
}

onMounted(() => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
});
</script>