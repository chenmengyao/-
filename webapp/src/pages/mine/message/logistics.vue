<template lang="html">
  <div>
     <div class="suwis-logistics">
         <div class="suwis-logistics-title">
             <div>订单已发货</div>
             <div>昨天</div>
         </div>
        <div class="suwis-logistics-title">
             <div class="suwis-logistics-img">
                 <img src="../../../assets/test1.png">
             </div>
             <div class="suwis-logistics-con">
                 <div>猫猫包袋女2019新款潮韩版时尚水猫猫包袋女2019新款潮韩版时尚水</div>
                 <div>物流单号：圆通 804581314226872370</div>
             </div>
         </div>
     </div>
     <div class="suwis-logistics">
         <div class="suwis-logistics-title">
             <div>订单已发货</div>
             <div>昨天</div>
         </div>
        <div class="suwis-logistics-title">
             <div class="suwis-logistics-img">
                 <img src="../../../assets/test1.png">
             </div>
             <div class="suwis-logistics-con">
                 <div>猫猫包袋女2019新款潮韩版时尚水猫猫包袋女2019新款潮韩版时尚水</div>
                 <div>物流单号：圆通 804581314226872370</div>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  mounted() {
     document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')
  }
}
</script>

<style lang="css" scoped>
.suwis-logistics-con{
    background: #fafafa;
}
.suwis-logistics-con>div{
    text-align: left;
    line-height: 23px;
}
.suwis-logistics-con>div:nth-child(1){
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1; 
    font-size: 14px;
    color: #333;
    margin-bottom: 16px;
}
.suwis-logistics-img{
    background: #fafafa;
    max-width: 50px;
    max-height: 50px;
    overflow: 4;
    padding: 4px 10px 6px 14px;
}
.suwis-logistics-img img{
    width: 100%;
    border-radius: 4px;
}
.suwis-logistics-title{
    display: flex;
    padding:0 15px;
    font-size: 16px;
    color: #333;
    background: #fff;
    line-height: 23px;

}
.suwis-logistics-title>div{
    flex: 1;
}
.suwis-logistics-title:nth-child(1){
    padding:15px; 
}
.suwis-logistics-title:nth-child(2){
    padding:0 15px;
}
.suwis-logistics-title>div:nth-child(1){
    text-align: left;
}
.suwis-logistics-title>div:nth-child(2){
    text-align: right;
    font-size: 12px;
    color: #999;
}
.suwis-logistics{
    padding-bottom: 11px;
    background: #fff;
    border-bottom: 1px solid #EFEFEF
}
</style>
