vue
// filepath: c:\coding\Furrel\my-portfolio\components\Projects.vue
<template>
  <section id="projects" class="py-16">
    <div class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
      <div v-for="project in projects" :key="project.title"
        class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
        <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
        <p class="text-gray-200 mb-4">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="text-purple-400 hover:underline">GitHub</a>
      </div>
    </div>
  </section>
</template>
<script setup>
const projects = [
  { title: 'My Portfolio', description: 'Личный сайт-портфолио на Nuxt 3 и Vuetify.', link: 'https://github.com/Furelk/portfolio' },
  { title: 'Todo App', description: 'Простое приложение для управления задачами.', link: 'https://github.com/Furelk/todo-app' },
]
</script>