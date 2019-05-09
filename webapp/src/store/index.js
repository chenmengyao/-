import Vue from 'vue'
import Vuex from 'vuex'
import sync from './sync'
import core from './core'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [sync],
  modules: {
    core
  }
})
