vue
// filepath: c:\coding\Furrel\my-portfolio\components\Contact.vue
<template>
  <v-section id="contacts" class="py-16">
    <v-container>
      <v-card elevation="2" class="pa-6">
        <v-card-title class="text-h4 font-weight-bold mb-4">Контакты</v-card-title>
        <v-card-text>
          <div class="mb-4">
            <v-icon color="purple-lighten-2" class="mr-2">mdi-email</v-icon>
            <a href="mailto:furrel@example.com">furrel@example.com</a>
          </div>
          <div class="mb-4">
            <v-icon color="purple-lighten-2" class="mr-2">mdi-telegram</v-icon>
            <a href="https://t.me/Furelka" target="_blank">@Furelka</a>
          </div>
          <div>
            <v-icon color="purple-lighten-2" class="mr-2">mdi-discord</v-icon>
            <span>Furrel#1234</span>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-section>
</template>