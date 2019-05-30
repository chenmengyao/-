### 评论列表

![评论列表](http://ps574m5ib.bkt.clouddn.com/%E8%AF%84%E8%AE%BA%E5%88%97%E8%A1%A8.jpg)

### 用法

```js
<comment-list>
  <comment-item v-for="item in 2"
    name="橘猫****到我家"
    score="5"
    date="2019-03-01 12:01"
    avatar="touiocn.png"
    content="拿到手了，拿着不错，蛮透明，贴合度也高，摄像头的位置刚刚好。"
    :medias="['images/details/media.jpg','images/details/media.jpg']">
  </comment-item>
</comment-list>
```

### props

| 名称      | 描述     | 数据类型   | 默认值 |
| :------ | :----- | ------ | --- |
| name    | 用户名    | String | -   |
| date    | 评论日期   | String | -   |
| score   | 评分     | Number | -   |
| avatar  | 用户头像地址 | String | -   |
| content | 评论内容   | String | -   |
| medias  | 评论图片集合 | Array  | -   |

### methods

| 名称           | 描述   | 返回值 | 返回值说明 |
| :----------- | :--- | --- | ----- |
| click.native | 单击事件 | -   | -     |
