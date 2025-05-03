export default defineNuxtPlugin(() => {
  // Kode ini hanya berjalan di sisi client
  if (process.client) {
    console.log('Chat widget plugin loaded');
  }
});