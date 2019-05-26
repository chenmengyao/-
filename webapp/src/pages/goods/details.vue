<template lang="html">
  <div ref="good" class="suwis-good-details">
    <van-row justify="center" align="center" class="nav">
      <van-col v-for="nav in navlist" span="8" :class="{active:nav.selected}" @click.native="skip(nav)">{{nav.name}}</van-col>
    </van-row>
    <!--  -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :src="details.img" alt="">
      </van-swipe-item>
    </van-swipe>
    <!--  -->
    <van-row>
      <van-col span="24" class="title">
        {{details.title}}
      </van-col>
    </van-row>
    <van-row class="price">
      <van-col>
        <em>¥49.9</em>
      </van-col>
      <van-col>
        <span>
          {{details.sell}}人已付款
        </span>
      </van-col>
    </van-row>
    <van-row class="coupon">
      <van-col span="24">
        优惠券&nbsp;&nbsp;<span v-for="item in coupons" v-if="item.number_can>0&&item.sta==1">{{item.title}}</span>
        <i v-if="coupons.length==0">暂无可用优惠券</i>
      </van-col>
    </van-row>
    <van-cell class="interval" title="型号" is-link value="请先选择您要购买的商品型号" />
    <van-cell class="interval" title="地址" is-link :value="details.store&&details.store.site" />
    <van-cell title="运费"  :value="details.postage==0?'免邮':details.postage+'元'" />
    <van-cell>
      <span slot="title"><img class="security" src="@/assets/details/security@3x.png" alt="">该商品支持7天无理由退款</span>
    </van-cell>
    <!-- 评论 -->
    <van-cell ref="comment" class="interval comment">
      <span slot="title">评价（{{details.evaluate_count}}）</span>
      <span>好评率&nbsp;<em>97%</em></span>
    </van-cell>
    <comment-list>
      <comment-item v-for="item in 2"
        name="橘猫****到我家"
        date="2019-03-01 12:01"
        avatar="touiocn.png"
        content="拿到手了，拿着不错，蛮透明，贴合度也高，摄像头的位置刚刚好。"
        :medias="['images/details/media.jpg','images/details/media.jpg','images/details/media.jpg','images/details/media.jpg','images/details/media.jpg']">
      </comment-item>
    </comment-list>
    <!-- 评论 //-->
    <router-link class="comment-more" :to="{ path: '/', params: {} }">查看更多评价<img src="@/assets/details/more@3x.png" alt=""></router-link>
    <!-- 店铺详情 -->
    <van-tabs class="good-tabs" v-model="goodTabIdx">
      <van-tab title="商品介绍">
        <div ref="goodInfo" class="good-info interval">
          <template v-for="item in details.details">
            <div v-html="item.content.editor"></div>
          </template>
          <span class="no-data">已经没有更多啦～</span>
        </div>
      </van-tab>
      <van-tab title="规格参数">
        <div class="specification">
          <table>
            <tbody>
              <tr>
                <td>商品编号</td>
                <td>SDF45646</td>
              </tr>
              <tr v-for="o in 10">
                <td>鞋帮高度</td>
                <td>低帮</td>
              </tr>
            </tbody>
          </table>
        </div>
      </van-tab>
      <van-tab title="售后保障">
        <div class="guarantee">
          ①.这里展示的是后台发布商品的时候编辑的售后保障售后保障售后保障展示的是后台发布商品的时候编辑的售后保障售后;<br>
          ②.保障售后保障展示的是后台发布商品的时候编辑的后保障售后保障售后保障展示的是后台发布商品的时候编辑的售后保障售后;<br>
          ③.保障售后保障展示的是后台发布商品的时候编辑的售后保障售后保障售后保障展示的是后台发布商品的时候编辑的售后保障售后保障售后保障。
        </div>
      </van-tab>
    </van-tabs>
    <!-- 店铺详情 //-->
    <!-- 店铺信息 -->
    <van-row class="interval shop" v-if="details.store">
      <van-col>
        <dl>
          <dt>
            <img :src="details.store.logo" alt="">
          </dt>
          <dd>
            <h6>{{details.store.name}}</h6>
            <span>在售商品<em>{{details.store_count}}</em>件</span>
          </dd>
        </dl>
      </van-col>
      <van-col class="link">
        <router-link :to="{ path: '/', params: {} }">
          <img class="btn" src="@/assets/details/look@3x.png" alt="">
        </router-link>
      </van-col>
    </van-row>
    <!-- 店铺信息 //-->
    <!--  -->
    <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
      />
      <van-goods-action-big-btn
        text="加入购物车"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
      />
    </van-goods-action>
  </div>
</template>

