<template lang="html">
  <div> 
    <div class="suwis-news-ban">
      <van-swipe :autoplay="3000" indicator-color="white" style="width:100vw;height:100%">
        <van-swipe-item>
          <img src="../../../public/test2.png" style="width:100%;">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../public/test2.png" style="width:100%;">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <div class="suwis-news-list">
         <div class="suwis-news-right">
           <img src="./../../assets/test3.png" width="100%">
         </div>
         <div class="suwis-news-left">
            <span>猫猫包袋女2019新款潮韩版时尚水桶复 古包ins风网红同款猫猫包袋女2019新款潮韩版时尚水桶复</span>
            <div class='suwis-news-tips'>
               <div><span class="suwis-current-price">当前价 : </span><span class="suwis-current-pri">16666.00</span></div>
               <div>
                  <span class="suwis-current-price">距离结束仅剩下 </span>
                  <span>
                    <span class="suwis-auction-date">0</span> 
                    <span class="suwis-auction-date">0</span> :
                    <span class="suwis-auction-date">0</span> 
                    <span class="suwis-auction-date">0</span> 
                  </span>
                </div>
               <div style="text-align:right;font-size:12px"><span style="color:#E83F44 ">16</span><span class="suwis-current-price">次出价</span></div>
            </div>
         </div>
      </div>
      <div class="suwis-news-list">
         <div class="suwis-news-right">
           <img src="./../../assets/test3.png" width="100%">
         </div>
         <div class="suwis-news-left">
            <span>猫猫包袋女2019新款潮韩版时尚水桶复 古包ins风网红同款猫猫包袋女2019新款潮韩版时尚水桶复</span>
            <div class='suwis-news-tips'>
               <div><span class="suwis-current-price">当前价 : </span><span class="suwis-current-pri">16666.00</span></div>
               <div>
                  <span class="suwis-current-price">距离结束仅剩下 </span>
                  <span>
                    <span class="suwis-auction-date">0</span> 
                    <span class="suwis-auction-date">0</span> :
                    <span class="suwis-auction-date">0</span> 
                    <span class="suwis-auction-date">0</span> 
                  </span>
                </div>
               <div style="text-align:right;font-size:12px"><span style="color:#E83F44 ">16</span><span class="suwis-current-price">次出价</span></div>
            </div>
         </div>
      </div>
     
     
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="css">
.suwis-news-ban {
  display: flex;
  padding: 15px;
  padding-bottom: 20px;
}
.suwis-news-ban img {
  flex: 1;
  width: 100%;
  height: 100%;
}
.suwis-news-list {
  display: flex;
  padding: 0 15px 15px 15px;
  /* border: 1px solid red; */
}
.suwis-news-left,
.suwis-news-right {
  text-align: left;
  flex: 1;
}
.suwis-news-left {
  padding-left: 15px;
  font-size: 14px
}
.suwis-news-right {
  max-width:140px;
  min-width: 140px;
  height: 140;
  border-radius: 6px;
  overflow: hidden;
}
.suwis-news-left > span {
  font-size: 14px;
  line-height: 20px;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.suwis-news-date {
  float: left;
  font-size: 12px;
  color: #999999;
  line-height: 48px;
}
.suwis-news-num {
  float: right;
  font-size: 12px;
  color: #999999;
}
.suwis-news-tips {
  height: 30px;
  margin-top: 8px;
}
.d-yuan-price{
  text-decoration: line-through;
  border-right: 1px solid #E6E6E6;
  padding-right: 5px;
}
.d-basis-price{
  font-size: 15px;
  color: #E83F44;
  padding:0 5px 0 3px;
}
.d-sale-btn{
  padding: 0 5px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  display: block;
  border: 1px solid #E83F44;
  border-radius:15px; 
  color: #E83F44
}
.d-tags{
  color:#F0914B;border:1px solid #F0914B;font-size:6px;padding:2px 3px;border-top-right-radius:6px;border-bottom-left-radius:6px;
}
.suwis-current-price{
  font-size: 12px;
  line-height: 13px;
  color: #666;
}
.suwis-current-pri{
  color: #E83F44 ;
  font-size: 15px !important;
}
.suwis-auction-date
{
  font-size: 12px;
  background-image: linear-gradient(to right , #FAA537, #F06B25);color:#fff;display:inline-block;width:12px;height:13px;text-align:center;border-radius:1px;
}
.suwis-auction-date:nth-child(2n){
  margin-left: 3px
}
.suwis-news-tips>div:nth-child(1){
  margin-top:15px; 
}
.suwis-news-tips>div:nth-child(2){
  margin-top:10px; 
}
.suwis-news-tips>div:nth-child(3){
  margin-top:25px; 
}
</style>
