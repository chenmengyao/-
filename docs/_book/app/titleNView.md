### 底部导航栏

![01ed8cdd7440690082d671e8f7743a1](http://ps574m5ib.bkt.clouddn.com/01ed8cdd7440690082d671e8f7743a1.jpg)

> 修改标题文字

```js
this.$store.commit('core/header', {
  // 标题
  title: '标题栏文字',
  // 按钮组
  buttons: {
    // 左边按钮配置
    left: {
      // 字号
      fontSize: '27px',
      // 字体路径
      fontSrc: '_www/fonts/iconfont.ttf',
      // 按钮文字
      text: '分享',
      // 监听点击
      onclick(){

      }
    },
    // 右边图标
    right: {
      // 字号
      fontSize: '27px',
      // 字体路径
      fontSrc: '_www/fonts/iconfont.ttf',
      // 按钮文字
      text: '分享',
      // 监听点击
      onclick(){

      }
    }
  }
})
```
