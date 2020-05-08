
const pkg = require('./package')
const fontAwesome = require('./plugins/fontAwesome')


require('dotenv').config()



module.exports = {
  mode: 'universal',

  head: {
    title: 'Bubu the guide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~/assets/styles/fonts.scss',
    '~/assets/styles/main.scss',
  ],

  plugins: [
    {
      src: '~/plugins/globalComponents.js',
      mode: 'client'
    }
  ],

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    ['nuxt-fontawesome', fontAwesome.config],
    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],


  axios: {
    baseURL: process.env.API_BASE_URL
  },


  build: {
    extend (config, ctx) {
    }
  }
}
