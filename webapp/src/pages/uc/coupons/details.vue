<template lang="html">
  <div>
    <div style="position:absolute;top:-75px;">
      <img src="../../../assets/coudetbg.png">
    </div>
    <div style="display: flex;position:relative;align-items: center;justify-content: center;padding:0 6px;">
        <img src="../../../assets/couponBg.png">
        <div class="d-stutas d-stutas1">待使用</div>
         <div style="position:absolute;width:100%">
           <div style="display:flex;width:100%">
              <div style="flex:1;font-size:40px;text-align:left;">
                <div style="padding-left:56px;">¥100</div>
              </div>
              <div style="flex:1;text-align:left;border-left:1px dashed #B4B4B4;">
                 <div style="padding-left:19px;color:#333;font-size:16px;font-weight:600;margin-bottom:11px;">新人优惠券</div>
                 <div style="padding-left:19px;color:#333;font-size:12px;">满1000元即可使用</div>
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
                  <div>购物满1000减100</div>
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
                  <div>2018-09-21至2018-09-21</div>
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
                     <div>卷类型：新人优惠券</div>
                     <div>使用平台：全平台使用</div>
                     <div>详细说明：详细说明详细说明详细说明详细说明详细说</div>
                  </div>
                </div>
                <div style="clear:both"></div>
            </div>
            </div>
    </div>
    <div class="suwis-btn">
       <div>
         <div style="flex:1">立即使用</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
   mounted() {
     
  }
}
</script>

<style lang="css">
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
</style>
