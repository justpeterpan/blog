<template>
  <main class="m-4">
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-6xl pb-10">{{ doc.title }}</h1>
    </ContentDoc>
    <ContentList path="/posts" v-slot="{ list }">
      <NuxtLink
        v-for="post in list"
        :to="getSlug(post._path)"
        :key="post._path"
        class="bg-green-200 h-64 w-64 rounded-2xl flex flex-col-reverse p-4"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </NuxtLink>
    </ContentList>
  </main>
</template>

<script lang="ts" setup>
function getSlug(path: string) {
  return `/posts/${path.split('/').pop()}`
}
</script>
