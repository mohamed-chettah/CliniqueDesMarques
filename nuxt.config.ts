// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  pages: true,
  modules: ['@nuxt/image', '@nuxt/ui', 'nuxt-marquee', '@vueuse/motion/nuxt','@hypernym/nuxt-gsap'],
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
      motionPath: true
    },
  },
})