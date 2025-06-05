<template>
  <footer class="footer-icons">
    <v-row justify="center" align="center" no-gutters>
      <v-btn icon href="mailto:4relqwe@gmail.com" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-gmail</v-icon>
      </v-btn>
      <v-btn icon href="https://discord.com/users/652187584461537281" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-discord</v-icon>
      </v-btn>
      <v-btn icon href="https://t.me/Furelka" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-telegram</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/Furelk" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-github</v-icon>
      </v-btn>
      <v-btn icon href="https://www.youtube.com/channel/UC2SRQKnK5YFyJ1RE57cOgUg" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-youtube</v-icon>
      </v-btn>
      <v-btn icon href="https://behance.net/yourprofile" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-behance</v-icon>
      </v-btn>
    </v-row>
    <div class="copyright">
      © {{ new Date().getFullYear() }} Furrel. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-icons {
  background: #f5f5f5;
  padding: 32px 0 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-btn {
  margin: 0 10px;
  color: #181818;
  transition: transform 0.18s;
}
.footer-btn:hover {
  transform: scale(1.15);
  color: #a78bfa;
}
.copyright {
  margin-top: 12px;
  font-size: 0.85rem;
  color: #aaa;
  text-align: center;
  letter-spacing: 1px;
  user-select: none;
}
</style>