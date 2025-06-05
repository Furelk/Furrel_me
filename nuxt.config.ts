export default defineNuxtConfig({
  css: [
    '~/assets/main.css',
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true }
})
