<template lang="html">
  <div>
    <div>
      <van-tabs @change="getTobeusedList" v-model="couponsValue" :line-height="2" animated color="#E83F44" swipeable title-active-color="#333" title-inactive-color="#333">
        <van-tab title="待使用">
          <div class="suwis-coupons-con" v-if="tobeused.length">
            <router-link v-for="item in tobeused" tag="div" :to="{path: '/uc/coupons/details', query: {id: item.id, type:1}}">
              <coupon-item type="1" :title="item.title" :desc="`满${item.total}减${item.sum}`" :price="item.sum" :time="item.end_time" btn-text="待使用">
              </coupon-item>
            </router-link>
          </div>
          <div v-if="!tobeused.length" style="text-align:center;line-height:40px;">暂无数据</div>
        </van-tab>
        <van-tab title="已使用">
          <div class="suwis-coupons-con" v-if="tobeused.length">
            <router-link v-for="item in tobeused" tag="div" :to="{path: '/uc/coupons/details', query: {id: item.id, type:2}}">
              <coupon-item :title="item.title" :type="2" :desc="`满${item.total}减${item.sum}`" :price="item.sum" :time="item.end_time" btn-text="已使用">
              </coupon-item>
            </router-link>
          </div>
          <div v-if="!tobeused.length" style="text-align:center;line-height:40px;">暂无数据</div>
        </van-tab>
        <van-tab title="已过期">
          <div class="suwis-coupons-con" v-if="tobeused.length">
            <router-link v-for="item in tobeused" tag="div" :to="{path: '/uc/coupons/details', query: {id: item.id, type:3}}">
              <coupon-item :title="item.title" :type="3" :desc="`满${item.total}减${item.sum}`" :price="item.sum" :time="item.end_time" btn-text="已过期">
              </coupon-item>
            </router-link>
          </div>
          <div v-if="!tobeused.length" style="text-align:center;line-height:40px;">暂无数据</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponsValue: '',
      tobeused: [],
      used: [],
      pass: [],
      couponsVisible: true
    }
  },
  methods: {
    getTobeusedList(index) {
      var url = ''
      if (index == '0') {
        url = 'coupon/tobeused'
      } else if (index == '1') {
        url = 'coupon/used'
      } else if (index == '2') {
        url = "coupon/pass"
      }
      this.$axios.post(url, {}).then(res => {
        //  待使用优惠券
        if (!res.data.data) {
          this.tobeused = []
        } else {
          this.tobeused = res.data.data
        }
      })
    }
  },
  created() {
    this.getTobeusedList('0')
  }
}
</script>

<style lang="scss" scoped>
.van-hairline--top-bottom::after {
    border: none;
}

.suwis-coupons-con {
    // display: flex;
    padding: 0 15px 5px;
}

.suwis-coupons-con:nth-child(1) {
    /* padding-top: 20px; */
}

.suwis-coupons-con > div {
    display: block;
    flex: 1;
}

.suwis-coupons-list {
    text-align: left;
    width: 100%;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    background-image: linear-gradient(to right, #f35a5a, #dd0b11);
}

.van-tab {
    max-width: 65px;
    text-align: left;
    padding-left: 15px;
}

.suwis-coupons-listtop {
    display: flex;
    padding: 10px 22px;
    color: #fff;
}

.suwis-coupons-listtop > div {
    flex: 1;
}

.suwis-listtop-left {
    float: left;
}

.suwis-listtop-right {
    float: right;
    line-height: 60px;
    font-size: 35px;
    padding-left: 15px;
    border-left: 0.5px dashed #ccc;
}

.d-icon {
    width: 47px;
    margin-top: 6px;
}

.d-title {
    padding-left: 14px;
}

.d-title div:nth-child(1) {
    font-size: 15px;
    margin: 5px 0;
    line-height: 26px;
}

.d-title div:nth-child(2) {
    font-size: 10px;
}

.suwis-coupons-listbtm {
    -webkit-box-shadow: 0 3px 6px rgba(255, 63, 69, 0.17);
    -moz-box-shadow: 0 3px 6px rgba(255, 63, 69, 0.17);
    box-shadow: 0 3px 6px rgba(255, 63, 69, 0.17);
    height: 40px;
    line-height: 40px;
}

.suwis-coupons-listbtm > div:nth-child(1) {
    float: left;
    margin-left: 14px;
    font-size: 10px;
    color: #999;
}

.suwis-coupons-listbtm > div:nth-child(2) {
    float: right;
    margin-right: 14px;
    font-size: 12px;
    color: #e83f44;
}

.suwis-coupons-listbtm img {
    width: 13px;
    vertical-align: middle;
    margin-top: -1px;
    margin-right: 5px;
}

.d-bgcolor {
    background: #c9c8c8;
}

.van-tabs__line {
    width: 40px !important;
}
</style>
