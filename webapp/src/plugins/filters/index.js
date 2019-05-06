import Vue from 'vue'
import filters from './filters'
for (let key in filters){
    Vue.filter(key,filters[key])
}
Vue.prototype.$filters=filters