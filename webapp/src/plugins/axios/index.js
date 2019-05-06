import Vue from 'vue'
import axios from 'axios'
import config from './../../../app.config'
import log from './../log'

var instance = axios.create({
  baseURL: config.apihost,
  withCredentials: true
})

// 拦截器
instance.interceptors.request.use(request => {
    let token = app.$vm.$store.getters['core/token']
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上sessionkey
      request.url.indexOf('?') > 0 ? request.url += `&ACCESS_TOKEN=${token}` : request.url += `?ACCESS_TOKEN=${token}`
    }
    // 记录操作日志
    log.loging(instance, request)
    return request;
  },
  err => {
    return Promise.reject(err);
  })

Vue.prototype.$axios = instance
