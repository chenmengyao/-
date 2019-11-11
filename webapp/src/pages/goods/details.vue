<template lang="html">
  <div ref="good" class="suwis-good-details">
    <van-row justify="center" align="center" class="nav">
      <van-col v-for="nav in navlist" span="8" :key="nav.key" @click.native="changeClor(nav.key)" :class="{active:nav.key===faly}" v-scroll-to="`#${nav.key}`">{{nav.name}}</van-col>
    </van-row>
    <!--  -->
    <van-swipe :id="navlist[0].key" class="banner" ref="banner" :autoplay="3000" indicator-color="#E83F44">
      <van-swipe-item>
        <img :src="details.img" alt="">
      </van-swipe-item>
      <van-swipe-item v-for="item in details.stand">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 状态条 -->
    <good-status :details="details" :type="$route.query.type||''"></good-status>
    <!-- 状态条 //-->
    <!--  -->
    <van-row>
      <van-col span="24" class="title">
        {{details.hdtitle}}
      </van-col>
    </van-row>
    <template v-if="details.type!=2">
      <van-row class="price" v-if="details.type!=4">
        <van-col>
          <em class="gray" v-if="details.type==1">¥{{details.price_max}}</em><em>¥{{details.price_min}}</em> <img v-if="details.type==1" class="qg" src="@/assets/details/qg.png" alt=""></span>
        </van-col>
        <van-col>
          <span v-if="details.type==2">
            {{details.price_count}}人已出价
          </span>
          <span v-else>
            {{details.sell}}人已付款
          </span>
        </van-col>
      </van-row>
      <van-row class="coupon">
        <van-col span="24">
          优惠券&nbsp;&nbsp;<span @click="couponsVisible=true" v-for="item in coupons" v-if="item.number_can>0&&item.sta==1">{{`满${item.total}减${item.sum}`}}</span>
          <i v-if="coupons.length==0">暂无可用优惠券</i>
        </van-col>
      </van-row>
    </template>
    <template v-else>
      <van-row>
        <van-col style="color:#E83F44;">*该商品最低出价{{details.price_min}}元</van-col>
      </van-row>
    </template>
    <van-cell class="interval" title="型号" is-link :value="current.selectedSkuComb.name" @click="showSku('hideSku')"/>
    
    <van-row>
        <van-col span="6">店铺地址</van-col>
        <van-col span="18" style="color:#969799;text-align:right;">{{details.store&&details.store.site}}</van-col>
    </van-row>
    <van-cell class=" style" style="padding:0;">
        <!-- <span slot="title">店铺地址</span>
        <span >{{details.store&&details.store.site}}</span> -->
    </van-cell>
    <van-cell title="运费"  :value="details.postage==0?'免邮':details.postage||''+'元'" />
    <van-cell v-if="details.is7=='true'">
      <span slot="title"><img class="security" src="@/assets/details/security@3x.png" alt="">该商品支持7天无理由退款</span>
    </van-cell>
    <!-- 评论 -->
    <van-cell ref="comment" :id="navlist[1].key" class="interval comment">
      <span slot="title">评价（{{details.evaluate_count}}）</span>
      <span v-if="details.evaluate_count>0">好评率&nbsp;<em>{{details.feedback * 100}}%</em></span>
    </van-cell>
    <comment-list v-if="details.evaluate">
      <!-- :date="$moment(item.evaluate_time+1000).format('YYYY-mm-DD HH:MM:SS')" -->
      <comment-item v-for="(item,idx) in details.evaluate"
        v-if="idx<3"
        :name="item.nickname"
        :avatar="item.photo"
        :date='item.evaluate_time'
        :score="((item.evaluate_express + item.evaluate_serve + item.evaluate_quality) / 15) * 5"
        :content="item.evaluate"
        @lookImg="lookImg"
        :medias="JSON.parse(item.evaluate_img)||[]">
      </comment-item>
      <van-row v-if="details.evaluate.length==0" type="flex" align="center" justify="center">
        <van-col style="color:#999999;">
          暂无评价~
        </van-col>
      </van-row>
    </comment-list>
    <!-- 评论 //-->
    <router-link v-if="details.evaluate&&details.evaluate.length>=2" class="comment-more" :to="{ path: '/goods/comment-list', query: {id: details.id} }">查看更多评价<img src="@/assets/details/more@3x.png" alt=""></router-link>
    <!-- 店铺详情 -->
    <div ref="content" :id="navlist[2].key">
      <van-tabs class="good-tabs" v-model="goodTabIdx">
        <van-tab title="商品介绍">
          <div v-if="details.details" class="good-info interval content">
            <video x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline v-if="details.details[0].content.video" :src="details.details[0].content.video" controls></video>
            <img :src="details.details[0].content.img" alt="">
            <div v-html="details.details[0].content.editor"></div>
            <span class="no-data">已经没有更多啦～</span>
          </div>
        </van-tab>
        <van-tab title="规格参数">
          <div v-if="details.details" class="specification content">
            <img :src="details.details[1].content.img" alt="">
            <div v-html="details.details[1].content.editor"></div>
          </div>
        </van-tab>
        <van-tab title="售后保障">
          <div v-if="details.details" class="guarantee content">
            <img :src="details.details[2].content.img" alt="">
            <div v-html="details.details[2].content.editor"></div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
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
        <router-link :to="{ path: '/shop', query: {id: details.store.id } }">
          <img class="btn" src="@/assets/details/look@3x.png" alt="">
        </router-link>
      </van-col>
    </van-row>
    <!-- 店铺信息 //-->
    <!-- 商品规格 -->
    <van-sku
      v-model="skuVisible"
      stepper-title="数量"
      :sku="sku"
      :goods="skugoods"
      :goods-id="details.id"
      :hide-stock="sku.hide_stock"
      :quota="recordSelectedNum"
      :quota-used="0"
      reset-stepper-on-hide
      :show-soldout-sku="true"
      :initial-sku="initialSku"
      @buy-clicked="skuConfirm"
      @stepper-change="numChange"
    >
      <!-- 自定义 sku-header-price -->
      <template slot="sku-header-price" slot-scope="props">
        <div class="van-sku__goods-price" v-if="details.type==2&&details.isauction==1">
          <span class="van-sku__price-symbol">当前价格：</span>
        </div>
        <div class="van-sku__goods-price" v-if="details.type==2">
          <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ details.price_max ||  details.price_min}}</span>
        </div>
        <div class="van-sku__goods-price" v-if="!(details.type==2)">
          <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.price }}</span>
        </div>
        <div class="van-sku__stock">
          <span class="van-sku__price-symbol">库存{{props.selectedSkuComb&&props.selectedSkuComb.count ?props.selectedSkuComb.count: details.inventory }}{{details.unit}}</span>
        </div>
        <div class="van-sku__goods-name1 van-sku__goods-name van-ellipsis" v-if="props.selectedSkuComb&&props.selectedSkuComb.name">
           已选择 {{ props.selectedSkuComb.name }}
        </div>
      </template>
      <!-- 数量 -->
      <!-- 数量 -->
      <template slot="sku-stepper"  slot-scope="props">
        <div v-if="details.type!==2">
          <van-row type="flex" align="center">
            <van-col> 数量</van-col>
            <van-col><van-stepper @plus="numChange(current.selectedNum,props.selectedSkuComb&&props.selectedSkuComb.count ?props.selectedSkuComb.count: details.inventory)" @minus="numChange(good,-1)" v-model="current.selectedNum" :max="props.selectedSkuComb&&props.selectedSkuComb.count ?props.selectedSkuComb.count: details.inventory"/></van-col>
          </van-row>
        </div>
        <div v-else>
          <van-row type="flex" align="center">
            <van-col> 数量</van-col>
            <van-col><van-stepper v-model="current.selectedNum"  disabled/></van-col>
          </van-row>
          <van-row type="flex" align="center"  v-if="details.isauction==1">
            <van-col  style="white-space: nowrap;" > 出价</van-col>
            <van-col style="min-width: 156px;"><van-stepper v-model="currentMarkup" /></van-col>
            <sapn style="font-size:11px"> 每次加价不低于￥{{details.lowest_price}}</sapn>
          </van-row>
          <van-row type="flex" align="center"  v-if="details.isauction==1">
            <van-col> <span class="redSpan">*</span>最低出价<span class="redSpan">{{details.price_min}}</span>元</van-col>
          </van-row>
        </div>
        
      </template>
      <!--  -->
      <div slot="sku-messages"></div>
      <!-- 自定义 sku actions -->
      <template slot="sku-actions" slot-scope="props">
        <div class="van-sku-actions" style="width:86vw;margin:auto;padding:3.9vw 0;">
          <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 :disabled='!details.inventory' -->
          <van-button
            square
            size="large"
            type="primary"
            @click="props.skuEventBus.$emit('sku:buy')"
          >
          确定
          </van-button>
        </div>
      </template>
    </van-sku>
    <!-- 商品规格 //-->
    <!-- 优惠券 //-->
    <coupon-list v-model="couponsVisible" title="请领取优惠券">
      <coupon-item
        v-for="item in coupons"
        :item="item"
        :title="item.title"
        :desc="`满${item.total}减${item.sum}`"
        :price="item.sum"
        :time="item.end_time"
        :type="(item.number_can>0&&Date.now()<item.end_time*1000)||item.type==0?1:0"
        @click="receiveCoupon(item)">
        <span slot="btn-text" v-if="item.type==0">
          <template v-if="item.number_can<=0">已领取完</template>
          <template v-else>
            {{item.get_sta==0?'领取':'已领取'}}
          </template>
        </span>
        <span slot="btn-text" v-else>
          <template v-if="item.number_can<=0">已领取完</template>
          <template v-else>
            <template v-if="Date.now()>item.end_time*1000">已到期</template>
          </template>
          <template v-if="item.number_can>0&&Date.now()<item.end_time*1000">
            {{item.get_sta==0?'领取':'已领取'}}
          </template>
        </span>
        <span slot="time" v-if="item.type==0">
          领取后{{item.day}}天内有效
        </span>
      </coupon-item>
    </coupon-list>
    <!-- 优惠券 -->
    <!-- 分享 -->
    <share v-model="shareVisible"></share>
    <!-- 分享 //-->
    <!-- 底部操作条 -->
    <van-goods-action v-if="details.type!=2" >
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
        @click.native="$router.push({path: '/mine/message/getsm', query: {store_id: details.store.id}})"
      />
       <van-goods-action-mini-btn
        v-if="carNum>0"
        :info="carNum"
        icon="cart-o"
        text="购物车"
        @click.native="$router.push({path: '/goods/shopping-cart', query: {store_id: $route.query.id}})"
      />
      <van-goods-action-mini-btn
        v-if="carNum<=0"
        icon="cart-o"
        text="购物车"
        @click.native="$router.push({path: '/goods/shopping-cart', query: {store_id: $route.query.id}})"
      />
      <div @click="showTotleSta" class="van-button van-button--danger van-button--large  van-button--square van-goods-action-big-btn">
        <van-goods-action-big-btn
        text="加入购物车"
        @click.native="!current.selectedSkuComb.id?showSku('addcar'):addcar(current)"
        :disabled="details.sta===0"
      />
      </div>
       <div @click="showTotleSta" class="van-button van-button--danger van-button--large  van-button--square van-goods-action-big-btn">
      <van-goods-action-big-btn
        :disabled="disabledSubmit||details.sta===0"
        primary
        text="立即购买"
        @click.native="!current.selectedSkuComb.id?showSku('buy'):buy(current)"
      />
      </div>
    </van-goods-action>
    <auction ref="auction" v-else :details="details" :currentMarkup="currentMarkup" :current="current"></auction>
   <!--  -->
  </div>
