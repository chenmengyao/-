export default {
  // 接口地址
  apihost: 'http://huihuilai.ambcon.cn/index.php/index/',
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
    '/login'
  ]
}
