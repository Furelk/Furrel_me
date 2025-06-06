<template>
  <v-app-bar
    color="transparent"
    flat
    elevation="0"
    app
    height="64"
    class="header-bar"
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="auto" class="header-links">
          <v-btn text href="#about" class="header-btn">ABOUT ME</v-btn>
          <v-btn text href="#projects" class="header-btn">PROJECTS</v-btn>
          <v-btn text href="#contacts" class="header-btn">CONTACT</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>


// ...existing code...

<style scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
}

.header-btn {
  font-weight: 900;
  font-size: 1rem;
  color: #181818;
  letter-spacing: 1px;
  border-radius: 12px;
  transition:
    background 0.22s cubic-bezier(.4,0,.2,1),
    color 0.18s cubic-bezier(.4,0,.2,1),
    box-shadow 0.28s cubic-bezier(.4,0,.2,1),
    transform 0.22s cubic-bezier(.4,0,.2,1);
}

.header-btn:hover,
.header-btn:focus-visible {
  background: linear-gradient(90deg, #7c3aed 0%, #38bdf8 100%);
  color: #fff !important;
  box-shadow: 0 6px 32px #38bdf866, 0 2px 12px #7c3aed44;
  transform: scale(1.06);
}

.header-btn.v-btn--active,
.header-btn.router-link-exact-active {
  background: linear-gradient(90deg, #7c3aed 0%, #38bdf8 100%);
  color: #fff !important;
  box-shadow: 0 8px 36px #38bdf877, 0 2px 16px #7c3aed55;
  transform: scale(1.08);
}
@media (max-width: 600px) {
  .header-bar {
    height: 48px !important;
  }
  .header-btn {
    font-size: 0.95rem;
    padding: 0 6px;
  }
}
</style>