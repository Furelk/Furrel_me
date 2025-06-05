vue
// filepath: c:\coding\Furrel\my-portfolio\components\Footer.vue
<template>
  <v-footer color="transparent" class="d-flex flex-column align-center py-6">
    <div class="d-flex flex-row gap-4 mb-2">
      <v-btn icon href="https://github.com/Furelk" target="_blank" color="purple-lighten-2">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon href="https://t.me/Furelka" target="_blank" color="purple-lighten-2">
        <v-icon>mdi-telegram</v-icon>
      </v-btn>
      <v-btn icon href="https://discord.com/users/652187584461537281" target="_blank" color="purple-lighten-2">
        <v-icon>mdi-discord</v-icon>
      </v-btn>
    </div>
    <div class="text-grey-lighten-1 text-center">
      © 2025 Furrel. Все права защищены.
    </div>
  </v-footer>
</template>