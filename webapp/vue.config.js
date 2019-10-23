// vue.config.js
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/variables.scss'),
        path.resolve(__dirname, './src/styles/index.scss')
      ]
    }
  },
  transpileDependencies: [
    'vue-echarts-v3',
    'suwis-vuex-sync'
  ]
}
