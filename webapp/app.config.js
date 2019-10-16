import {
  routes
} from '../webapp/src/router'

// 生成以hidePath中的路径开头的隐藏底部导航路由数组
const hidePath = ['/uc/', '/mine/']
const hideNavBarList = routes.filter(route => hidePath.some(path => route.path.startsWith(path))).map(route => route.path)

module.exports = {
  env: {
    dev: {
      // 接口地址
      apihost: 'http://huihuilai.ambcon.cn/index.php/index/',
      // 银联支付回调
      yunpaycburl: 'http://10.16.40.49:8080/#/uc/orders/yunpaycallbak'
    },
    test: {
      // 接口地址
      apihost: 'http://huihuilai.ambcon.cn/index.php/index/',
      // 银联支付回调
      yunpaycburl: 'http://10.16.40.49:8080/#/uc/orders/yunpaycallbak'
    },
    prod: {
      // 接口地址
      apihost: 'http://huihuilai.ambcon.cn/index.php/index/',
      // 银联支付回调
      yunpaycburl: 'http://10.16.40.49:8080/#/uc/orders/yunpaycallbak'
    }
  },
  common: {
    // 请求超时
    timeout: 10000,
    // 免登录地址
    licenseExemptUrls: [
      '/',
      '/goods/details',
      '/shop',
      '/register',
      '/resetpwd',
      '/resetpaypwd',
      '/user-agreement',
      '/news',
      '/news/details',
      '/goods/list',
      '/goods/classify',
      '/special/clearance',
      '/special/auction',
      '/special/flash',
      '/special/recommend',
      '/service'
    ],
    // 底部导航隐藏地址配置
    noTabbarUrls: [
      '/register',
      '/resetpaypwd',
      '/resetpwd',
      '/login',
      '/goods/details',
      ...hideNavBarList
    ]
  }
}
