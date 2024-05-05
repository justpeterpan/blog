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
    <ContentRenderer v-if="data" :value="data">
      <h1 class="text-6xl pb-10 m-4">{{ data.title }}</h1>
    </ContentRenderer>
    <div class="m-4">
      <ContentList path="/posts" v-slot="{ list }">
        <div class="grid gap-2 grid-cols-3">
          <NuxtLink
            v-for="post in list"
            :to="getSlug(post._path)"
            :key="post._path"
            class="bg-green-200 h-64 w-64 rounded-2xl flex flex-col-reverse p-4 hover:translate-y-[-2px] duration-100 ease-linear hover:shadow-sm"
          >
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </NuxtLink>
        </div>
      </ContentList>
    </div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: '100milesandrunnin blog',
  bodyAttrs: {
    class: 'bg-[#FFFFFC]',
  },
})

function getSlug(path: string) {
  return `/posts/${path.split('/').pop()}`
}

const { data } = await useAsyncData('page-data', () =>
  queryContent('/').findOne()
)
</script>

<style>
.page-enter-active {
  transition: transform 0.4s, backdrop-filter 0.4s ease-in-out 0.2s;
}

.page-leave-active {
  transition: backdrop-filter 0s, transform 0.4s;
}

.page-enter-from {
  transform: translateY(800px);
  backdrop-filter: brightness(1);
  opacity: 20;
}

.page-leave-to {
  transform: translateY(100vh);
  backdrop-filter: brightness(1);
  opacity: 20;
}
</style>
