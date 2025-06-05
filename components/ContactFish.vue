<template>
  <div class="fish-aquarium">
    <canvas ref="canvas" width="520" height="320"></canvas>
    <div class="contact-caption">
      <span style="font-size:1.2em;vertical-align:-2px;">🐟</span>
      Свяжитесь со мной — <span class="caption-accent">рыбная ловля запрещена!</span>
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
    ctx.fill()
    ctx.stroke()
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
    ctx.fill()
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
  background: #f8fafb;
  border-radius: 32px;
  box-shadow: 0 2px 24px #0002;
  padding: 32px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  margin: 32px auto;
  position: relative;
  z-index: 1;
}
.fish-aquarium canvas {
  border-radius: 24px;
  background: #f8fafb;
  display: block;
}
.fish-canvas-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;
}
.contact-caption {
  margin-top: 16px;
  color: #888;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 1px;
  font-family: 'Fira Mono', 'Consolas', monospace;
}
canvas {
  background: #f5f5f5;
  border-radius: 32px;
  box-shadow: 0 2px 24px #0001;
  max-width: 100%;
}
.contact-caption {
  margin-top: 20px;
  color: #888;
  font-size: 1.15rem;
  text-align: center;
  letter-spacing: 1.2px;
  font-family: 'Fira Mono', 'Consolas', monospace;
  font-weight: 500;
  text-shadow: 0 2px 8px #fff8;
}
.caption-accent {
  background: linear-gradient(90deg, #7c3aed 30%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  animation: accent-bounce 2s infinite alternate;
}
@keyframes accent-bounce {
  0% { letter-spacing: 1.5px; }
  100% { letter-spacing: 3px; }
}
</style>