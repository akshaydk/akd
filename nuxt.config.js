const path = require('path')
import fs from 'fs'
import Mode from "frontmatter-markdown-loader/mode"
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

function getPaths (type) {
  return fs.readdirSync(path.resolve(__dirname, 'content', `${type}`))
    .filter(filename => path.extname(filename) === '.md')
    .map(filename => `${type}/${path.parse(filename).name}`)
}

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

module.exports = {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#5a46ff',
    height: '3px'
  },
  /*
  ** Build configuration
  */
  css: [
    'bootstrap-vue/nuxt',
    '@/assets/css/prism-material-light.css'
  ],

  build: {
    extend (config) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content'),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
          vue: {
            root: "dynamicMarkdown"
          },
          markdown(body) {
            return md.render(body)
          }
        }
      });
    }
  },
  plugins: [],
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  webfontloader: {
    custom: {
      families: ['Graphik', 'Tiempos Headline'],
      urls: ['/fonts/fonts.css']
    }
  },

  generate: {
    routes: [
      '/es', '404'
    ]
    .concat(getPaths('articles'))
  }
}
