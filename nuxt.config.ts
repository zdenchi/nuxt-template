import translator from './translator'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'build:before': async () => await translator(),
  },
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
  i18n: {
    legacy: false,
    baseUrl: process.env.BASE_URL,
    skipSettingLocaleOnNavigate: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'uk',
    lazy: true,
    langDir: 'lang',
    locales: [
      {
        code: 'uk',
        iso: 'uk-UA',
        name: 'Українська',
        file: 'uk-UA.json',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
  },
})
