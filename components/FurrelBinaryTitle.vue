<template>
  <span class="binary-title">
    <span v-for="(char, i) in display" :key="i">{{ char }}</span>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const target = 'Furrel'
const binaryChars = ['0', '1']
const initialLength = 30
const display = ref(Array(initialLength).fill('0'))

function randomBinaryString(length) {
  return Array.from({ length }, () => binaryChars[Math.floor(Math.random() * 2)])
}

onMounted(() => {
  let currentLength = initialLength
  let revealStep = 0

  const scrambleInterval = setInterval(() => {
    display.value = randomBinaryString(currentLength)
  }, 40)

  setTimeout(() => {
    clearInterval(scrambleInterval)
    const shrinkInterval = setInterval(() => {
      if (currentLength > target.length) {
        currentLength--
        display.value = randomBinaryString(currentLength)
      } else {
        clearInterval(shrinkInterval)
        const revealInterval = setInterval(() => {
          for (let i = 0; i < revealStep; i++) {
            display.value[i] = target[i]
          }
          for (let i = revealStep; i < target.length; i++) {
            display.value[i] = binaryChars[Math.floor(Math.random() * 2)]
          }
          revealStep++
          if (revealStep > target.length) {
            display.value = target.split('')
            clearInterval(revealInterval)
          }
        }, 120)
      }
    }, 30)
  }, 1000)
})
</script>

<style scoped>
.binary-title {
  letter-spacing: 2px;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  transition: color 0.2s;
}
</style>