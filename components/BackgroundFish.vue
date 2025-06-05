<template>
  <canvas ref="canvas" style="position:fixed;inset:0;z-index:0;pointer-events:none;width:100vw;height:100vh;"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'

// Исправлено: ширина и высота только после onMounted (SSR-safe)
const width = ref(0)
const height = ref(0)
const canvas = ref(null)

function randomColor() {
  const colors = ['#fff', '#fbbf24', '#38bdf8', '#a78bfa', '#f472b6', '#34d399']
  return colors[Math.floor(Math.random() * colors.length)]
}

onMounted(() => {
  width.value = window.innerWidth
  height.value = window.innerHeight

  const ctx = canvas.value.getContext('2d')
  const dpr = window.devicePixelRatio || 1
  canvas.value.width = width.value * dpr
  canvas.value.height = height.value * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  // Пузырьки
  const bubbles = Array.from({ length: 32 }, () => ({
    x: Math.random() * width.value,
    y: Math.random() * height.value,
    r: 4 + Math.random() * 8,
    speed: 0.5 + Math.random() * 1.5,
    alpha: 0.15 + Math.random() * 0.25
  }))

  // Рыбки
  const fishCount = 7
  const fishes = Array.from({ length: fishCount }, () => ({
    x: Math.random() * width.value,
    y: 80 + Math.random() * (height.value - 160),
    size: 32 + Math.random() * 32,
    speed: 0.6 + Math.random() * 1.2,
    dir: Math.random() > 0.5 ? 1 : -1,
    color: randomColor(),
    t: Math.random() * Math.PI * 2
  }))

  // === ДОБАВЬ: переменная и обработчик мыши ===
  const mouse = { x: width.value / 2, y: height.value / 2 }
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  function drawWaves() {
    ctx.save()
    ctx.globalAlpha = 0.13
    ctx.strokeStyle = '#e5e8ea'
    ctx.lineWidth = 32
    for (let j = 0; j < 3; j++) {
      ctx.beginPath()
      for (let i = 0; i <= width.value; i += 10) {
        ctx.lineTo(
          i,
          120 + j * 180 +
            Math.sin((i / 160) + j + Date.now() / 3000 + j * 1.5) * (24 + j * 6)
        )
      }
      ctx.stroke()
    }
    ctx.globalAlpha = 1
    ctx.restore()
  }

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
    for (const b of bubbles) {
      b.y -= b.speed
      if (b.y < -10) {
        b.x = Math.random() * width.value
        b.y = height.value + Math.random() * 40
        b.r = 4 + Math.random() * 8
        b.speed = 0.5 + Math.random() * 1.5
        b.alpha = 0.15 + Math.random() * 0.25
      }
    }
  }

  function drawFish(fish) {
    ctx.save()
    ctx.translate(fish.x, fish.y + Math.sin(fish.t) * 12)
    if (fish.dir === +1) {
      ctx.scale(-1, -1)
      ctx.translate(-fish.size * 2, 0)
    }
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

  function updateFishes() {
    for (const fish of fishes) {
      // расстояние до курсора
      const dx = mouse.x - fish.x
      const dy = mouse.y - fish.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 180) {
        // Плывёт к курсору
        fish.x += dx * 0.012 * fish.speed
        fish.y += dy * 0.012 * fish.speed
        // Разворачивается к курсору
        fish.dir = dx > 0 ? 1 : -1
      } else {
        // Обычное движение
        fish.x += fish.speed * fish.dir
      }

      fish.t += 0.012 + Math.random() * 0.01

      if (fish.dir === 1 && fish.x > width.value + 60) {
        fish.x = -60
        fish.y = 80 + Math.random() * (height.value - 160)
      }
      if (fish.dir === -1 && fish.x < -60) {
        fish.x = width.value + 60
        fish.y = 80 + Math.random() * (height.value - 160)
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width.value, height.value)
    drawWaves()
    drawBubbles()
    for (const fish of fishes) drawFish(fish)
    updateBubbles()
    updateFishes()
    requestAnimationFrame(animate)
  }

  animate()
})
</script>