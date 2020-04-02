import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('@/assets/loading.gif'),
  error: require('@/assets/404.jpg')
})
