### 优惠券列表组件

![微信截图\_20190530174057](http://ps574m5ib.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190530174057.jpg)

### 用法

```js
<coupon-list v-model="couponsVisible" title="请领取优惠券">
  <coupon-item
    v-for="item in list"
    title="新人优惠券"
    desc="满1000元即可使用"
    price="50"
    time="2019-02-01 17:05"
    btn-text="领取"
    @click="test">
  </coupon-item>
</coupon-list>
```

### props coupon-list

| 名称      | 描述      | 数据类型    | 默认值   |
| :------ | :------ | ------- | ----- |
| v-model | 是否显示    | Boolean | false |
| title   | 优惠券面板标题 | String  | -     |

### props coupon-item

| 名称       | 描述    | 数据类型   | 默认值 |
| :------- | :---- | ------ | --- |
| title    | 优惠券标题 | String | -   |
| desc     | 优惠券描述 | String | -   |
| price    | 优惠券价格 | Number | -   |
| time     | 有效时间  | String | -   |
| btn-text | 按钮文字  | String | -   |

### methods

| 名称    | 描述   | 返回值    | 返回值说明                                |
| :---- | :--- | ------ | ------------------------------------ |
| click | 单击事件 | Object | {title:'',desc:'',price :'',time:''} |
