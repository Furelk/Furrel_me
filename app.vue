vue
// filepath: c:\coding\Furrel\my-portfolio\app.vue
<script setup>
useSeoMeta({
  title: 'Furrel — портфолио',
  ogTitle: 'Furrel — портфолио',
  description: 'Портфолио Furrel: проекты, контакты, информация.',
  ogDescription: 'Портфолио Furrel: проекты, контакты, информация.',
  ogImage: '/favicon.ico',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#181824' }
  ]
})
</script>

<template>
  <v-app>
    <div>
      <div class="bg-noise"></div>
      <NuxtPage />
    </div>
  </v-app>
</template>

<style>
body {
  background: linear-gradient(135deg, #fafaff 0%, #f3f0ff 100%);
  min-height: 100vh;
  font-family: 'JetBrains Mono', monospace;
}
.bg-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: url('/noise.png');
  opacity: 0.07;
}
.main-content {
  padding-top: 64px;
}
@media (max-width: 600px) {
  .main-content {
    padding-top: 48px;
  }
}
</style>