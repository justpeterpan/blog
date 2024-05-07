<template>
  <main class="backdrop-brightness-90 absolute top-0 w-full h-screen">
    <div class="bg-white p-10 mt-20 sm:m-20 rounded-2xl shadow-sm">
      <ContentDoc v-slot="{ doc }">
        <h1 class="text-6xl pb-6">
          {{ doc.title }}
        </h1>
        <p>{{ doc.description }}</p>
        <div
          class="flex justify-center py-8 sm:p-32 w-full bg-orange-50 mt-10 rounded-3xl"
        >
          <img
            src="/musicbox.png"
            alt="post about music"
            class="w-32 h-32 img-shadow rounded-[32px]"
          />
        </div>
      </ContentDoc>

      <NuxtLink
        to="/"
        class="absolute bottom-4 bg-amber-200 px-4 py-3 shadow-md rounded-2xl left-4 z-50"
        >←</NuxtLink
      >
      <NuxtLink
        to="/"
        class="absolute top-4 right-4 bg-white px-4 py-3 rounded-2xl shadow-md"
      >
        ✦
      </NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: '100milesandrunnin blog',
  bodyAttrs: {
    class: 'overflow-hidden',
  },
})
</script>

<style>
.img-shadow {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.03),
    0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.05),
    0 1px rgba(0, 0, 0, 0.06), 0 0 0 0.4375em rgba(0, 0, 0, 0.02),
    0 24px 48px rgba(0, 0, 0, 0.08);
}
</style>
