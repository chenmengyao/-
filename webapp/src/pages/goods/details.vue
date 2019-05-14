<template lang="html">
  <div class="suwis-good-details">
    <van-row justify="center" align="center" class="nav">
      <van-col span="8" class="active">商品</van-col>
      <van-col span="8">评价</van-col>
      <van-col span="8">详情</van-col>
    </van-row>
    <!--  -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="images/index/good_02.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="images/index/good_02.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
    <!--  -->
    <van-row>
      <van-col span="24">
        猫猫潮女女2019新款潮韩版时尚水桶帆布鞋猫猫潮女女2019新款潮韩版时尚经典帆布鞋
      </van-col>
    </van-row>
    <van-row>
      <van-col>
        <em>¥49.9</em>
      </van-col>
      <van-col>
        29人已付款
      </van-col>
    </van-row>
    <van-row>
      <van-col>
        优惠券
      </van-col>
      <van-col>
        领取
      </van-col>
    </van-row>
    <van-cell title="型号" is-link value="请先选择您要购买的商品型号" />
    <!--  -->
    <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
        @click="onClickMiniBtn"
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        @click="onClickMiniBtn"
      />
      <van-goods-action-big-btn
        text="加入购物车"
        @click="onClickBigBtn"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
        @click="onClickBigBtn"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.suwis-good-details {
    position: relative;

    .nav {
        height: 50px;
        align-items: center;
        display: flex;
        font-size: 16px;

        .van-col {
            position: relative;
        }

        .active::before {
            content: '';
            position: absolute;
            width: 32px;
            margin-left: -16px;
            left: 50%;
            bottom: -8px;
            border-bottom: 2px solid $red;
        }
    }

    .van-cell {
        white-space: nowrap;
        .van-cell__title {
            text-align: left;
        }
    }
}
</style>
