// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  routeRules: {
    '/': { prerender: true },
    '/posts/**': { prerender: true, static: true, swr: true },
  },
  nitro: {
    preset: 'cloudflare-pages-static',
    prerender: {
      crawlLinks: true,
      concurrency: 10,
      interval: 10,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
