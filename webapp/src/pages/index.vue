<template>
<div class="suwis-index">
  <van-swipe class="banner"
    :autoplay="3000"
    indicator-color="#E83F44">
    <van-swipe-item v-for="item in banners">
      <router-link :to="{ path: '/goods/details', query: {id: item.goods_id} }">
        <img :src="item.img">
        <!-- 临时占位 -->
        <!-- <img src="images/index/banner_01.jpg"> -->
      </router-link>
    </van-swipe-item>
  </van-swipe>
  <!--  -->
  <div class="menus">
    <router-link to="/special/flash"
      class="col">
      <img src="@/assets/index/flash@3x.png"
        alt="">
      <span>限时抢购</span>
    </router-link>
    <router-link to="/special/clearance"
      class="col">
      <img src="@/assets/index/clearance@3x.png"
        alt="">
      <span>底价清仓</span>
    </router-link>
    <router-link to="/special/auction"
      class="col">
      <img src="@/assets/index/auction@3x.png"
        alt="">
      <span>竞拍捡漏</span>
    </router-link>
    <router-link to="/special/recommend"
      class="col">
      <img src="@/assets/index/recommend@3x.png"
        alt="">
      <span>好物推荐</span>
    </router-link>
    <router-link to="/service"
      class="col">
      <img src="@/assets/index/service@3x.png"
        alt="">
      <span>便民服务</span>
    </router-link>
  </div>
  <!--  -->
  <dl class="news">
    <dt>
      <router-link to="/news">
        <img src="@/assets/index/news@3x.png"
          alt="">
      </router-link>
    </dt>
    <dd>
      <van-row>
        <van-col span="24"
          v-for="(item,idx) in news"
          v-if="idx<2">
          <router-link :to="{ path: '/news/details', query: {id: item.id} }">
            <img src="@/assets/index/now@3x.png">{{item.title}}
          </router-link>
        </van-col>
      </van-row>
    </dd>
  </dl>
  <!--  -->
  <!--  -->
  <h3 class="title">猜你喜欢</h3>
  <van-list v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad">
    <good-list>
      <good-item v-for="item in goods"
        :img="item.img"
        :title="item.title"
        :price="item.price_min"
        :sell="item.sell"
        @click.native="$router.push({path:'/goods/details', query: {id: item.id}})">
      </good-item>
    </good-list>
  </van-list>
  <!--  -->
  <!-- 扫码 -->
  <bar-code :show="scanShow"
    @close="scanShow=false"
    @success="scanSuccess"></bar-code>
  <!-- 扫码 //-->
</div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      banners: [],
      goods: [],
      // 已查列表的id
      goodsIds: [],
      // 滚动结束
      finished: false,
      loading: false,
      news: [],
      scanShow: false
    }
  },
  components: {},
  created() {
    this.getBanner()
    this.getGoods()
    this.getNews()
    this.onPlusReady(() => {
      this.resetNav()
    })
  },
  watch: {
    $route(val, oldVal) {
      if (val.path == '/') this.resetNav()
    }
  },
  methods: {
    // 重置导航
    resetNav() {
      this.$store.commit('core/header', {
        title: '惠回来',
        // 清空按钮
        buttons: {
          // 左边按钮配置
          left: {
            float: 'left',
            // 字号
            fontSize: '27px',
            // 字体路径
            fontSrc: '_www/fonts/iconfont.ttf',
            // 按钮文字
            text: '\ue673',
            // 监听点击
            onclick: () => {
              this.scanShow = true
            }
          },
          // 右边图标
          right: {
            float: 'right',
            // 字号
            fontSize: '27px',
            // 字体路径
            fontSrc: '_www/fonts/iconfont.ttf',
            // 按钮文字
            text: '\ue608',
            // 监听点击
            onclick: () => {
              if (this.scanShow) return
              this.$router.push('/mine/information')
            }
          }
        }
      })
    },
    // 获取banner
    async getBanner() {
      let res = await this.$axios.get('index/index')
      res = res.data.data || {}
      this.banners = res.banner || []
    },
    // 商品列表
    async getGoods() {
      this.loading = true
      let res = await this.$axios.post(`index/goods`, {
        goods_ids: this.goodsIds.join(',')
      })
      res = res.data || {}
      let list = res.data || []
      this.finished = list.length == 0
      this.cacheids(list)
      this.goods = this.goods.concat(list)
      this.loading = false
    },
    cacheids(list) {
      for (let item of list) {
        this.goodsIds.push(item.id)
      }
      // 去重
      this.goodsIds = _.uniq(this.goodsIds)
    },
    //
    onLoad() {
      if (this.finished) return
      this.getGoods()
    },
    // 新闻资讯
    async getNews() {
      let res = await this.$axios.get('index/news')
      res = res.data || {}
      this.news = res.data || []
    },
    // 处理扫描结果
    scanSuccess(evt) {
      this.$toast(evt)
    }
  }
}
</script>
<style lang="scss" scoped>
.suwis-index {
    position: relative;
    padding-bottom: 50px;

    .banner {
        height: 43.9vw;
        overflow: hidden;
    }

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
            text-align: center;
            &:active {
                opacity: 0.8;
            }
            img {
                width: 12vw;
                height: 12vw;
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
