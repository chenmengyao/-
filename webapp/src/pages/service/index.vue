<template lang="html">
  <div id="service">
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
      <van-tabs v-model="active" title-active-color="#E83F44">
    <van-tab title="VIP服务">
    
     <div class="suwis-service-search">
      <!-- 便民服务搜索 -->
      <div >
         <van-cell-group>
            <div style="color:#333;font-size:14px;" @click="show = true">城市:{{carmodel||'省市区'}}
              <img src="../../assets/address.png" style="width:12px;">
            </div>
        </van-cell-group>
      </div>
      <div>
        <input type="text" v-model="keywordBus" placeholder="请输入关键字" class="d-keyword">
         <img src="../../assets/ser.png" @click="goSearch()" style="width:50px;vertical-align:middle">
      </div>
      <!-- 便民服务搜索 -->
    </div>
     
    <div>
       <div class="suwis-service-btn">
          <ul>
             <li v-for="(item,index) in Buscagetory" @click="switchTab(item.id)" :class="switchTabIdBus==item.id?'d-btn-active':''">{{item.title}}</li>
          </ul>
          <div style="clear:both"></div>
       </div>
    </div>
    <div>
      <div style="padding-bottom:60px;">
       <van-list
  v-model="loadingBus"
  :finished="finishedBus"
  finished-text="没有更多了"
  error-text="请求失败，点击重新加载"
  :error.sync="error"
  @load="loadList"
>
      <div class="suwis-con" v-for="(item,index) in busList">
       <div class="suwis-con-left">
          <img :src="item.img" width="100%" height="100%" style="object-fit:cover;">
       </div>
        <div class="suwis-con-right">
           <div style="height:20px">{{item.title}}</div>
           <div style="color:#E83F44;font-size:14px;">VIP折扣：{{item.discount}}9折</div>
           <div style="margin-top:10px">
              <div class="suwis-right-con">
                 <div style="padding-top:7px">
                    <img src="../../assets/mie.png" class="suwis-con-icon">
                    {{item.name}}
                    <img v-if="item.type==0" src="../../assets/tags.png" class="suwis-con-icon1">
                    <img v-else src="../../assets/gs.png" class="suwis-con-icon1">
                 </div>
                 <div style="margin-top:10px;">
                    <img src="../../assets/dis.png" class="suwis-con-icon">
                    距离您{{item.distance|meters}}
                 </div>
              </div>
              <div style="float:right">
                 <img src="../../assets/mobble.png" @click="callPhone(item.tel)" style="width:40px;height:40px">
              </div>
           </div>
       </div>
    </div>
    </van-list>
    </div>
    </div>

  </van-tab>
  <van-tab title="便民服务">

     <div class="suwis-service-search">
      <!-- 便民服务搜索 -->
      <div >
         <van-cell-group>
            <div style="color:#333;font-size:14px;" @click="show = true">城市:{{carmodel||'省市区'}}
              <img src="../../assets/address.png" style="width:12px;">
            </div>
           
        </van-cell-group>
      </div>
      <div>
        <input type="text" v-model="keyword" placeholder="请输入关键字" class="d-keyword">
         <img src="../../assets/ser.png" @click="goSearch()" style="width:50px;vertical-align:middle">
      </div>
      <!-- 便民服务搜索 -->
    </div>
     
    <div>
       <div class="suwis-service-btn">
          <ul>
             <li v-for="(item,index) in cagetory" @click="switchTab(item.id)" :class="switchTabId==item.id?'d-btn-active':''">{{item.title}}</li>
          </ul>
          <div style="clear:both"></div>
       </div>
    </div>
    <div>
      <div style="padding-bottom:60px;">
       <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      error-text="请求失败，点击重新加载"
      :error.sync="error"
      @load="loadList"
    >
      <div class="suwis-con" v-for="(item,index) in convenient">
       <div class="suwis-con-left">
          <img :src="item.img" width="100%" height="100%" style="object-fit:cover;">
       </div>
        <div class="suwis-con-right">
           <div style="height:40px">{{item.title}}</div>
           <div style="margin-top:10px">
              <div class="suwis-right-con">
                 <div style="padding-top:7px">
                    <img src="../../assets/mie.png" class="suwis-con-icon">
                    {{item.name}}
                    <img v-if="item.type==0" src="../../assets/tags.png" class="suwis-con-icon1">
                    <img v-else src="../../assets/gs.png" class="suwis-con-icon1">
                 </div>
                 <div style="margin-top:10px;">
                    <img src="../../assets/dis.png" class="suwis-con-icon">
                    距离您{{item.distance|meters}}
                 </div>
              </div>
              <div style="float:right">
                 <img src="../../assets/mobble.png" @click="callPhone(item.tel)" style="width:40px;height:40px">
              </div>
           </div>
       </div>
    </div>
    </van-list>
    </div>
    </div>
    
  </van-tab>
