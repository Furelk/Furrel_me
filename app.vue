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
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#181824' }
  ]
})

import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Projects from '~/components/Projects.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="relative min-h-screen bg-gradient-to-br from-[#181824] via-[#2b2250] to-[#181824] overflow-hidden">
    <!-- шумиха -->
    <div class="fixed inset-0 pointer-events-none z-0" style="background: url('/noise.png'); opacity: 0.12"></div>
    <!-- волна -->
    <div class="absolute top-0 left-0 w-full z-0">
      <svg viewBox="0 0 1440 160" class="w-full h-32">
        <path fill="#a78bfa" fill-opacity="0.13" d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z"/>
      </svg>
    </div>
    <!-- пятна -->
    <div class="absolute -top-24 -left-24 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div class="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

    <!-- секции -->
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>