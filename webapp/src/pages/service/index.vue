<template lang="html">
  <div>
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
         <img src="../../assets/ser.png" style="width:50px">
      </div>
      <!-- 便民服务搜索 -->
    </div>
    <div>
       <div class="suwis-service-btn">
          <ul>
             <li @click="switchTab('0')" :class="switchTabId==0?'d-btn-active':''">钟点工</li>
             <li @click="switchTab('1')" :class="switchTabId==1?'d-btn-active':''">保洁清洗</li>
             <li @click="switchTab('2')" :class="switchTabId==2?'d-btn-active':''">开锁换锁</li>
             <li @click="switchTab('3')" :class="switchTabId==3?'d-btn-active':''">管道疏通</li>
          </ul>
          <div style="clear:both"></div>
       </div>
    </div>
    <div>
      <div class="suwis-con">
       <div class="suwis-con-left">
          <img src="../../../public/test4.png" width="100%">
       </div>
        <div class="suwis-con-right">
           <div>钟点工保洁清洗开锁换锁管道疏通钟点工保洁清洗开锁换锁管道疏钟点工保洁清洗开锁换锁管道疏通钟点工保洁清洗开锁换锁管道疏</div>
           <div style="margin-top:10px">
              <div class="suwis-right-con">
                 <div style="padding-top:7px">
                    <img src="../../assets/mie.png" class="suwis-con-icon">
                    谢春花
                    <img src="../../assets/tags.png" class="suwis-con-icon1">
                 </div>
                 <div style="margin-top:10px;">
                    <img src="../../assets/dis.png" class="suwis-con-icon">
                    距离您12km
                 </div>
              </div>
              <div style="float:right">
                 <img src="../../assets/mobble.png" style="width:40px;height:40px">
              </div>
           </div>
       </div>
    </div>
    <div class="suwis-con">
       <div class="suwis-con-left">
          <img src="../../../public/test4.png" width="100%">
       </div>
        <div class="suwis-con-right">
           <div>钟点工保洁清洗开锁换锁管道疏通钟点钟点工保洁清锁管道疏</div>
           <div style="margin-top:10px">
              <div class="suwis-right-con">
                 <div style="padding-top:7px">
                    <img src="../../assets/mie.png" class="suwis-con-icon">
                    谢春花
                    <img src="../../assets/gs.png" class="suwis-con-icon1">
                 </div>
                 <div style="margin-top:10px;">
                    <img src="../../assets/dis.png" class="suwis-con-icon">
                    距离您12km
                 </div>
              </div>
              <div style="float:right">
                 <img src="../../assets/mobble.png" style="width:40px;height:40px">
              </div>
           </div>
       </div>
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
    return{
      areaList:area,
      switchTabId:0,
      isArea:true,
      areaValue:'',
      carmodel:'',
      show:false,
    }
  },
  methods:{
    //切换按钮
    switchTab(id){
      this.switchTabId=id
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
      this.carmodel = areaName
    }
  }
}
</script>

<style lang="css">
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
  padding-top:7px;
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
  max-height: 100px;
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