</van-tabs>


 <van-popup v-model="show" position="bottom">
              <van-area
                ref="area"
                value="110000"
                :area-list="areaList"
                @change="onChange"
                @confirm="onConfirm"
                @cancel="show = false"
              />
            </van-popup>
   
  </div>
</template>

<script>
import area from '../../assets/area.json'
import Axios from 'axios'
import { Cell, CellGroup, Popup, Field, Area, Picker } from 'vant'
export default {
  components: {
    VanCell: Cell,
    VanCellGroup: CellGroup,
    VanPopup: Popup,
    VanField: Field,
    VanArea: Area,
    VanPicker: Picker
  },
  data() {
    let self = this;
    return {
      active: 0,
      error: false,
      loading: false,
      loadingBus: false,
      finished: true,
      finishedBus: true,
      center: [121.59996, 31.197646],
      lng: '',
      lat: '',
      lat: '',
      lng: '',
      loaded: false,
      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.carmodel = result.addressComponent.city + '' + result.addressComponent.district
                self.carmodel = result.addressComponent.city + '' + result.addressComponent.district
                self.valueList = [{
                  name: result.addressComponent.province
                }, {
                  name: result.addressComponent.city
                }, {
                  name: result.addressComponent.district
                }]
                self.valueList = [{
                  name: result.addressComponent.province
                }, {
                  name: result.addressComponent.city
                }, {
                  name: result.addressComponent.district
                }]
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.lat = result.position.lat;
                self.lng = result.position.lng;
              } else {
                self.carmodel = '武汉市' + '' + '江夏区'
                self.carmodel = '武汉市' + '' + '江夏区'
                self.lng = '30.60';
                self.lat = '114.30';
                self.lng = '30.60';
                self.lat = '114.30';
              }
            });
          }
        }
      }],
      areaList: area,
      switchTabId: null,
      switchTabIdBus: null,
      isArea: true,
      areaValue: '',
      carmodel: '',
      carmodel: '',
      show: false,
      cagetory: [],
      Buscagetory: [],
      busList: [],
      convenient: [],
      page: 1,
      Buspage: 1,
      keyword: '',
      keywordBus: '',
      valueList: [],
    }
  },
  watch: {
    lat(val) {
      this.finished = false

    },
    lat(val) {
      this.finishedBus = false
    }
  },
  methods: {
    //拨打电话
    callPhone(tel) {
      window.location.href = 'tel://' + tel
    },
    //切换按钮
    switchTab(id) {
      if (this.active == 0) {
        this.switchTabIdBus = id
        this.keywordBus = ''
        this.Buspage = 1
        this.busList = []
        this.finishedBus = false
      } else {
        this.switchTabId = id
        this.keyword = ''
        this.page = 1
        this.convenient = []
        this.finished = false
      }

    },
    //关闭地址选择框
    closeArea() {
      this.isArea = false
    },
    //确认选择的地址
    // confirmArea() {
    //   console.log(this.areaValue, 'areaValue')
    // },
    onChange(picker, value, index) {
      let areaName = ''
      for (var i = 1; i < value.length; i++) {
        areaName = areaName + value[i].name + ' '
      }
      
      this.valueList = value
      this.carmodel = areaName
      this.getLat(areaName).then(data => {
        this.lng = data.split(',')[1];
        this.lat = data.split(',')[0];
      })
      this.valueList = value
      this.carmodel = areaName
      this.getLat(areaName).then(data => {
        this.lng = data.split(',')[1];
        this.lat = data.split(',')[0];
      })
    },
    onConfirm(picker, value, index){
      this.carmodel=picker[1].name+picker[2].name;
      this.show=false;
      this.valueList = picker
      this.getLat(this.carmodel).then(data => {
        this.lng = data.split(',')[1];
        this.lat = data.split(',')[0];
      })
    },
    goSearch() {
        this.loadList()
    },
    loadList() {
      let pro = '湖北省'
      let city = '武汉市'
      let town = '江夏区'
      if (this.valueList.length) {
        pro = this.valueList[0].name
        city = this.valueList[1].name
        town = this.valueList[2].name
      }
      this.$axios.post('goods/convenient', {
        category: this.switchTabId,
        search: this.keyword,
        page: this.page,
        province: pro,
        city: city,
        area: town,
        num: 10,
        pointx: this.lat,
        pointy: this.lng
      }).then(res => {
        if (res.data.code == 1) {
          if (this.switchTabId == null) {
            this.switchTabId = res.data.data.cagetory[0].id
          }
          this.cagetory = res.data.data.cagetory
          this.convenient = this.convenient.concat(res.data.data.convenient)
          if (this.page * 10 > res.data.data.total) this.finished = true
        }
        this.page++
        this.loading = false

      }).catch(() => {
        this.error = true
      })
      this.businessList()
    },
    businessList() {
      let pro = '湖北省'
      let city = '武汉市'
      let town = '江夏区'
      if (this.valueList.length) {
        pro = this.valueList[0].name
        city = this.valueList[1].name
        town = this.valueList[2].name
      }
      this.$axios.post('/goods/businessPartner', {
        category: this.switchTabIdBus,
        search: this.keywordBus,
        page: this.Buspage,
        province: pro,
        city: city,
        area: town,
        num: 10,
        pointx: this.lat,
        pointy: this.lng
      }).then(res => {
        if (res.data.code == 1) {
          if (this.switchTabIdBus == null) {
            this.switchTabIdBus = res.data.data.cagetory[0].id
          }
          this.Buscagetory = res.data.data.cagetory
          this.busList = this.busList.concat(res.data.data.business_partner)
          if (this.Buspage * 10 > res.data.data.total) this.finishedBus = true
        }
        this.Buspage++
        this.loadingBus = false

      }).catch(() => {
        this.error = true
      })
    },
    getLat(address) {
      return new Promise((resolve, reject) => {
        Axios({
          method: 'GET',
          url: 'http://restapi.amap.com/v3/geocode/geo?key=89cd7d92df47ba3d8791a760bd4c07e1&s=rsv3&address=' + address
        }).then((res) => {
          resolve(res.data.geocodes[0].location)
        })

      })
    }
  },
  created() {
    // Axios.get('/geocode/geo', {
    //     key:'89cd7d92df47ba3d8791a760bd4c07e1',
    //     s: 'rsv',
    //     city: 35,
    //     address: '北京市海淀区'
    //   }).then(res => {

    //   })

  }
}
</script>

