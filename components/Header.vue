vue
// filepath: c:\coding\Furrel\my-portfolio\components\Header.vue
<template>
  <v-app-bar color="transparent" flat>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto" class="d-none d-md-flex">
          <v-btn text href="#about" class="mx-2" color="purple-lighten-2">About me</v-btn>
          <v-btn text href="#projects" class="mx-2" color="purple-lighten-2">Projects</v-btn>
          <v-btn text href="#contacts" class="mx-2" color="purple-lighten-2">Contacts</v-btn>
        </v-col>
        <v-col cols="auto" class="d-flex d-md-none">
          <v-menu>
            <template #activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link href="#about">
                <v-list-item-title>About me</v-list-item-title>
              </v-list-item>
              <v-list-item link href="#projects">
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item>
              <v-list-item link href="#contacts">
                <v-list-item-title>Contacts</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>