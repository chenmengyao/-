import Vue from 'vue'
import Vuex from 'vuex'
import vsync from 'suwis-vuex-sync'
import core from './core'

// 设置存储方式
vsync.setOptions({
  storage: 'localStorage'
})

Vue.use(Vuex)
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vsync.sync],
  modules: {
    core
  }
})
