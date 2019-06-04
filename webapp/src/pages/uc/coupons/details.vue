<template lang="html">
  <div>
    <div style="position:absolute;top:-75px;">
      <img src="../../../assets/coudetbg.png">
    </div>
    <div style="display: flex;position:relative;align-items: center;justify-content: center;padding:0 6px;">
        <img src="../../../assets/couponBg.png">
        <div class="d-stutas d-stutas1" v-if="$route.query.type==1">待使用</div>
        <div class="d-stutas d-stutas1 d-status2" v-if="$route.query.type==2">已使用</div>
        <div class="d-stutas d-stutas1 d-status2" v-if="$route.query.type==3">已过期</div>
         <div style="position:absolute;width:100%">
           <div style="display:flex;width:100%">
              <div style="flex:1;font-size:40px;text-align:left;">
                <div style="padding-left:56px;">¥{{detailContent.sum}}</div>
              </div>
              <div style="flex:1;text-align:left;border-left:1px dashed #B4B4B4;">
                 <div style="padding-left:19px;color:#333;font-size:16px;font-weight:600;margin-bottom:11px;">新人优惠券</div>
                 <div style="padding-left:19px;color:#333;font-size:12px;">{{detailContent.total}}</div>
              </div>
           </div>
         </div>
    </div>
    <div class="d-cnt">
      <div>
         <div>
            <div class="suwis-conditions">
                <div  class="suwis-conditions-left">
                  <div class="d-circle"></div>
                </div>
                <div class="suwis-conditions-right">
                  <div>使用条件</div>
                  <div>{{detailContent.total}}</div>
                </div>
                <div style="clear:both"></div>
            </div>
           
          </div>
      </div>
    </div>
    <div class="d-cnt">
      <div>
     <div class="suwis-conditions">
                <div  class="suwis-conditions-left">
                  <div class="d-circle"></div>
                </div>
                <div class="suwis-conditions-right">
                  <div>有效期限</div>
                  <div>{{detailContent.start_time|dateFmt1}}至{{detailContent.end_time|dateFmt1}}</div>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>
    </div>
    <div class="d-cnt" style="border-bottom: none">
      <div>
            <div class="suwis-conditions suwis-conditions1">
                <div  class="suwis-conditions-left">
                  <div class="d-circle"></div>
                </div>
                <div class="suwis-conditions-right">
                  <div>使用说明</div>
                  <div>
                     <div>卷类型：{{detailContent.title}}</div>
                     <div>使用平台：全平台使用</div>
                     <div>详细说明：{{detailContent.remark}}</div>
                  </div>
                </div>
                <div style="clear:both"></div>
            </div>
            </div>
    </div>
    <div class="suwis-btn" v-if="$route.query.type==1">
       <div>
         <div style="flex:1">
           <router-link tag="div" :to="{path: '/'}">
              立即使用
           </router-link>
           </div>
       </div>
    </div>
    <div class="suwis-btn" v-else>
       <div style="background:#B4B4B4">
         <div style="flex:1">立即使用</div>
       </div>
    </div>
    <!-- <div style="background:red;height:500px;padding-top:5px;">
    <div class="bg">
           <div class="d-stutas d-stutas1" v-if="$route.query.type==1">待使用</div>
          <div class="d-stutas d-stutas1 d-status2" v-if="$route.query.type==2">已使用</div>
          <div class="d-stutas d-stutas1 d-status2" v-if="$route.query.type==3">已过期</div>
          <div style="display:flex;text-align:center">
            <div style="flex:1;font-size:40px;line-height:17.6vw;">100</div>
             <div style="flex:1">fdfd</div>
          </div>
      
    </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      detailContent:{
        start_time:'1558252637',
        end_time:'1558252637',
        title:'端午节优惠券',
        remark:'优惠券仅端午节三天使用',
        sum:'100',
        total:'满1000减100'
      }
    }
  },
  methods:{

  },
   mounted() {
     var id =this.$route.query.id
     this.$axios.post('coupon/detail',{
       id:id
     }).then(res => {
        //  this.detailContent=res.data.data
      })
  }
}
</script>

<style lang="css">
.bg {
        padding:5.5vw 5vw 8vw 5vw;
        /* color: #fff; */
        background: url("../../../assets/couponBg.png") no-repeat center bottom/cover;
    }
.d-stutas{
  position:absolute;
  left:23px;
  border-radius: 9px;
  -webkit-border-radius: 9px;
  font-size:9px;
  padding: 2px 6px;
  top:12px;
  }
  .d-stutas1{
    color: #E83F44;
    border:1px solid #E83F44;
  }
  .d-stutas2{
    border:1px solid #999;
   color:rgba(153,153,153,1);
  }
  .d-btn{
    background: #B4B4B4
  }
.suwis-btn{
  margin-top: 80px;
  margin-bottom: 25px;
  width: 100%; 
}
.suwis-btn>div{
  display: flex;
  margin: 0 26px;
  line-height: 45px;
  text-align: center;
  background:linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
  border-radius:25px;
  color: #fff
}
 .suwis-conditions-left{
    float: left;
    margin-right: 5px;
 }
 .suwis-conditions-right{
    float: left;
    line-height: 23px;
 }
  .suwis-conditions-right>div:nth-child(1){
    margin-bottom: 13px;
    color: #333;
    font-size: 16px;
  }
   .suwis-conditions-right>div:nth-child(2){
    margin-bottom: 16px;
    font-size: 14px;
    color: #666;
  }
 .suwis-conditions{
   text-align: left;
    margin: 7px 0 0 0;
 }
 .d-circle{
   margin-top: 8px;
   width: 6px;
   height: 6px;
   background: #E83F44;
   border-radius: 50%;
 }
 .d-cnt{
   display: flex;
    border-bottom: 1px solid #F5F5F5;
    padding: 0 15px;
    margin-bottom: 15px;
 }
 .d-cnt>div{
   flex: 1
 }
 .suwis-conditions1{
   display: flex
 }
 .suwis-conditions1>div:nth-child(1){
   flex: 1;
   max-width: 5px;
 }
 .suwis-conditions1>div:nth-child(2){
   flex: 1;
   line-height: 24px;
 }
 .d-status2{
   color: #999;
   border:1px solid #999 !important;
 }
</style>
