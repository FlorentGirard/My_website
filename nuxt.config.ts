// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      email: 'hi@visualclub-studio.com ',
      tel: '+33638520096',
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
    '@formkit/nuxt',
    'nuxt-vitest',
    'nuxt-swiper',
  ],
})
