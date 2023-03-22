// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      email: 'hi@visualclub-studio.com ',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_vars.scss" as *; ',
        },
      },
    },
  },
  modules: [
    ['@nuxtjs/robots', { UserAgent: '*' }],
    '@nuxtjs/device',
    'nuxt-vitest',
    'nuxt-swiper',
  ],
})
