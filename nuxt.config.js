var name = 'Venezuela Coronavirus Mapa Interactivo | COVID-19 Venezuela'
var description =
  'Venezuela Coronavirus Mapa Interactivo | COVID-19 Casos reportados en Venezuela'
var twitterUser = '@rendergraf'

export default {
  generate: {
    dir: 'docs'
  },
  router: {
    base: '/covid19-venezuela/'
  },
  env: {
    country: 'Venezuela',
    gitUser: 'covidvenezuela',
    gitRepotitory: 'covid19-venezuela',
    correo: 'covidvenezuela@gmail.com'
  },

  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#2e2575' },
      {
        name: 'description',
        content: description
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: twitterUser
      },
      {
        name: 'twitter:creator',
        content: twitterUser
      },
      {
        name: 'twitter:title',
        content: name
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content:
          'https://covidvenezuela.github.io/covid19-venezuela/snapshot.png'
      },
      {
        name: 'twitter:image:alt',
        content: description
      },

      {
        property: 'og:image',
        content:
          'https://covidvenezuela.github.io/covid19-venezuela/snapshot.png'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:url',
        content: 'https://covidvenezuela.github.io/covid19-venezuela/'
      },
      {
        name: 'og:site_name',
        content: description
      },
      { name: 'og:title', content: description },
      {
        name: 'og:description',
        content: description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/covid19-venezuela/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00d1b2' },
  /*
   ** Global CSS
   */
  css: [
    /*{ src: '~/assets/css/main.scss', lang: 'scss' }*/
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
