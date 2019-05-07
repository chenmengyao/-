<template lang="html">
  <div> 
    <div class="suwis-news-ban">
      <van-swipe :autoplay="3000" indicator-color="white" style="width:100vw;height:100%">
        <van-swipe-item>
          <img src="./../../assets/test2.png" style="width:100%;">
        </van-swipe-item>
        <van-swipe-item>
          <img src="./../../assets/test2.png" style="width:100%;">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <div class="suwis-news-list">
         <div class="suwis-news-right">
           <img src="./../../assets/test1.png" width="100%">
         </div>
         <div class="suwis-news-left">
            <span>猫猫包袋女2019新款潮韩版时尚水桶复 古包ins风网红同款猫猫包袋女2019新款潮韩版时尚水桶复</span>
            <div class='suwis-news-tips'>
              <span class='suwis-news-date'>
                <span class="d-yuan-price">￥59.9</span>
                <span class="d-basis-price">￥59.9</span>
                <span class="d-tags">清仓</span>
              </span>
              <span class='suwis-news-num'>
                <span class="d-sale-btn">立即购买</span>
              </span>
            </div>
         </div>
        
      </div>
      <div class="suwis-news-list">
         <div class="suwis-news-right">
           <img src="./../../assets/test1.png" width="100%">
         </div>
         <div class="suwis-news-left">
            <span>猫猫包袋女2019新款潮韩版时尚水桶复 古包ins风网红同款猫猫包袋女2019新款潮韩版时尚水桶复</span>
            <div class='suwis-news-tips'>
              <span class='suwis-news-date'>
                <span class="d-yuan-price">￥59.9</span>
                <span class="d-basis-price">￥59.9</span>
                <span class="d-tags">清仓</span>
              </span>
              <span class='suwis-news-num'>
                <span class="d-sale-btn">立即购买</span>
              </span>
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
  padding: 0 15px 4px 15px;
  /* border: 1px solid red; */
}
.suwis-news-left,
.suwis-news-right {
  text-align: left;
  flex: 1;
}
.suwis-news-left {
  padding-left: 15px;
}
.suwis-news-right {
  max-width: 80px;
  /* min-width: 80px; */
  height: 80px;
  border-radius: 5px;
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
</style>
