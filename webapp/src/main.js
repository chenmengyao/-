import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册组件
import '@/components'
// 注册插件
import '@/plugins'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
