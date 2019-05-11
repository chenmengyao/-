<template>
<div class="suwis-index">
  <van-swipe :autoplay="3000"
    indicator-color="#E83F44">
    <van-swipe-item>
      <img src="images/index/banner_01.jpg"
        alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="images/index/banner_01.jpg"
        alt="">
    </van-swipe-item>
  </van-swipe>
  <!--  -->
  <div class="menus">
    <div class="col">
      <img src="@/assets/index/flash@3x.png"
        alt="">
      <span>限时抢购</span>
    </div>
    <div class="col">
      <img src="@/assets/index/clearance@3x.png"
        alt="">
      <span>低价清仓</span>
    </div>
    <div class="col">
      <img src="@/assets/index/auction@3x.png"
        alt="">
      <span>竞拍捡漏</span>
    </div>
    <div class="col">
      <img src="@/assets/index/recommend@3x.png"
        alt="">
      <span>好物推荐</span>
    </div>
    <div class="col">
      <img src="@/assets/index/service@3x.png"
        alt="">
      <span>便民服务</span>
    </div>
  </div>
  <!--  -->
  <dl class="news">
    <dt>
      <img src="@/assets/index/news@3x.png"
        alt="">
    </dt>
    <dd>
      <van-row>
        <van-col span="24">
          <router-link :to="{ name: '', params: {} }">
            <img src="@/assets/index/now@3x.png">华为手机随便买，这4款是2019年热卖款
          </router-link>
        </van-col>
        <van-col span="24">
          <router-link :to="{ name: '', params: {} }">
            <img src="@/assets/index/now@3x.png">黄皮教你如何选择适合自己的口红，显白
          </router-link>
        </van-col>
      </van-row>
    </dd>
  </dl>
  <!--  -->
  <!--  -->
  <h3 class="title">猜你喜欢</h3>
  <good-list>
    <good-item v-for="item in 10"></good-item>
  </good-list>
  <!--  -->
</div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {}
}
</script>
<style lang="scss" scoped>
.suwis-index {
    position: relative;

    .menus {
        display: flex;
        justify-content: center;
        padding: $interval 0 0;
        background: url("./../assets/index/circular@3x.png") no-repeat center top/100%;
        margin-top: -15px;
        position: relative;
        z-index: 199;
        .col {
            flex: 1;
            font-size: 12px;
            color: $primary;
            &:active {
                opacity: 0.8;
            }
            img {
                max-width: 12vw;
                display: block;
                margin: auto auto 5px;
            }
        }
    }

    .news {
        display: flex;
        align-items: center;
        font-size: 12px;
        white-space: nowrap;
        border: 6px solid $bg;
        border-left: none;
        border-right: none;
        padding: 8px 0;
        dt {
            border-right: 2px solid $bg;
            padding: 0 $interval;
            img {
                max-width: 9vw;
                display: block;
            }
        }
        dd {
            margin: 0;
            padding-left: $interval;
            a {
                flex: 1;
                display: flex;
                align-items: center;
                margin: 0;
                padding: 5px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                color: $primary;
                img {
                    display: block;
                    max-width: 9vw;
                    margin-right: 8px;
                }
            }
        }
    }

    .title {
        font-size: 16px;
        text-align: left;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 22px;
        color: rgba(51,51,51,1);
        padding-left: 12px;
        margin-bottom: 5px;
    }
}
</style>
