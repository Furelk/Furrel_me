<template>
  <header class="w-full flex justify-center py-6 bg-transparent z-10">
    <!-- Пк меню -->
    <nav class="hidden md:flex gap-10 text-lg font-bold">
      <a href="#about" class="text-purple-300 hover:text-white transition">About me</a>
      <a href="#projects" class="text-purple-300 hover:text-white transition">Projects</a>
      <a href="#contacts" class="text-purple-300 hover:text-white transition">Contacts</a>
    </nav>
    <!-- бургер мобилок -->
    <div class="md:hidden flex items-center">
      <button @click="open = !open" class="focus:outline-none">
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- мобилки -->
    <transition name="fade">
      <nav
        v-if="open"
        class="fixed top-0 left-0 w-full h-full bg-[#181824]/95 flex flex-col items-center justify-center gap-10 text-2xl font-bold z-50 md:hidden"
      >
        <a href="#about" class="text-purple-300 hover:text-white transition" @click="open = false">About me</a>
        <a href="#projects" class="text-purple-300 hover:text-white transition" @click="open = false">Projects</a>
        <a href="#contacts" class="text-purple-300 hover:text-white transition" @click="open = false">Contacts</a>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>