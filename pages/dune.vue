<script setup lang="ts">
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { Stars } from '@tresjs/cientos'

const yRotation = shallowRef(0)
const xRotation = shallowRef(0)
const mouseX = ref(0)
const mouseY = ref(0)

const updateMousePosition = (e: MouseEvent) => {
  mouseX.value = (e.clientX / window.innerWidth) * 2 - 1
  mouseY.value = -(e.clientY / window.innerHeight) * 2 + 1
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition)
})

useRenderLoop().onLoop(() => {
  yRotation.value += (0.001 * mouseX.value) / 10
  xRotation.value += (0.001 * mouseY.value) / 10
})
</script>

<template>
  <div>
    <TresCanvas clear-color="#1E1E1E" window-size class="-z-10">
      <TresPerspectiveCamera :position="[0, 2, 5]" />
      <Stars
        :rotation="[xRotation, yRotation, 0]"
        :radius="50"
        :depth="50"
        :count="5000"
        :size-attenuation="true"
      />
      <TresGridHelper :args="[40, 40]" :position="[0, 1.5, 0]" />
    </TresCanvas>
  </div>
</template>
