<template>
  <footer class="footer-icons">
    <v-row justify="center" align="center" no-gutters>
      <v-btn icon href="mailto:4relqwe@gmail.com" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-gmail</v-icon>
      </v-btn>
      <!-- SVG иконка Telegram -->
      <v-btn icon href="https://t.me/Furelka" target="_blank" class="footer-btn">
        <img src="/telegram.svg" alt="Telegram" class="footer-svg-icon" />
      </v-btn>
      <!-- SVG иконка Discord -->
      <v-btn icon href="https://discord.com/users/652187584461537281" target="_blank" class="footer-btn">
        <img src="/discord.svg" alt="Discord" class="footer-svg-icon" />
      </v-btn>
      <!-- SVG иконка Behance -->
      <v-btn icon href="https://behance.net/yourprofile" target="_blank" class="footer-btn">
        <img src="/behance.svg" alt="Behance" class="footer-svg-icon" />
      </v-btn>
      <v-btn icon href="https://github.com/Furelk" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-github</v-icon>
      </v-btn>
      <v-btn icon href="https://www.youtube.com/channel/UC2SRQKnK5YFyJ1RE57cOgUg" target="_blank" class="footer-btn">
        <v-icon size="32">mdi-youtube</v-icon>
      </v-btn>
    </v-row>
    <div class="copyright">
      © {{ new Date().getFullYear() }} Furrel. All rights reserved.
    </div>
  </footer>
  <div class="sea-bottom">
    <svg viewBox="0 0 1920 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M0 160 Q 480 320 960 220 Q 1440 120 1920 260 V320 H0Z"
        fill="#d1d5db"
      />
      <ellipse cx="300" cy="300" rx="48" ry="14" fill="#38bdf8" opacity="0.25"/>
      <ellipse cx="1700" cy="310" rx="38" ry="10" fill="#0ea5e9" opacity="0.18"/>
      <ellipse cx="900" cy="310" rx="28" ry="8" fill="#0ea5e9" opacity="0.13"/>
    </svg>
  </div>
</template>


<style scoped>
.footer {
  position: relative;
  z-index: 2;
}
.footer-svg-icon {
  width: 32px;
  height: 32px;
  display: block;
}
.footer-icons {
  background: var(--bg-card);
  padding: 32px 0 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;
  z-index: 2;
  box-shadow: var(--shadow);
  border-radius: 0 0 24px 24px;
}
.footer-btn {
  margin: 0 10px;
  color: var(--text);
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
@media (max-width: 600px) {
  .footer-svg-icon {
    width: 24px;
    height: 24px;
  }
  .footer-icons {
    padding: 16px 0 8px 0;
  }
  .footer-btn {
    margin: 0 4px;
  }
}
.sea-bottom {
  width: 100vw;
  height: 320px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  line-height: 0;
}
.sea-bottom svg {
  display: block;
  width: 100vw;
  height: 320px;
}
@media (max-width: 900px) {
  .sea-bottom, .sea-bottom svg {
    height: 160px;
  }
}
</style>