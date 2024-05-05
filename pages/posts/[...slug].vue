<template>
  <main class="backdrop-brightness-90 absolute top-0 w-full h-screen">
    <div>
      <ContentDoc v-slot="{ doc }">
        <h1 class="text-6xl p-10 m-20 rounded-2xl shadow-md bg-white">
          {{ doc.title }}
        </h1>
      </ContentDoc>

      <NuxtLink
        to="/"
        class="absolute bottom-4 bg-[#FDE89E] p-2 rounded-2xl left-4"
        >←</NuxtLink
      >
    </div>
  </main>
</template>
