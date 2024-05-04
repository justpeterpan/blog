<template>
  <div>
    <div class="w-full p-4 bg-black text-white">
      <ul class="flex flex-row justify-between">
        <li>
          <NuxtLink to="/" class="text-white">✦ Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="text-white">✦ Exit</NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtPage class="m-4" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: '100milesandrunnin blog',
  bodyAttrs: {
    class: 'bg-[#FFFFFC]',
  },
})
</script>
