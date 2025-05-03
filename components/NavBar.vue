<template>
  <header class="sticky top-0 z-20 w-full max-w-4xl mt-6 mb-4 px-4">
    <div class="bg-gray-900 bg-opacity-90 shadow-lg rounded-lg backdrop-filter backdrop-blur-sm">
      <div class="flex justify-between items-center px-6 py-4">
        <div class="text-xl font-bold"><NuxtLink to="/" class="text-white hover:text-blue-300">Paperless Agent</NuxtLink></div>
        <nav>
          <ul class="flex space-x-6">
            <li><NuxtLink to="/about" class="text-white hover:text-blue-300">About</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>