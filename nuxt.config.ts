// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  typescript: { shim: false },
  colorMode: { classSuffix: '' },
  telemetry: false,
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: {},
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-lazy-hydrate',
    '@nuxtjs/partytown',
  ],
})
