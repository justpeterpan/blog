<template>
  <div>
    <ContentRenderer v-if="data" :value="data">
      <h1 class="text-6xl pb-10 sm:pb-2 ml-20 mt-10 sticky">
        {{ data.title }}
      </h1>
    </ContentRenderer>
    <div>
      <div class="grid gap-2 list-grid mx-1 sm:m-20">
        <NuxtLink
          v-for="post in posts?.slice(currentIndex, currentIndex + 6)"
          :to="getSlug(post._path!)"
          :key="post._path"
          class="items-stretch bg-amber-200 sm:size-full rounded-2xl flex flex-col-reverse sm:p-4 hover:translate-y-[-2px] duration-100 ease-linear hover:shadow-sm"
        >
          <div class="p-4">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </div>
          <div class="flex justify-center">
            <img
              :src="post.image.src"
              alt="blog post cover"
              class="rounded-[32px] w-20 h-20 sm:w-24 sm:h-24 mx-4 my-8 sm:m-8 img-shadow"
            />
          </div>
        </NuxtLink>
      </div>
      <div class="flex gap-2 mx-1 sm:m-20">
        <button
          @click="backPagination(posts?.length)"
          :disabled="currentIndex < 0"
          :class="
            currentIndex > 0
              ? 'cursor-pointer text-neutral-800'
              : 'cursor-not-allowed text-neutral-400'
          "
        >
          <span v-if="currentIndex > 0">←</span> back
        </button>
        {{ currentIndex + 1 }} | {{ posts?.length }}
        <button
          @click="nextPagination(posts?.length)"
          :disabled="!!posts?.length && currentIndex + 6 >= posts?.length"
          :class="
            !!posts?.length && currentIndex + 6 >= posts?.length
              ? 'cursor-not-allowed text-neutral-400'
              : 'cursor-pointer text-neutral-800'
          "
        >
          next
          <span v-if="!!posts?.length && currentIndex + 6 <= posts?.length"
            >→</span
          >
        </button>
      </div>
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

const route = useRoute()

const currentIndex = ref(0)

if (route.query.index) {
  currentIndex.value = Number(route.query.index)
}
if (!!route.query.index) {
  currentIndex.value = 0
}

function getSlug(path: string) {
  return `/posts/${path.split('/').pop()}`
}

function nextPagination(length: number | undefined, index: number = 6) {
  console.log('next')
  if (length && index < length) {
    currentIndex.value += index
  }
  navigateTo({ query: { index: currentIndex.value } })
}

function backPagination(length: number | undefined, index: number = 6) {
  if (currentIndex.value === 0) {
    currentIndex.value = 0
    return
  }
  if (length && index < length) {
    currentIndex.value -= index
    navigateTo({ query: { index: currentIndex.value } })
  }
}

const { data } = await useLazyAsyncData('page-data', () =>
  queryContent('/').findOne()
)
const { data: posts } = await useLazyAsyncData('posts', () =>
  queryContent('/posts').find()
)
</script>

<style>
.page-enter-active {
  transition: transform 0.4s, backdrop-filter 0.4s ease-in-out 0.2s;
}

.page-enter-from {
  transform: translateY(800px);
  backdrop-filter: brightness(1);
  opacity: 20;
}

.list-grid {
  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
}

.img-shadow {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.03),
    0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.05),
    0 1px rgba(0, 0, 0, 0.06), 0 0 0 0.4375em rgba(0, 0, 0, 0.02),
    0 24px 48px rgba(0, 0, 0, 0.08);
}
</style>
