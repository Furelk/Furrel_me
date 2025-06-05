vue
// filepath: c:\coding\Furrel\my-portfolio\components\Projects.vue
<template>
  <section id="projects" class="d-flex justify-center py-16">
    <div style="background: rgba(255,255,255,0.92); border-radius: 24px; box-shadow: 0 2px 24px #a78bfa11; padding: 48px 32px; max-width: 1200px; width: 100%;">
      <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 2.5rem; color: #181818;">Проекты</h2>
      <div style="display: flex; gap: 0; flex-wrap: wrap; justify-content: center;">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          class="project-card"
          :style="{ animationDelay: (i * 0.13) + 's' }"
        >
          <div class="project-title">{{ project.title }}</div>
          <div class="project-desc">{{ project.description }}</div>
          <a :href="project.link" target="_blank" class="project-link">
            GITHUB <v-icon end small>mdi-open-in-new</v-icon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: 'My Portfolio', description: 'Личный сайт-портфолио на Nuxt 3 и Vuetify.', link: 'https://github.com/Furelk/portfolio' },
  { title: 'Invoke survivors', description: 'Будущий проект по типу Invoker Game.', link: 'https://github.com/Furelk/invokergame' },
  // новые проекты
]
</script>