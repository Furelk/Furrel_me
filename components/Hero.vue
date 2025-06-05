vue
// filepath: c:\coding\Furrel\my-portfolio\components\Hero.vue
<template>
  <v-section class="d-flex flex-column align-center justify-center fill-height">
    <v-card
      class="mb-6 text-center px-8"
      color="black"
      dark
      elevation="10"
      rounded="xl"
      max-width="1000"
      width="100%"
    >
      <v-card-text class="display-1 font-weight-bold" style="font-size: 2.5rem;">
        HELLO, HALLO, HIII, <span>👋</span>, SUP, YO!
      </v-card-text>
    </v-card>
    <div class="display-2 font-weight-black mb-2 text-center" style="font-size: 2rem;">I'M</div>
    <v-card
      color="black"
      dark
      elevation="10"
      rounded="lg"
      class="mb-8 text-center px-8"
      style="transform: rotate(-3deg); display: inline-block;"
      max-width="800"
      width="100%"
    >
      <v-card-text class="display-1 font-weight-bold" style="font-size: 3rem;">Furrel</v-card-text>
    </v-card>
    <div class="mt-8 d-flex flex-column align-center font-weight-bold text-center">
      <span style="font-size: 2rem;">↓</span>
      <span style="font-size: 1.2rem;">Scroll down</span>
      <span style="font-size: 2rem;">↓</span>
    </div>
  </v-section>
</template>