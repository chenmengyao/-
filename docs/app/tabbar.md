### 底部导航栏

![01ed8cdd7440690082d671e8f7743a1](http://ps574m5ib.bkt.clouddn.com/01ed8cdd7440690082d671e8f7743a1.jpg)

> 在组件里面隐藏底部导航栏

```js
// 切换方式隐藏
this.$store.commit('core/toggleTabbar', true/false)

// 直接隐藏
this.$store.commit('core/hideTabbar')

// 直接显示
this.$store.commit('core/showTabbar')
```
