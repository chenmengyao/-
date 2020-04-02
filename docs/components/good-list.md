### 商品列表

![商品列表](http://ps574m5ib.bkt.clouddn.com/%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8.jpg)

### 用法

```js
<good-list>
  <good-item v-for="item in goods"
    :img="item.img"
    :title="item.title"
    :price="item.price_min"
    :sell="item.sell"
    @click.native="$router.push({path:'/goods/details', query: {id: item.id}})">
  </good-item>
</good-list>
```

### props

| 名称    | 描述    | 数据类型   | 默认值 |
| :---- | :---- | ------ | --- |
| title | 优惠券标题 | String | -   |
| img   | 图片地址  | String | -   |
| price | 优惠券价格 | Number | -   |
| sell  | 已售数量  | Number | -   |

### methods

| 名称           | 描述   | 返回值 | 返回值说明       |
| :----------- | :--- | --- | ----------- |
| click.native | 单击事件 | -   | 根据需要可传 item |
