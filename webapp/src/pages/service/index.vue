<template lang="html">
  <div>
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
    <div class="suwis-service-search">
      <!-- 便民服务搜索 -->
      <div >
         <van-cell-group>
            <div style="color:#333;font-size:14px;" @click="show = true">城市:{{carmodel||'省市区'}}
              <img src="../../assets/address.png" style="width:12px;">
            </div>
            <van-popup v-model="show" position="bottom">
              <van-area
                ref="area"
                value="110000"
                :area-list="areaList"
                @change="onChange"
                @confirm="show = false"
                @cancel="show = false"
              />
            </van-popup>
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
  </div>
</template>

<script>
import area from '../../assets/area.json'
import { Cell, CellGroup, Popup, Field,  Area, Picker } from 'vant'
export default {
  components: {
      VanCell: Cell,
      VanCellGroup: CellGroup,
      VanPopup: Popup,
      VanField: Field,
      VanArea: Area,
      VanPicker: Picker
  },
  data(){
    let self = this;
    return{
       error:false,
       loading: false,
       finished: true,
       center: [121.59996, 31.197646],
          lng:'',
          lat: '',
          loaded: false,
          plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  console.log(result)
                  if (result && result.position) {
                    self.carmodel=result.addressComponent.city+''+result.addressComponent.district
                    self.valueList=[{
                      name:result.addressComponent.province
                    },{
                      name:result.addressComponent.city
                    },{
                      name:result.addressComponent.district
                    }]
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                  }else{
                    self.carmodel='武汉市'+''+'江夏区'
                    self.lng = '30.60';
                    self.lat ='114.30';
                  }
                });
              }
            }
          }],
      areaList:area,
      switchTabId:null,
      isArea:true,
      areaValue:'',
      carmodel:'',
      show:false,
      cagetory:[],
      convenient:[],
      page:1,
      keyword:'',
      valueList:[]
    }
  },
  watch: {
      lat(val) {
        this.finished=false
      }
    },
  methods:{
    //拨打电话
    callPhone(tel){
      window.location.href = 'tel://'+tel
    },
    //切换按钮
    switchTab(id){
      this.switchTabId=id
      this.keyword=''
      this.page=1
      this.convenient=[]
      this.finished=false
    },
    //关闭地址选择框
    closeArea(){
      this.isArea=false
    },
    //确认选择的地址
    confirmArea(){
      console.log(this.areaValue,'areaValue')
    },
    onChange (picker, value, index) {
      let areaName = ''
      for (var i = 1; i < value.length; i++) {
        areaName = areaName + value[i].name + ' '
      }
      this.valueList=value
      this.carmodel = areaName
    },
    goSearch(){
      this.getData()
    },
    	loadList(){
        let pro='湖北省'
        let city='武汉市'
        let town='江夏区'
        if(this.valueList.length){
          pro=this.valueList[0].name
          city=this.valueList[1].name
          town=this.valueList[2].name
        }
        this.$axios.post('goods/convenient',{
          category:this.switchTabId,
          search:this.keyword,
          page:this.page,
          province:pro,
          city:city,
          area:town,
          num:10,
          pointx:this.lat,
          pointy:this.lng
        }).then(res => {
          	if(res.data.code==1){
               if(this.switchTabId==null){
                  this.switchTabId=res.data.data.cagetory[0].id
                }
                this.cagetory=res.data.data.cagetory
                this.convenient=this.convenient.concat(res.data.data.convenient)
                if (this.page * 10 >res.data.data.total) this.finished = true
            }
            this.page++
            this.loading = false
          
        }).catch(()=>{
	  			this.error = true
	  		})
	  	},
  },
  created(){
  }
}
</script>

<style lang="css">
.d-keyword{
  height: 22px;
  width: 80px;
  border: none;
  font-size: 12px;
}
.suwis-service-search{
  line-height: 40px;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 10px;
  border-bottom: 1px solid #EFEFEF
}
.van-hairline--top-bottom::after{
  border: none
}
.suwis-service-search>div:nth-child(1){
  float: left;
}
.suwis-service-search>div:nth-child(2){
  float: right;
  /* padding-top:7px; */
}
.suwis-right-con{
  float:left;font-size:12px;color:#666;text-align:left
}
.suwis-con-icon{
  width:14px;vertical-align: middle;margin-top:-2px;
}
.suwis-con-icon1{
  height:15px;vertical-align: middle;margin-top:-2px;
}
.suwis-con{
  margin-bottom:15px;
  text-align: left;
}
.suwis-con-right>div:nth-child(1){
   font-size: 14px;
  line-height: 20px;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.suwis-con{
  display: flex;
  padding: 0 15px;
}
.suwis-con-left{
  flex:1;
  max-width: 100px;
  min-width: 100px;
  max-height: 100px;
  min-height: 100px;
  overflow: hidden;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  
}
.suwis-con-right{
  flex: 1;
  padding-left: 15px;
}
.suwis-service-btn{
  list-style: none;
}
.suwis-service-btn {
  padding:0 0 15px 15px;
}
.suwis-service-btn ul li{
  float: left;
  margin-top: 5px;
  padding: 0 9px;line-height: 26px;font-size: 16px;
}
.d-btn-active{
  background-image: linear-gradient(to right , #F06B25, #FAA537);
  color: #fff;
  border-radius: 13px;
  -webkit-border-radius:13px;
}
</style>
