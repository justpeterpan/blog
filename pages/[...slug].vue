<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-6xl pb-10">{{ doc.title }}</h1>
    </ContentDoc>

    <NuxtLink to="/" class="absolute bottom-4 bg-[#FDE89E] p-2 rounded-2xl"
      >←</NuxtLink
    >
  </main>
</template>
