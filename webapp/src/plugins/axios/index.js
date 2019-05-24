import Vue from 'vue'
import axios from 'axios'
import config from './../../../app.config'
import log from './../log'
import qs from 'qs'

var instance = axios.create({
  baseURL: config.apihost,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 拦截器
instance.interceptors.request.use(request => {
    let token = app.$vm.$store.getters['core/token']
    if (token) {
        if (request.method === 'get') {
            // 判断是否存在token，如果存在的话，则每个http header都加上sessionkey
            request.url.indexOf('?') > 0 ? request.url += `&token=${token}` : request.url += `?token=${token}`
        } else {
            if (request.data instanceof FormData) {
                request.data.append('token', token)
            } else {
                request.data ? request.data.token = token : request.data = { token }
            }
        }
    }
    // 记录操作日志
    log.loging(instance, request);
    if (!(request.data instanceof FormData)) {
        request.data = qs.stringify(request.data)
    }
    return request
  },
  err => {
    return Promise.reject(err)
  })

Vue.prototype.$axios = instance