<script>
const $raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
  window.setTimeout(callback, 1000 / 60)
}
export default {
  data() {
    return {
      navlist: [{
        name: '商品',
        key: 'good',
        selected: true
      }, {
        name: '评论',
        key: 'comment',
        selected: false
      }, {
        name: '详情',
        key: 'goodInfo',
        selected: false
      }],
      timer: {},
      goodTabIdx: 0,
      // 商品详情
      details: {},
      // 优惠券信息
      coupons: []
    }
  },
  created() {
    this.getDetails()
    this.getCoupons()
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll, this)
  },
  methods: {
    // 跳转
    skip(nav) {
      this.scrollTo(this.$refs[nav.key])
    },
    // 滚动到相应位置
    scrollTo(el) {
      window.cancelAnimationFrame(this.timer)
      let ot = el.offsetTop - 50
      let sy = window.scrollY
      let speed = 30
      let distance = sy > ot ? sy - speed : sy + speed
      if (distance > ot - speed * 2 && distance < ot) distance = ot
      if (distance < ot + speed * 2 && distance > ot) distance = ot
      window.scrollTo(0, distance)
      if (sy != ot) {
        this.timer = $raf(() => {
          this.scrollTo(el)
        })
      }
    },
    // 检查滚动
    checkScroll() {
      let sy = window.scrollY
      let offsetTops = []
      let idx = 0
      for (let nav of this.navlist) {
        nav.selected = false
        offsetTops.push(this.$refs[nav.key].offsetTop - 51)
      }
      if (sy < offsetTops[1]) idx = 0
      if (sy > offsetTops[1] && sy < offsetTops[2]) idx = 1
      if (sy > offsetTops[2]) idx = 2
      if (idx == 0) {
        setTimeout(() => {
          window.cancelAnimationFrame(this.timer)
        }, 680)
      }
      this.navlist[idx].selected = true
    },
    // 获取详情
    async getDetails() {
      let res = await this.$axios.post('goods/find', {
        id: this.$route.query.id
      })
      this.details = res.data.data || {}
    },
    // 获取优惠券详情
    async getCoupons() {
      let res = await this.$axios.post('goods/coupons', {
        goods_id: this.$route.query.id
      })
      this.coupons = res.data.data || []
    }
  }
}
</script>
<style lang="scss">
.good-tabs {
    .van-tabs__line {
        display: none;
    }
    .van-tab {
        color: $gray;
    }
    .van-tab--active {
        color: $red;
    }
}
</style>
<style lang="scss" scoped>
.suwis-good-details {
    position: relative;
    padding-bottom: calc(50px + 86px);
    padding-top: 50px;
    font-size: 12px;
    .nav {
        height: 50px;
        align-items: center;
        display: flex;
        font-size: 16px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        background: #fff;
        z-index: 100;

        .van-col {
            position: relative;
            text-align: center;
        }

        .active::before {
            content: '';
            position: absolute;
            width: 32px;
            margin-left: -16px;
            left: 50%;
            bottom: 0;
            border-bottom: 2px solid $red;
        }
    }

    .van-row {
        .van-col {
            padding: 10px 15px;
        }
    }

    .van-cell {
        white-space: nowrap;
        .van-cell__title {
            text-align: left;
        }
    }
    .title {
        font-size: 16px;
        color: $primary;
    }
    .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .van-col {
            flex: 1;
        }
        em {
            color: $red;
            font-style: normal;
            font-size: 16px;
        }
        span {
            color: $gray;
            font-size: 12px;
            display: block;
            text-align: right;
        }
    }
    .coupon {
        span {
            padding: 5px 8px;
            transform: scale(0.82);
            transform-origin: left;
            display: inline-block;
            color: $red;
            background: url("./../../assets/details/coupon@3x.png") no-repeat center/auto 100%;
        }
        i {
            font-size: 12px;
            font-style: normal;
            transform: scale(0.89);
            transform-origin: left;
            display: inline-block;
            color: $gray;
        }
    }
    .security {
        max-width: 15px;
        vertical-align: middle;
        display: inline-block;
        margin-right: 5px;
        margin-top: -2px;
    }
    .interval {
        border-top: 6px solid $border;
    }
    .shop {
        position: fixed;
        bottom: 50px;
        width: 100vw;
        height: 86px;
        left: 0;
        background: #fff;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #EFEFEF;
        margin-bottom: -2px;
        z-index: 399;

        .van-col {
            display: flex;
            align-items: center;
        }

        dl {
            display: flex;
            align-items: center;

            dd,
            dt {
                margin: 0;
            }
            dd {
                padding-left: 10px;
            }

            img {
                max-width: 44px;
                border-radius: 4px;
                display: block;
            }

            h6 {
                color: $primary;
                margin: 0;
                padding-bottom: 5px;
            }

            span {
                color: $gray;
            }

            em {
                font-style: normal;
                color: $red;
            }
        }
        .link {
            justify-content: center;
            .btn {
                max-width: 68px;
            }
        }
    }
    .comment {
        em {
            color: $red;
            font-style: normal;
            font-size: 14px;
        }
    }
    .comment-more {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        color: $gray;
        img {
            max-width: 15px;
            margin-left: 5px;
        }
    }
    //
    .good-info {
        padding: $interval;

        .no-data {
            color: $gray;
            text-align: center;
            display: block;
            padding: $interval;
        }
    }
    //
    .specification {
        padding: $interval;
        line-height: 26px;
        padding-bottom: 20px;
        min-height: calc(100vh - 239px);
        table {
            width: 100%;
            border-collapse: collapse;
            color: $gray;
            td {
                border: 1px solid $border;
                padding: 0 8px;

                &:first-child {
                    width: 99px;
                }
            }
        }
    }
    .guarantee {
        padding: $interval;
        line-height: 26px;
        min-height: calc(100vh - 239px);
    }
    //
    .van-goods-action {
        background: transparent;
        z-index: 399;
        .van-goods-action-mini-btn {
            background: transparent;
        }
        .van-button--warning {
            background: linear-gradient(54deg,rgba(250, 165, 55, 1) 0%,rgba(247, 149, 50, 1) 17%,rgba(240, 107, 37, 1) 100%);
            border: none;
        }
        .van-button--danger {
            background: linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
            border: none;
        }
        &::before {
            content: '';
            width: 100vw;
            background: #fff;
            position: absolute;
            height: 100%;
            left: 0;
            top: 2px;
        }
    }

}
</style>
