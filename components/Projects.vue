<template>
  <section id="projects" class="d-flex justify-center py-16">
    <div class="project-main-container">
      <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 2.5rem; color: #181818;">Проекты</h2>
      <div class="projects-grid">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          class="project-card"
          :style="{ animationDelay: (i * 0.13) + 's' }"
        >
          <div class="project-title">{{ project.title }}</div>
          <div class="project-desc">{{ project.description }}</div>
          <div class="project-lang" v-if="project.lang">
            <span class="lang-chip">{{ project.lang }}</span>
          </div>
          <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
            GITHUB <v-icon end small>mdi-open-in-new</v-icon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: 'My Portfolio', description: 'Personal Portfolio Website on Nuxt 3 and Vuetify.', lang: 'Nuxt 3 / Vue / Vuetify', link: 'https://github.com/Furelk/Furrel_me' },
  { title: 'Invoke survivors', description: 'Future project with the style of "Vamprire Survivors".', lang: 'GML', link: 'https://github.com/Furelk/Invoke-Survivors' },
  { title: 'Soon...', description: 'Secret project №1.', lang: '???', link: '' },
  { title: 'Soon...', description: 'Secret project №2', lang: '??? / ??? / ???', link: '' },
  { title: 'Soon...', description: 'Secret project №3', lang: '???', link: '' },
  { title: 'Minecraft mods', description: 'A repository where I will add mods for minecraft that I make myself', lang: 'Java', link: 'https://github.com/Furelk/Furrels-minecraft-mods' },
]
</script>

<style scoped>
.project-main-container {
  background: rgba(255,255,255,0.82);
  border-radius: 24px;
  box-shadow: 0 2px 24px #a78bfa11;
  padding: 48px 32px;
  max-width: 1200px;
  width: 100%;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  z-index: 1;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(340px, 1fr));
  gap: 32px;
  justify-items: center;
}

.project-card {
  background: #181818;
  color: #fff;
  border-radius: 24px;
  padding: 32px 32px 24px 32px;
  min-width: 340px;
  max-width: 480px;
  width: 100%;
  margin-bottom: 0;
  box-shadow: 0 2px 16px #0002;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) both;
}

.project-title {
  font-family: 'Fira Mono', 'Consolas', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  letter-spacing: 1px;
}

.project-desc {
  font-family: 'Fira Mono', 'Consolas', monospace;
  font-size: 1.08rem;
  margin-bottom: 1.2rem;
  color: #e0e0e0;
}

.project-lang {
  margin-bottom: 1.1rem;
}

.lang-chip {
  display: inline-block;
  background: #23272f;
  color: #aee4fa;
  font-size: 0.98rem;
  font-family: 'Fira Mono', 'Consolas', monospace;
  border-radius: 8px;
  padding: 4px 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-right: 6px;
}

.project-link {
  color: #a78bfa;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 2px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .project-main-container {
    padding: 24px 6px;
  }
  .project-card {
    min-width: 0;
    max-width: 100%;
    padding: 24px 12px 18px 12px;
  }
}
</style>