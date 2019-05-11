<template lang="html">
  <div class="suwis-good-details">
    <van-row justify="center" class="nav">
      <van-col span="8">商品</van-col>
      <van-col span="8">评价</van-col>
      <van-col span="8">详情</van-col>
    </van-row>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="images/index/good_02.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="images/index/good_02.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.suwis-good-details {
    position: relative;

    
}
</style>
