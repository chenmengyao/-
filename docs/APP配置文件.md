#### APP配置文件

> 配置文件位于 webapp/app.config.js

```js
export default {
  // 接口地址
  apihost: 'http://huihuilai.ambcon.cn/index.php/index/',
  // 请求超时
  timeout: 10000,
  // 免登录地址
  licenseExemptUrls: [
    '/',
    '/goods/details',
  ],
  // 底部导航隐藏地址配置
  noTabbarUrls: [
    '/register',
  ]
}
```
