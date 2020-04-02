### 扫一扫

![Screenshot_20190613-162002](http://ps574m5ib.bkt.clouddn.com/Screenshot_20190613-162002.png)

### 用法

```js
<bar-code :show="scanShow"
  @close="scanShow=false"
  @success="scanSuccess">
</bar-code>
```

### props

| 名称   | 描述   | 数据类型   | 默认值 |
| :--- | :--- | ------ | --- |
| show | 是否显示 | String | -   |

### methods

| 名称      | 描述     | 返回值    | 返回值说明 |
| :------ | :----- | ------ | ----- |
| close   | 取消扫码事件 | -      | -     |
| success | 扫码成功事件 | String | 扫码的结果 |
