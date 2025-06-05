<template>
  <v-app>
    <BackgroundFish style="position:fixed; left:0; top:0; width:100vw; height:100vh; z-index:0; pointer-events:none;" />
    <v-main>
      <v-container class="d-flex flex-column align-center pa-0" fluid>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import BackgroundFish from '~/components/BackgroundFish.vue'
</script>