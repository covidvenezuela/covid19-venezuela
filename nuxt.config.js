export default {
  generate: {
    dir: 'docs'
  },
  router: {
    base: '/covid19-venezuela/'
  },

  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'COVID-19  en Venezuela' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'Coronavirus COVID-19 Casos reportados en Venezuela'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@rendergraf' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@rendergraf'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Coronavirus COVID-19 Casos reportados en Venezuela'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Coronavirus COVID-19 Casos reportados en Venezuela'
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
        content: 'Coronavirus COVID-19 Casos reportados en Venezuela'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://covidvenezuela.github.io/covid19-venezuela/covid19-venezuela/snapshot.png'
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
        content: 'Coronavirus COVID-19 Casos reportados en Venezuela'
      },
      { hid: 'og:title', name: 'og:title', content: 'COVID-19 Venezuela' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Coronavirus COVID-19 Casos reportados en Venezuela'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'COVID-19  en Venezuela' || ''
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
