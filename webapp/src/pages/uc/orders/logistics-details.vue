<template lang="html">
  <div class="suwis-logistics-details">
    <!--  -->
    <div class="map-box">
      <el-amap :amap-manager="am" :center="center" v-if="maploaed" vid="amap" :zoom="zoom"></el-amap>
    </div>
    <!--  -->
    <SimpleGood :name="goodInfo.title" :desc="[goodInfo.header_one, goodInfo.header_two, goodInfo.header_three]" :store-logo="goodInfo.img"></SimpleGood>
    <div class="logistics-box">
      <div class="order-info">
        <div class="title">
          <img src="@/assets/orders/car@2x.png" class="icon">
          物流动态
        </div>
        <ul class="logistics-info">
          <li class="logistics-item">订单编号：{{logisticsInfo.order_number}}</li>
          <li class="logistics-item">物流单号：{{logisticsInfo.LogisticCode}}</li>
        </ul>
      </div>
      <van-steps direction="vertical" :active="0">
        <van-icon slot="inactive-icon" name="success" />
        <van-step v-for="(trace, index) in logisticsInfo.Traces" v-show="checkTraceShow(index)">
          <div class="step-box">
            <div class="top-bar">
              <span class="status">{{trace.status}}</span>
              <span>{{trace.AcceptTime}}</span>
            </div>
            <div class="detail">{{trace.AcceptStation}}</div>
          </div>
        </van-step>
      </van-steps>
      <div class="show-more" v-show="viewMoreVisilbe" @click="viewMoreVisilbe = false">查看更多物流状态</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import SimpleGood from '@/components/uc/orders/simple-good'
// NPM 方式
import {
  AMapManager
} from 'vue-amap'

export default {
  components: {
    SimpleGood
  },
  computed: {
    traces() {
      const result = this.logisticsInfo.Traces || []
      return result.revers()
    }
  },
  data() {
    return {
      am: new AMapManager(),
      goodInfo: {},
      logisticsInfo: [],
      order_id: '',
      viewMoreVisilbe: false, // 查看更多按钮是否显示
      zoom: 6,
      center: [116.46, 39.92],
      points: [],
      maploaed: false
    }
  },
  mounted() {
    this.order_id = this.$route.query.id
    this.checkthelogistics().then(() => {
      this.getTraces().then(() => {
        setTimeout(() => {
          this.getLines().then(() => {
            this.drawLines()
          })
        }, 2000)
      })
    })
    setTimeout(() => {
      this.maploaed = true
    }, 1000)
  },
  methods: {
    checkTraceShow(index) {
      return this.viewMoreVisilbe ? index < 4 : true
    },
    async checkthelogistics() {
      let data = await this.$axios.post('/order/checkthelogistics', {
        order_id: this.order_id
      })
      data = data.data
      if (data.code === 1) {
        if (data.data) {
          this.goodInfo = data.data.goods
          this.logisticsInfo = data.data.logistics
          if (this.logisticsInfo.Traces && this.logisticsInfo.Traces.length > 4) this.viewMoreVisilbe = true
        }
      } else {
        this.$toast(data.msg);
      }
      return this.logisticsInfo
    },
    // 获取坐标点
    async getTraces() {
      let points = []
      for (let item of this.logisticsInfo.Traces || []) {
        points.push({
          ...item,
          city: item.AcceptStation.substring(1, item.AcceptStation.lastIndexOf('】')),
          pois: []
        })
      }
      // 去重
      this.points = _.unionBy(points, 'city')
      return true
    },
    getLines() {
      return new Promise((resolve, reject) => {
        window.AMap.plugin('AMap.PlaceSearch', () => {
          var placeSearch = new window.AMap.PlaceSearch({
            city: '中国'
          })
          let points = [...this.points]
          let loopfun = (i) => {
            placeSearch.search(points[i].city, (status, result) => {
              // 查询成功时，result即对应匹配的POI信息
              let poiList = result.poiList || {}
              points[i].pois = poiList.pois || []
              if (i < this.points.length - 1) {
                loopfun(i + 1)
              } else {
                console.log(points, 'points')
                this.$set(this, 'points', points)
                resolve(this.points)
              }
            })
          }
          loopfun(0)
        })
      })
    },
    // 绘制路线
    drawLines() {
      var path = []
      for (let item of this.points) {
        path.push([item.pois[0].location.lng, item.pois[0].location.lat])
      }
      this.center = path[path.length - 1]
      var polyline = new window.AMap.Polyline({
        path: path
      })
      this.am._map.add(polyline)
      var marker = new AMap.Marker({
        icon: require('@/assets/orders/wlcar.png'),
        position: this.center,
        alpha: 0.6,
        anchor: [50, 50]
      })
      this.am._map.add(marker)
    }
  }
}
</script>
<style lang="scss">
.suwis-logistics-details {
    .van-steps {
        text-indent: 10px;

        .van-icon-checked,
        .van-step__circle {
            &::before {
                content: '';
                position: absolute;
                top: -2px;
                left: -4px;
                width: 18px;
                height: 18px;
                background: url("../../../assets/orders/red-right@2x.png") center center;
                background-size: cover;
                border-radius: 50%;
                line-height: 18px;
                text-align: center;
            }
        }

        .van-step__circle {
            background: transparent;

            &::before {
                top: -6px;
                left: -6px;
                background: url("../../../assets/orders/right@2x.png") center center;
                background-size: cover;
            }
        }
    }
}
</style>


<style lang="scss" scoped>
.suwis-logistics-details {
    position: relative;
    min-height: 100vh;
    background-color: rgb(245, 245, 245);
    color: #333;
    font-size: 14px;

    .map-box {
        height: 150px;
        background: #fff;
    }

    .logistics-box {
        position: relative;
        bottom: 18px;
        box-sizing: border-box;
        width: calc(100% - 30px);
        margin: 0 15px;
        padding: 16px 12px;
        background: #fff;
        border-radius: 4px;
        min-height: calc(100vh - 210px);

        .title {
            display: flex;
            align-items: center;

            .icon {
                width: 22px;
                height: 16px;
                margin-right: 10px;
            }
        }

        .logistics-info {
            color: #999;
            padding-left: 18px;
            margin-top: 6px;
            font-size: 12px;
            line-height: 24px;
            list-style: disc;
            text-decoration: dotted;
        }

        .show-more {
            margin: 10px 0 32px;
            color: #666;
            text-align: center;

            &::after {
                content: '···';
                display: inline-block;
                position: relative;
                width: 14px;
                height: 14px;
                line-height: 14px;
                margin-left: 10px;
                border-radius: 50%;
                border: 1px solid #e83f44;
                color: #e83f44;

            }
        }
    }

    .step-box {
        color: #999;
        font-size: 10px;
        line-height: 20px;

        .top-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 6px;

            .status {
                color: #333;
                font-size: 14px;
            }
        }

        .van-icon {
            font-size: 20px;
        }
    }
}
</style>
