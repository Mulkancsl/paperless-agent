<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-6">
      <div class="bg-white rounded-lg p-6 border">
        <ScriptEmbed />
      </div>
      <div class="bg-white rounded-lg p-6 border" v-if="false">
        <AgentChat />
      </div>
    </div>
    
    <div class="fixed bottom-0 left-0 right-0 bg-white py-2 text-center text-sm text-gray-600 border-t shadow-md z-10 w-[350px] rounded-t-lg mx-auto">
      <div class="container mx-auto px-4 flex justify-center items-center w-100">
        <span>Paperless Agent &copy; 2025 Mulkan</span>
        <!-- <a href="https://github.com/Mulkancsl" target="_blank" class="flex items-center hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.782 9.492 20.135 9.489 19.312C6.728 19.91 6.139 17.967 6.139 17.967C5.685 16.815 5.029 16.512 5.029 16.512C4.147 15.908 5.098 15.921 5.098 15.921C6.082 15.993 6.605 16.94 6.605 16.94C7.47 18.383 8.974 18.015 9.5 17.762C9.59 17.123 9.849 16.673 10.132 16.419C7.978 16.166 5.706 15.322 5.706 11.463C5.706 10.374 6.098 9.474 6.626 8.778C6.519 8.537 6.174 7.559 6.727 6.123C6.727 6.123 7.539 5.852 9.481 7.133C10.293 6.91 11.152 6.798 12.002 6.794C12.852 6.798 13.712 6.91 14.525 7.133C16.465 5.852 17.275 6.123 17.275 6.123C17.829 7.559 17.483 8.537 17.377 8.778C17.905 9.474 18.297 10.374 18.297 11.463C18.297 15.332 16.02 16.163 13.858 16.412C14.21 16.722 14.53 17.342 14.53 18.282C14.53 19.632 14.517 20.708 14.517 21.017C14.517 21.28 14.675 21.586 15.186 21.485C19.155 20.159 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
          </svg>
          github.com/Mulkancsl
        </a> -->
      </div>
    </div>
    <div class="h-10"></div>
  </div>
</template>