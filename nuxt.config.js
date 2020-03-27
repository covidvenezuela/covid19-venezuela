var name = 'COVID-19 Venezuela'
var description = 'Coronavirus COVID-19 Casos reportados en Venezuela'
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
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: description
      },
      { hid: 'twitter:site', name: 'twitter:site', content: twitterUser },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: twitterUser
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: description
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://covidvenezuela.github.io/covid19-venezuela/snapshot.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://covidvenezuela.github.io/covid19-venezuela/snapshot.png'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://covidvenezuela.github.io/covid19-venezuela/'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: description
      },
      { hid: 'og:title', name: 'og:title', content: description },
      {
        hid: 'og:description',
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