<style lang="css" scoped>
.d-keyword {
  height: 22px;
  width: 80px;
  border: none;
  font-size: 12px;
}
.suwis-service-search {
  line-height: 40px;
  height: 40px;
  padding: 0 15px;
  border-bottom: 1px solid #efefef;
}
.van-hairline--top-bottom::after {
  border: none;
}
.suwis-service-search > div:nth-child(1) {
  float: left;
}
.suwis-service-search > div:nth-child(2) {
  float: right;
  /* padding-top:7px; */
}
.suwis-right-con {
  float: left;
  font-size: 12px;
  color: #666;
  text-align: left;
}
.suwis-con-icon {
  width: 14px;
  vertical-align: middle;
  margin-top: -2px;
}
.suwis-con-icon1 {
  height: 15px;
  vertical-align: middle;
  margin-top: -2px;
}
.suwis-con {
  margin-bottom: 15px;
  text-align: left;
}
.suwis-con-right > div:nth-child(1) {
  font-size: 14px;
  line-height: 20px;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.suwis-con {
  display: flex;
  padding: 0 15px;
}
.suwis-con-left {
  flex: 1;
  max-width: 100px;
  min-width: 100px;
  max-height: 100px;
  min-height: 100px;
  overflow: hidden;
  border-radius: 4px;
  -webkit-border-radius: 4px;
}
.suwis-con-right {
  flex: 1;
  padding-left: 15px;
}
.suwis-service-btn {
  padding: 0 0 15px 15px;
}
.suwis-service-btn {
  list-style: none;
  overflow: auto;
  padding-top: 10px;
}
.suwis-service-btn ul {
  display: flex;
}

.suwis-service-btn ul li {
  float: left;
  margin-top: 5px;
  padding: 0 9px;
  line-height: 26px;
  font-size: 16px;
  white-space: nowrap;
}
.d-btn-active {
  background-image: linear-gradient(to right, #f06b25, #faa537);
  color: #fff;
  border-radius: 13px;
  -webkit-border-radius: 13px;
}
</style>

<style lang="scss">
#service {
  .van-cell-group , .d-keyword{
    background-color: rgba(0,0,0,0);
  }
}
</style>

