import i18n from './plugins/i18n'
import path from 'path'
import fs from 'fs'

export default {
    target: 'static',
  server: {
    port: 3010, // default: 3000
    //   host: 'nyota.adveris.dev', // default: localhost
    //   https: {
    //     key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
    //     cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
    //   },
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: true,

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Nyota',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/main.scss',
  ],

  /*
  ** CSS
  */
  styleResources: {
    scss: [
      '~/assets/sass/ryuk/_ryuk.scss',
    ]
  },

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/filters.js',
    '~/plugins/mixins.js',
    '~/plugins/axios',
    { src: '@/plugins/slider', mode: 'client' },
    { src: '@/plugins/persistedState.js', mode: 'client' },
  ],

  /*
  ** Get env variable : you must create a .env file
  */
  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL,
  },

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: {
    dirs: [
      {
        path: "~/components/ui",
        prefix: "ui",
      },
      {
        path: "~/components/layout",
        prefix: "",
      },
      {
        path: "~/components/utils",
        prefix: "utils",
      }
    ]
  },

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@braid/vue-formulate/nuxt',
    '~/modules/gsap',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'fr',
         locales: [
          {
             code: 'en',
             name: 'English'
          },
          {
             code: 'fr',
             name: 'Français'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/recaptcha',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    'nuxt-lazy-load',
  ],

  recaptcha: {
    hideBadge: true,
    mode: 'base',
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 3,
  },

  auth: {
    redirect:false,
    strategies: {
      local_company: {
        scheme: 'local',
        token: {
          property: 'token',
          global: true,
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          login: { url: `${process.env.API_URL}api/companies/login_check`, method: 'post' },
          user: { url: `${process.env.API_URL}api/c/me`, method: 'get'},
        }
      },
      local_talent: {
        scheme: 'local',
        token: {
          property: 'token',
          global: true,
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          login: { url: `${process.env.API_URL}api/talents/login_check`, method: 'post' },
          user: { url: `${process.env.API_URL}api/t/me`, method: 'get'},
        }
      }
    },
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL,
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },

  // proxy: {
  //   '/api/': {
  //     target: process.env.API_URL,
  //     pathRewrite: { '^/api/': '' },
  //     secure: false,
  //     changeOrigin: true,
  //     credentials: true,
  //     proxyHeaders: true
  //   },
  // },

  /**
   * Gsap module options
   */
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
    transpile: [
      "defu",
      "direction",
      "comma-separated-tokens",
      "bcp-47-match",
      "unist-util-is",
      "unist-util-visit",
      "hast-util-is-element",
      "hast-util-select",
      "hast-util-has-property",
      "hast-util-whitespace",
      "space-separated-tokens",
      "property-information",
      "zwitch"
    ]
  }

}
