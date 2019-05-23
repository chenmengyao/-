<template lang="html">
  <div>
    <div>
       <van-tabs v-model="couponsValue" :line-height="2" animated color="#E83F44" swipeable title-active-color="#333" title-inactive-color="#333">
          <van-tab title="待使用" @click="getTobeusedList()">
             <div class="suwis-coupons-con" v-if="tobeused.length" v-for="item in tobeused">
               <router-link tag="div" :to="{path: '/uc/coupons/details', query: {id: 0,type:1}}">
                <div>
                   <div class="suwis-coupons-list">
                       <div class="suwis-coupons-listtop">
                           <div>
                             <div class="suwis-listtop-left">
                                <div style="float:left">
                                   <img class="d-icon" src="../../../assets/coupons.png">
                                </div>
                                 <div class="d-title" style="float:left">
                                    <div>{{item.title}}</div>
                                    <div>{{item.total}}</div>
                                </div>
                                <div style="clear:both"></div>
                             </div>
                              <div class="suwis-listtop-right">{{item.sum}}</div>
                              <div style="clear:both"></div>
                              </div>
                       </div>
                   </div>
                   <div class="suwis-coupons-listbtm">
                       <div><img class="d-icon" src="../../../assets/coupons-date.png"><span></span>有效期至：{{item.end_time|dateFmt}}</div>
                       <div>待使用</div>
                   </div>
                </div>
                </router-link>
             </div>
             <div v-if="!tobeused.length" style="text-align:center;line-height:40px;">暂无数据</div>
          </van-tab>
          <van-tab title="已使用" @click="getUsedList()">
             <div class="suwis-coupons-con" v-if="used.length" v-for="item in used">
               <router-link tag="div" :to="{path: '/uc/coupons/details', query: {id: 0,type:2}}">
                <div>
                   <div class="suwis-coupons-list d-bgcolor">
                       <div class="suwis-coupons-listtop">
                           <div>
                             <div class="suwis-listtop-left">
                                <div style="float:left">
                                   <img class="d-icon" src="../../../assets/coupons.png">
                                </div>
                                 <div class="d-title" style="float:left">
                                    <div>{{item.title}}</div>
                                    <div>{{item.total}}</div>
                                </div>
                                <div style="clear:both"></div>
                             </div>
                              <div class="suwis-listtop-right">{{item.sum}}</div>
                              <div style="clear:both"></div>
                              </div>
                       </div>
                   </div>
                   <div class="suwis-coupons-listbtm">
                       <div><img class="d-icon" src="../../../assets/coupons-date.png"><span></span>有效期至：{{item.end_time|dateFmt}}</div>
                       <div style="color:#999">已使用</div>
                   </div>
                </div>
                </router-link>
             </div>
             <div v-if="!used.length" style="text-align:center;line-height:40px;">暂无数据</div>
          </van-tab>
          <van-tab title="已过期"  @click="getPassList()">
            <div class="suwis-coupons-con" v-if="pass.length" v-for="item in pass">
              <router-link tag="div" :to="{path: '/uc/coupons/details', query: {id: 0,type:3}}">
                <div>
                   <div class="suwis-coupons-list d-bgcolor">
                       <div class="suwis-coupons-listtop">
                           <div>
                             <div class="suwis-listtop-left">
                                <div style="float:left">
                                   <img class="d-icon" src="../../../assets/coupons.png">
                                </div>
                                 <div class="d-title" style="float:left">
                                    <div>{{item.title}}</div>
                                    <div>{{item.total}}</div>
                                </div>
                                <div style="clear:both"></div>
                             </div>
                              <div class="suwis-listtop-right">{{item.sum}}</div>
                              <div style="clear:both"></div>
                              </div>
                       </div>
                   </div>
                   <div class="suwis-coupons-listbtm">
                       <div><img class="d-icon" src="../../../assets/coupons-date.png"><span></span>有效期至：{{item.end_time|dateFmt}}</div>
                       <div style="color:#999">已过期</div>
                   </div>
                </div>
                </router-link>
             </div>
             <div v-if="!pass.length" style="text-align:center;line-height:40px;">暂无数据</div>
          </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      couponsValue:'',
      tobeused:[{
        title:'新人优惠券1',
        total:'满100减50',
        sum:'500',
        end_time:'1558252637'
      },{
        title:'新人优惠券1',
        total:'满100减50',
        sum:'500',
        end_time:'1558252637'
      }],
      used:[{
        title:'新人优惠券1',
        total:'满100减50',
        sum:'500',
        end_time:'1558252637'
      }],
      pass:[]
    }
  },
  methods:{
    getTobeusedList(){
      this.$axios.post('coupon/tobeused',{
        
      }).then(res => {
        //  待使用优惠券
        //  if(!res.data.data){
        //    this.tobeused=[]
        //  }else{
        //    this.tobeused=res.data.data
        //  }
      })
    },
    getUsedList(){
      this.$axios.post('coupon/used').then(res => {
         //已使用优惠券
         if(!res.data.data){
           this.used=[]
         }else{
           this.used=res.data.data
         }
      })
    },
    getPassList(){
      this.$axios.post('coupon/pass').then(res => {
         //已过期优惠券
         if(!res.data.data){
           this.pass=[]
         }else{
           this.pass=res.data.data
         }
      })
    }
  },
  created(){
    this.getTobeusedList()
  }
}
</script>

<style lang="css">
.van-hairline--top-bottom::after{
  border: none;
}
.suwis-coupons-con{
  display: flex;
  padding: 15px 15px 5px 15px;
}
.suwis-coupons-con:nth-child(1){
  padding-top: 20px;
}
.suwis-coupons-con>div{
  flex:1;
}
.suwis-coupons-list{
  text-align: left;
  width: 100%;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  background-image: linear-gradient(to right , #F35A5A, #DD0B11);
}
.van-tab{
  max-width: 65px;
  text-align: left;
  padding-left: 15px;
}
.suwis-coupons-listtop{
  display: flex;
  padding: 10px 22px;
  color: #fff;
}
.suwis-coupons-listtop>div{
  flex: 1;
}
.suwis-listtop-left{
  float: left;
}
.suwis-listtop-right{
  float:right;
  line-height: 60px;
  font-size: 35px;
  padding-left: 15px;
  border-left: 0.5px dashed #fff
}
.d-icon{
  width: 47px;
  margin-top: 6px;
}
.d-title {
  padding-left: 14px;
}
.d-title div:nth-child(1){
 font-size: 15px;
 margin: 5px 0;
 line-height: 26px;
}
.d-title div:nth-child(2){
 font-size: 10px;
}
.suwis-coupons-listbtm{
   -webkit-box-shadow:0 3px 6px rgba(255, 63, 69, .17);  
   -moz-box-shadow:0 3px 6px rgba(255, 63, 69, .17);  
    box-shadow:0 3px 6px rgba(255, 63, 69, .17);  
   height: 40px;
   line-height: 40px;
}
.suwis-coupons-listbtm>div:nth-child(1){
  float: left;
  margin-left: 14px;
  font-size: 10px;
  color: #999;
}
.suwis-coupons-listbtm>div:nth-child(2){
  float: right;
  margin-right: 14px;
  font-size: 12px;
  color: #E83F44
}
.suwis-coupons-listbtm img{
  width: 13px;
  vertical-align: middle;
  margin-top: -1px;
  margin-right: 5px;
}
.d-bgcolor{
  background:#C9C8C8
}
.van-tabs__line{
  width: 40px !important;
}
</style>
