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
  <NuxtPage />
</template>

<style>
body {
  font-family: 'JetBrains Mono', monospace;
}
</style>