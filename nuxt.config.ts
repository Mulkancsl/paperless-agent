export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'Paperless Chat Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Embed Chatbot widgets ke web anda' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    baseURL: process.env.NUXT_APP_BASE_URL || '/paperless-agent/'
  },
  devtools: { enabled: true },
  plugins: [
    '~/plugins/chatWidget.client.js'
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000'
    }
  }
})