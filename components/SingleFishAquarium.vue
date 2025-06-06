<template>
  <div class="aquarium-wrapper">
    <canvas ref="canvas" class="aquarium-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
let animationId

function getSize() {
  // минимум 320x140 максимум 400x220
  const w = Math.min(Math.max(window.innerWidth * 0.9, 320), 400)
  const h = w * 0.55
  return { w, h }
}

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  const dpr = window.devicePixelRatio || 1

  function resize() {
    const { w, h } = getSize()
    canvas.value.width = w * dpr
    canvas.value.height = h * dpr
    canvas.value.style.width = w + 'px'
    canvas.value.style.height = h + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    fish.x = w / 2
    fish.y = h / 2
    fish.size = Math.max(48, w / 7)
    // Перегенерировать пузырьки
    bubbles.forEach(b => {
      b.x = Math.random() * w
      b.y = Math.random() * h
    })
  }

  // Одна рыбка
  const fish = {
    x: 200,
    y: 110,
    size: 60,
    color: '#fff',
    t: Math.random() * Math.PI * 2,
    dir: 1
  }

  // Пузырьки
  const bubbles = Array.from({ length: 12 }, () => ({
    x: Math.random() * 400,
    y: Math.random() * 220,
    r: 3 + Math.random() * 6,
    speed: 0.5 + Math.random() * 1.2,
    alpha: 0.2 + Math.random() * 0.3
  }))

  function drawBubbles() {
    for (const b of bubbles) {
      ctx.save()
      ctx.globalAlpha = b.alpha
      ctx.beginPath()
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
      ctx.fillStyle = "#38bdf8"
      ctx.fill()
      ctx.restore()
    }
  }

  function updateBubbles() {
    const { h, w } = getSize()
    for (const b of bubbles) {
      b.y -= b.speed
      if (b.y < -10) {
        b.x = Math.random() * w
        b.y = h + Math.random() * 20
        b.r = 3 + Math.random() * 6
        b.speed = 0.5 + Math.random() * 1.2
        b.alpha = 0.2 + Math.random() * 0.3
      }
    }
  }

  function drawFish(fish) {
    ctx.save()
    ctx.translate(fish.x, fish.y + Math.sin(fish.t) * (fish.size / 7))
    ctx.rotate(Math.sin(fish.t) * 0.08)
    // Тело
    ctx.beginPath()
    ctx.ellipse(0, 0, fish.size, fish.size / 2.2, 0, 0, Math.PI * 2)
    ctx.fillStyle = fish.color
    ctx.globalAlpha = 0.95
    ctx.shadowColor = "#0002"
    ctx.shadowBlur = 8
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.shadowBlur = 0
    ctx.strokeStyle = "#181818"
    ctx.lineWidth = 2
    ctx.stroke()
    // Хвост
    ctx.beginPath()
    ctx.moveTo(fish.size, 0)
    ctx.lineTo(fish.size + 18, -16 + Math.sin(fish.t * 2) * 6)
    ctx.lineTo(fish.size + 18, 16 - Math.sin(fish.t * 2) * 6)
    ctx.closePath()
    ctx.fillStyle = fish.color
    ctx.strokeStyle = "#181818"
    ctx.fill()
    ctx.stroke()
    // Глаз
    ctx.beginPath()
    ctx.arc(-fish.size / 2, -8, 6, 0, Math.PI * 2)
    ctx.fillStyle = "#181818"
    ctx.fill()
    ctx.restore()
  }

  function animate() {
    const { w, h } = getSize()
    ctx.clearRect(0, 0, w, h)
    drawBubbles()
    drawFish(fish)
    updateBubbles()
    fish.t += 0.012
    animationId = requestAnimationFrame(animate)
  }

  resize()
  animate()
  window.addEventListener('resize', resize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(animationId)
  })
})
</script>

<style scoped>
.aquarium-wrapper {
  background: #f8fafb;
  border-radius: 32px;
  box-shadow: 0 2px 24px #0001;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  max-width: 400px;
  height: auto;
  aspect-ratio: 400/220;
  margin: 0 auto;
}
.aquarium-canvas {
  display: block;
  border-radius: 32px;
  width: 100%;
  height: auto;
  aspect-ratio: 400/220;
  max-width: 400px;
}
@media (max-width: 600px) {
  .aquarium-wrapper {
    max-width: 98vw;
    border-radius: 20px;
    box-shadow: 0 1px 12px #0002;
  }
  .aquarium-canvas {
    border-radius: 20px;
  }
}
</style>