</template>

<script>
import {
  Toast,ImagePreview
} from 'vant'
import _ from 'lodash'
// 商品状态条
import goodStatus from './good-status'
import auction from './auction'
const $raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
  window.setTimeout(callback, 1000 / 60)
}
import md5 from 'md5'
export default {
  components: {
    goodStatus,
    auction
  },
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
        key: 'content',
        selected: false
      }],
      timer: {},
      faly:'good',
      lockscroll: false,
      // 打开规格方式
      actionType: '',
      goodTabIdx: 0,
      // 商品详情
      details: {},
      // 优惠券信息
      coupons: [],
      // 规格弹窗
      skuVisible: false,
      // 默认选中的sku，具体参考高级用法
      initialSku: {
        // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
        // 值：skuValueId（规格值 id）
        s1: '30349',
        s2: '1193',
        // 初始选中数量
        selectedNum: 1
      },
      recordSelectedNum:0,
      // 规格弹窗图片
      skugoods: {
        title: '',
        picture: ''
      },
      priceKey: ['price', 'push_price', 'auction_price', 'price', 'clearance_price'],
      // 规格对象
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [],
        price: 0, // 默认价格（单位元）
        stock_num: 0, // 商品总库存
        collection_id: 0, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [],
        hide_stock: false // 是否隐藏剩余库存
      },
      // 购物车数量
      carNum: 0,
      // 当前商品
      current: {
        selectedSkuComb: {
          name: '请选择商品型号'
        }
      },
      couponsVisible: false,
      shareVisible: false,
      // 是否禁止购买按钮提交
      disabledSubmit: false,
      // 当前加价
      currentMarkup: 0,
      ImagePreviewDialog:''
    }
  },
  created() {
    this.init()
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll, this)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll, this)
  },
  watch: {
    // 监听详情变化
    details(val) {
      // 检测竞拍类型，是否超时
      this.checkTimeout()
      // 'header_two_label', 'header_three_label'
      let keys = ['header_one_label']
      for (let key of keys) {
        if (val.stand.length == 0) break
        if (val.stand[0][key] != '空' && val.stand[0][key]) {
          this.sku.tree.push({
            k: val.stand[0][key],
            v: [],
            k_s: 's1'
          })
        }
      }
      // 不同类型的商品价格字段
      for (let item of val.stand) {
        for (let idx in this.sku.tree) {
          item.header_one ? '' : item.header_one = ''
          item.header_two ? '' : item.header_two = ''
          this.sku.tree[idx].v.push({
            id: item.id,
            name: item.header_one + ' ' + item.header_two,
            imgUrl: item.img
          })
          this.sku.list.push({
            ...item,
            id: this.details.id,
            price: item[this.priceKey[val.type || 0]] * 100,
            s1: item.id,
            stock_num: item.count,
            name: item.header_one + ' ' + item.header_two,
          })
        }
      }
      // 设置价格
      this.sku.price = this.details.price_min
      this.sku.stock_num = this.details.inventory;
      this.skugoods = this.details;
      this.details.hdtitle = this.details.title;
      this.details.title = '';
      // this.skugoods.title = this.details.title
      this.skugoods.picture = this.details.img
    },

  },
  methods: {
    init() {
      this.getDetails()
      this.getCoupons()
      this.getCarList()
      // 添加分享按钮
      this.$store.commit('core/header', {
        title: '商品详情',
        buttons: {
          right: {
            fontSize: '27px',
            text: '\ue655',
            onclick: () => {
              this.shareVisible = true
            }
          }
        }
      })
    },
    sswr(number) {
      return Math.round(number * 100) / 100
    },
    showTotleSta() {
      if (this.details.sta===0) {
        Toast('该商品已下架')
      }
    },
    async numChange( val,tem) {
      console.log(22,val,tem)
      // if (this.changing) return
      // this.changing = true
      // good.num += val
      // let res = await this.$axios.post('car/changenum', {
      //   id: good.id,
      //   num: good.num
      // })
      // if (res.data.code != 1) {
      //   good.num--
      //   Toast(res.data.msg)
      // }
      // this.changing = false
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
    // 检查时间是否超时或事件未到
    checkTimeout() {
      // 限时抢购 && 竞拍捡漏
      if (this.details.type == 1 || this.details.type == 2) {
        this.disabledSubmit = (this.details.activity_end_time || 0) * 1000 - Date.now() < 0||(this.details.activity_start_time || 0) * 1000 - Date.now() > 0;
        if (!this.disabledSubmit) {
          setTimeout(() => {
            this.checkTimeout()
          }, 1000)
        }
      }
    },
    // 获取详情
    async getDetails() {
      let res = await this.$axios.post('goods/find', {
        id: this.$route.query.id
      })
      this.details = {};
      this.sku = {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [],
        price: 0, // 默认价格（单位元）
        stock_num: 0, // 商品总库存
        collection_id: 0, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [],
        hide_stock: false // 是否隐藏剩余库存
      };
      this.details = res.data.data || {};
      if( res.data.data){
        this.recordSelectedNum=res.data.data.inventory
      }
      if (this.details.type==2&&this.details.isauction==1) {
        this.currentMarkup = this.details.auction_first != 1  ? Math.round(this.details.price_max*1000+this.details.lowest_price*1000)/1000 : this.details.price_min;
      }
    },
    // 获取优惠券详情
    async getCoupons() {
      let res = await this.$axios.post('goods/coupons', {
        goods_id: this.$route.query.id
      })
      this.coupons = res.data.data || []
    },
    // 领取优惠券
    async receiveCoupon(item) {
      let res = await this.$axios.post('goods/getcoupon', {
        coupon_id: item.id
      })
      if (res.data.code == 1) {
        Toast('领取成功')
        // 刷新领取状态
        this.getCoupons()
      } else {
        Toast(res.data.msg)
      }
      this.couponsVisible = false
    },
    // 切换导航
    changeClor(type){
      this.faly=type;
    },
    // 显示商品规格
    showSku(type) {
      // 检查登录状态
      if (!this.$store.getters['core/logined']) {
        Toast('请您先登录')
        // this.$router.push('/login')
        this.$router.replace({path: '/login'})
        return
      };
      this.current.selectedNum=1;
      this.skuVisible = true
      this.actionType = type
    },
    // 关闭规格弹窗
    hideSku(evt) {
      this.skuVisible = false
    },
    // 
    async skuConfirm(evt) {
      let num = this.current.selectedNum;
      if(this.recordSelectedNum==0){
        Toast('库存不足！')
        return
      }
      if (!evt.selectedSkuComb||!evt.selectedSkuComb.id) {
        Toast('请先选择商品规格！')
        return
      };
      // 设置当前型号
      this.current = evt;
      this.current.selectedNum=num;
      if (this.details.type==2&&this.details.isauction==1) {
        this.$refs.auction.addprice(this.current);
        this.hideSku();
      }else {
        this[this.actionType](this.current)
      }
      
      
    },
    // 购买
    async buy(evt) {
      console.log(evt,'购买')
      this.$router.push({
        path: '/uc/orders/confirm-order',
        query: {
          stand_id: evt.selectedSkuComb.s1,
          num: evt.selectedNum
        }
      })
    },
    // 添加购物车
    async addcar(evt) {
      console.log(evt,'加入购物车',this.current.selectedNum)
      let res = await this.$axios.post('car/add', {
        stand_id: evt.selectedSkuComb.s1,
        num: this.current.selectedNum,
        goods_id: this.$route.query.id,
        store_id: this.details.store.id
      })
      if (res.data.code == 1) {
        Toast('添加购物车成功')
        this.hideSku(evt)
        // 刷新购物车数量
        this.getCarList()
      } else {
        Toast(res.data.msg)
      }
    },
    // 获取购物车数量
    async getCarList(evt) {
      let res = await this.$axios.post('car/list')
      // 购物车数量
      let shops = res.data.data || {}
      this.carNum = 0
      for (let key in shops) {
        let shop = shops[key]
        for (let good of shop.goods) {
          this.carNum += 1
        }
      }
    },
    // 显示出价
    showKeyboard() {
      this.hideSku()
      this.$refs.auction.showKeyboard()
    },
    lookImg(medias,idx){
      this.ImagePreviewDialog=ImagePreview({
        images: medias || [],
        startPosition: idx,
        onClose() {
          // do something
        }
      });
    }
  },
  beforeRouteLeave(to,from,next){
    this.ImagePreviewDialog&&this.ImagePreviewDialog.close();
    next();
  }
}
</script>
<style lang="scss">
.suwis-good-details {
    .van-sku-body .van-stepper__input {
      width: 60px;
      margin: 0 1px;
    }
    .van-sku-header__goods-info {
      padding-top: 0;
      .van-sku__goods-name1 {
        font-size: 14px;
        margin-top: 5px;
      }
      .van-sku__goods-price {
        margin-top: 2px;
      }
    }
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

    .van-sku-header__img-wrap {

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .style .van-cell__title{
      min-width: 10%;
    }
}
</style>
<style lang="scss" scoped>
.suwis-good-details {
    position: relative;
    padding-bottom: calc(50px + 86px);
    padding-top: 50px;
    font-size: 12px;
    .redSpan {
      color: red;
    }
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

    .banner {
        height: 100vw;
        max-width: 100vw;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
        color: $gray;
        .van-col {
            flex: 1;
        }
        em {
            color: $red;
            font-style: normal;
            font-size: 16px;
        }
        .gray {
            text-decoration: line-through;
            color: $gray;
            border-right: 1px solid $gray;
            padding-right: 10px;
            margin-right: 10px;
            height: 16px;
            display: inline-block;
            line-height: 16px;
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
            border: 1px solid rgba(232,63,68,0.39);
            border-radius: 2px;
            border-top: none;
            border-bottom: none;
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
    .qg {
        max-width: 24px;
        vertical-align: middle;
        display: inline-block;
        /* margin-right: 1px; */
        margin-left: 5px;
        margin-top: -12px;
    }
    .interval {
        border-top: 6px solid $border;
        align-items: center;
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
                width: 44px;
                height: 44px;
                object-fit: cover;
                border-radius: 4px;
                display: block;
            }

            h6 {
                color: $primary;
                margin: 0;
                padding-bottom: 5px;
                font-size: 12px;
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
        video {
            width: 100%;
            margin-bottom: 2.8vw;
            background: #000;
        }
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
    .content {
        max-width: 100vw;
        overflow: hidden;
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

            &[disabled] {
                background: #b4b4b4;
                opacity: 1;
            }
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
