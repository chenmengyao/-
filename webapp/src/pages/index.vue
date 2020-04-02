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
            <img src="@/assets/index/now@3x.png">
            <p> <span>{{item.title}}</span></p>
            
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
  <van-dialog
  v-model="isShow"
  show-cancel-button
  title="成为VIP"
  @confirm="successSubmit"
  :beforeClose="beforeClose"
  >
  <van-field
      class="ldfield"
      v-model="buildingNum"
      placeholder="请输入您的楼栋号"
  />
  </van-dialog>
</div>

</template>

<script>
import _ from 'lodash'
import config from './../../app.config'
export default {
  data() {
    return {
      banners: [],
      goods: [],
      // 已查列表的id
      goodsIds: [],
      // 滚动结束
      isShow: false,
      finished: false,
      loading: false,
      news: [],
      scanShow: false,
      codeUrl: '',
      buildingNum: '',
    }
  },
  components: {},
  created() {
    this.getBanner()
    this.getGoods()
    this.getNews()
    this.onPlusReady(() => {
      this.resetNav()
    });
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
      let url = `index/news?${new Date().getTime()}`
      let res = await this.$axios.get(url)
      res = res.data || {}
      this.news = res.data || []
    },
    // 处理扫描结果
    scanSuccess(codeUrl) {
      this.scanShow = false;
      if (!codeUrl||codeUrl.indexOf('index/user/addmember')===-1) {
          this.$toast('请扫描正确团长二维码！');
          return
      }
      this.codeUrl = codeUrl;
      this.isShow = true;
    },
    beforeClose(action, done) {
        if(action === 'cancel') {
            done() //关闭
        }
      if(action === 'confirm'&&!this.buildingNum) {
         this.$toast('请输入楼栋号')
         done(false) //不关闭弹框
      }else {
        done()
      }
    },
    successSubmit() {
        if (!this.buildingNum) {
            return
        }
        let token = app.$vm.$store.getters['core/token'];
        if (this.codeUrl.indexOf('://')==-1) {
            this.codeUrl = `${config.apihost.split('//')[0]}//${this.codeUrl}`;
        }
        let url = `${this.codeUrl}/token/${token}/region_detail/${this.buildingNum}`;
        this.$axios
            .post(url, {
            region_id: url
            })
            .then(({
            data
            }) => {
            if (data.code === 1) {
                this.isShow = false;
                this.$toast('绑定成功')
                
            } else {
                this.isShow = false;
                this.$toast(data.msg);
            }
        })
    },
  }
}
</script>
<style lang="scss" scoped>
.suwis-index {
    position: relative;
    padding-bottom: 50px;
     .news  {
      overflow-x: hidden;
      a {
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
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
        width: 100vw;
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
            flex: 1;
            padding-left: $interval;
            overflow: hidden;
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
                p {
                  flex: 1;
                  margin: 0;
                  overflow: auto;
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
