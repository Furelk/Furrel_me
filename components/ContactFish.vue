<template>
  <div class="fish-aquarium">
    <div class="fish-canvas-wrapper">
      <canvas ref="canvas" width="520" height="320"></canvas>
    </div>
    <div class="contact-caption">
      <span style="font-size:1.2em;vertical-align:-2px; margin-right: 4px;">🐟</span>
      Contact me —
      <span class="caption-accent-wrapper">
        <span class="caption-accent"> fishing is prohibited!</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(() => {
  if (!canvas.value) return
  const dpr = window.devicePixelRatio || 1
  const width = 520
  const height = 320
  canvas.value.width = width * dpr
  canvas.value.height = height * dpr
  canvas.value.style.width = width + 'px'
  canvas.value.style.height = height + 'px'
  const ctx = canvas.value.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  // Круг
  const cx = 260
  const cy = 160
  const radius = 110

  // Рыбка
  let t = 0

  // Пузырьки
  const bubbles = Array.from({ length: 18 }, () => ({
    x: Math.random() * 520,
    y: 320 + Math.random() * 80,
    r: 4 + Math.random() * 7,
    speed: 0.5 + Math.random() * 1.2,
    alpha: 0.25 + Math.random() * 0.4
  }))

  function drawWaves() {
    // Волна 1
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(0, 260)
    for (let i = 0; i <= 520; i += 10) {
      ctx.lineTo(i, 260 + Math.sin((i / 70) + t * 0.5) * 12)
    }
    ctx.lineTo(520, 320)
    ctx.lineTo(0, 320)
    ctx.closePath()
    ctx.fillStyle = "#e5e8ea"
    ctx.globalAlpha = 0.7
    ctx.fill()
    ctx.restore()

    // Волна 2
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(0, 285)
    for (let i = 0; i <= 520; i += 10) {
      ctx.lineTo(i, 285 + Math.sin((i / 55) + t * 0.7 + 1) * 8)
    }
    ctx.lineTo(520, 320)
    ctx.lineTo(0, 320)
    ctx.closePath()
    ctx.fillStyle = "#f3f5f7"
    ctx.globalAlpha = 0.8
    ctx.fill()
    ctx.restore()
    ctx.globalAlpha = 1
  }

  function drawBubbles() {
    for (const b of bubbles) {
      ctx.save()
      ctx.globalAlpha = b.alpha
      ctx.beginPath()
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
      ctx.fillStyle = "#aee4fa"
      ctx.shadowColor = "#aee4fa";
      ctx.shadowBlur = 8;
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.restore()
    }
  }

  function updateBubbles() {
    for (const b of bubbles) {
      b.y -= b.speed
      if (b.y < -10) {
        b.x = 40 + Math.random() * 440
        b.y = 320 + Math.random() * 40
        b.r = 4 + Math.random() * 7
        b.speed = 0.5 + Math.random() * 1.2
        b.alpha = 0.25 + Math.random() * 0.4
      }
    }
  }

  function drawFish(x, y, angle) {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle)
    // Тело
    ctx.beginPath()
    ctx.ellipse(0, 0, 60, 30, 0, 0, Math.PI * 2)
    ctx.fillStyle = '#fff'
    ctx.strokeStyle = '#181818'
    ctx.lineWidth = 3
    ctx.shadowColor = "#bdbdbd";
    ctx.shadowBlur = 12;
    ctx.fill()
    ctx.stroke()
    ctx.shadowBlur = 0;
    // Хвост
    ctx.beginPath()
    ctx.moveTo(60, 0)
    ctx.lineTo(85, -20 + Math.sin(t * 2) * 10)
    ctx.lineTo(85, 20 - Math.sin(t * 2) * 10)
    ctx.closePath()
    ctx.fillStyle = '#fff'
    ctx.strokeStyle = '#181818'
    ctx.fill()
    ctx.stroke()
    // Глаз
    ctx.beginPath()
    ctx.arc(-25, -8, 5, 0, Math.PI * 2)
    ctx.fillStyle = '#181818'
    ctx.shadowColor = "#181818";
    ctx.shadowBlur = 4;
    ctx.fill()
    ctx.shadowBlur = 0;
    // Рот
    ctx.beginPath()
    ctx.moveTo(-35, 10)
    ctx.quadraticCurveTo(-25, 22 + Math.sin(t * 2) * 4, -10, 10)
    ctx.strokeStyle = '#181818'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()
  }

  function animate() {
    ctx.clearRect(0, 0, 520, 320)
    drawWaves()
    drawBubbles()

    const angle = t
    const fishX = cx + radius * Math.cos(angle)
    const fishY = cy + radius * Math.sin(angle)
    drawFish(fishX, fishY, angle + Math.PI / 2)

    updateBubbles()
    t -= 0.012 // теперь по часовой стрелке
    requestAnimationFrame(animate)
  }

  animate()
})
</script>

<style scoped>
.fish-aquarium {
  background: var(--bg-card, #fff);
  border-radius: 32px;
  /* Усиленные тени: */
  box-shadow:
    0 8px 32px 0 #0002,
    0 2px 16px 0 #38bdf822,
    0 1.5px 8px #aee4fa33,
    0 0.5px 1.5px #7c3aed22;
  padding: 32px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  margin: 32px auto;
  position: relative;
  z-index: 2;
}
.fish-canvas-wrapper {
  width: 520px;
  height: 320px;
  background: var(--bg-card, #fff);
  border-radius: 24px;
  box-shadow: 0 4px 24px #aee4fa22, 0 1.5px 8px #0001;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.fish-canvas-wrapper canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
  border-radius: 24px;
  background: var(--bg-card, #fff);
}
.contact-caption {
  margin-top: 20px;
  color: #888;
  font-size: 1.15rem;
  text-align: center;
  letter-spacing: 1.2px;
  font-family: 'Fira Mono', 'Consolas', monospace;
  font-weight: 500;
  text-shadow: 0 2px 8px #fff8, 0 1px 0 #aee4fa44;
  min-height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: visible;
  white-space: nowrap;
}

.caption-accent-wrapper {
  display: inline-block;
  min-width: 18ch;
  max-width: 32ch;
  text-align: left;
  position: relative;
  overflow: visible;
  margin-left: 4px;
}

.caption-accent {
  /* Яркий читаемый градиент: */
  background: linear-gradient(90deg, #3b82f6 0%, #7c3aed 60%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  animation: accent-bounce 2s infinite alternate;
  display: inline-block;
  width: 100%;
  text-align: left;
  /* Сильная тень для читаемости: */
  text-shadow:
    0 2px 8px #fff,
    0 1px 0 #18181822,
    0 0 2px #38bdf8cc;
  position: static;
}

@keyframes accent-bounce {
  0% { letter-spacing: 1.5px; }
  100% { letter-spacing: 3px; }
}
</style>