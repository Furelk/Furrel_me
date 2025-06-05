<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="logo-spikes">
        <svg class="spikes" width="360" height="360" viewBox="0 0 120 120">
          <g>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#181818" stroke-width="4"/>
            <g>
              <g v-for="n in 24" :key="n" :transform="`rotate(${n*15} 60 60)`">
                <rect x="58" y="6" width="4" height="18" rx="2" fill="#181818"/>
              </g>
            </g>
          </g>
        </svg>
        <img src="/logo.png" alt="logo" class="logo-img" />
      </div>
      <!-- основа -->
      <v-card
        class="mb-8 text-center"
        color="#181818"
        dark
        elevation="12"
        style="border-radius: 48px; padding: 0 64px; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10);"
        max-width="1400"
        width="100%"
      >
        <v-card-text style="font-size: 2.5rem; font-weight: 900; letter-spacing: 2px;">
          HELLO, HALLO, HIII, <span>👋</span>, SUP, YO!
        </v-card-text>
      </v-card>
      <div style="font-size: 2.2rem; font-weight: 900; margin-bottom: 1.5rem;">I'M</div>
      <v-card
        color="#181818"
        dark
        elevation="12"
        class="mb-8 text-center"
        style="transform: rotate(-3deg); display: inline-block; border-radius: 16px; padding: 0 64px;"
        max-width="900"
        width="100%"
      >
        <v-card-text style="font-size: 4rem; font-weight: 900; letter-spacing: 2px;">
          <FurrelBinaryTitle />
        </v-card-text>
      </v-card>
    </div>
<div class="scroll-down">
  <span style="font-size: 2rem;">↓</span>
  <div class="scroll-down-text" style="font-size: 1.1rem; font-weight: 700;">Scroll down</div>
  <span style="font-size: 2rem;">↓</span>
</div>
  </section>
</template>

<script setup>
import FurrelBinaryTitle from './FurrelBinaryTitle.vue'
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.hero-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  z-index: 1;
  padding-top: 40px;
  padding-bottom: 200px;
}
.logo-spikes {
  position: relative;
  width: 360px;
  height: 360px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spikes {
  position: absolute;
  top: 0;
  left: 0;
  animation: spin-spikes 6s linear infinite;
  transform-origin: 50% 50%;
}
@keyframes spin-spikes {
  100% {
    transform: rotate(360deg);
  }
}
.logo-img {
  width: 192px;
  height: 192px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  z-index: 1;
  object-fit: contain;
  box-shadow: 0 2px 12px #0002;
  border: 4px solid #fff;
}
.scroll-down {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  pointer-events: none;
  text-align: center;
}
.scroll-down span {
  animation: arrow-bounce 1.2s infinite;
  display: block;
}

.scroll-down span:first-child {
  animation-delay: 0s;
}

@keyframes arrow-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(16px);
    opacity: 0.6;
  }
}
.scroll-down-text {
  animation: arrow-bounce 1.2s infinite;
  animation-delay: 0.0s;
  display: block;
}
</style>