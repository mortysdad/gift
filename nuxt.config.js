const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
      
  ],
  
    manifest: {
      name: 'Happy Birthday',
      
      display: "standalone",
      orientation: "portrait",
      background_color: "#f5f5f5",
      theme_color: "#29434d"
     
    },

   

  /*
  ** Build configuration
  */
 build: {
  postcss: {
    plugins: {
      'postcss-cssnext': {
        features: {
          customProperties: false
        }
      }
    }
  },
  /*
  ** You can extend webpack config here
  */
  extend(config, ctx) {
    
  }
}
}
