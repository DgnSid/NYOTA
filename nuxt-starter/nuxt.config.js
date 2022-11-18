
export default {

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
    title: process.env.npm_package_name || 'Nuxt starter',
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
    { src: '@/plugins/slider', mode: 'client' }
  ],

  /*
  ** Get env variable : you must create a .env file
  */
  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL
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
    '~/modules/gsap'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: process.env.NODE_ENV === 'production' ? false : true,
    header: {
      common: {
        'Accept': 'application/json'
      },
    },
    baseUrl: process.env.API_URL,
    https: true
  },

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
