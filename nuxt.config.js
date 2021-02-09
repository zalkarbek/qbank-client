import env from 'dotenv'

env.config()
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV !== 'development'
const API_HOST = isDev ? process.env.HOST_DEV : process.env.HOST_PROD
const API_HOST_HTTPS = isDev ? process.env.HOST_HTTS_DEV : process.env.HOST_HTTS_PROD

export default {
  server: {
    port: Number(process.env.NUXT_PORT), // default: 3000
    host: process.env.NUXT_HOST // default: localhost
  },
  isDev,
  env: {
    isDev,
    isProd,
    baseUrl: API_HOST,
    baseSecureUrl: API_HOST_HTTPS
  },
  appDebug: process.env.APP_DEBUG,
  router: {
    middleware: ['userAgent', 'initLocale']
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'qbank-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#0A6E9E' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/dashforge.scss',
    '@/assets/lib/ionicons/css/ionicons.min.css',
    '@/assets/fonts/fontawesome-pro/scss/fontawesome.scss',
    '@/assets/fonts/fontawesome-pro/scss/duotone.scss',
    '@/assets/fonts/fontawesome-pro/scss/light.scss',
    '@/assets/fonts/fontawesome-pro/scss/solid.scss',
    '@/assets/fonts/fontawesome-pro/scss/regular.scss',
    '@/assets/fonts/fontawesome-pro/scss/brands.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/env.js', mode: 'client' },
    { src: '~/plugins/lodash.js', mode: 'client' },
    { src: '~/plugins/moment.js', mode: 'client' },
    { src: '~/plugins/jquery.js', mode: 'client' },
    { src: '~/plugins/mime.js', mode: 'client' },
    { src: '~/plugins/keyboard.js', mode: 'client' },
    { src: '~/plugins/global-methods', mode: 'client' },
    { src: '~/plugins/event-bus.js', mode: 'client' },
    { src: '~/plugins/time-out.js', mode: 'client' },
    { src: '~/plugins/i18n.js', mode: 'client' },
    { src: '~/plugins/dashboard.js', mode: 'client' },
    { src: '~/plugins/api.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['nuxt-i18n'],
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],
  toast: {
    position: 'bottom-right',
    duration: 5000,
    containerClass: ['alert']
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: true
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },
  proxy: {
    '/api/v1/': API_HOST,
    '/api/v2/': API_HOST
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      silentTranslationWarn: true
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        name: 'EN'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.js',
        name: 'RU'
      },
      {
        code: 'kg',
        iso: 'kg-KG',
        file: 'kg.js',
        name: 'KG'
      }
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
