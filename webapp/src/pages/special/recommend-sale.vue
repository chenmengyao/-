<template lang="html">
  <div>
    <div>
      <div class="suwis-recom-head">
      <div style="background:#fff;display:flex;margin:0 15px;height:120px;border-radius: 4px;-webkit-border-radius:4px;">
          <span class="d-banntitle-left"><span style="background-image: linear-gradient(to right , #FAA537, #F06B25);">为您挑选人间好物</span></span>
          <!-- <span class="d-banntitle-right">共<span>1314</span>件商品</span> -->
      </div>
      </div>
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
    </div>
     <div class="suwis-recom-list">
       <div class="suwis-recom-item" v-for="(item,index) in 10">
         <div :class="index%2==0?'d-flex':'d-flex1'">
            <div style="flex:1;">
              <div class="d-recom-img"><img src="./../../../public/test3.png" width="100%"></div>
              <span class="suwis-recom-title">猫猫包袋女2019新款潮韩 版时尚水桶复古包猫猫包袋女2019新款潮韩 版时尚水桶复古包</span>
              <span class="d-item-title">
                <span>推荐指数:</span>
                <van-rate
                  v-model="recValue"
                  :size="12"
                  color="#F06B25"
                  readonly
                  style="display:inline"
                  void-icon="star"
                  void-color="#eee"
                />
              </span>
            </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      recValue:4
    }
  }
}
</script>

<style lang="css">
.suwis-news-ban {
  display: flex;
  padding:0 20px;
  margin-top:-35px;
  padding-bottom: 10px;
}
.suwis-news-ban img {
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  -webkit-border-radius:4px;
}
.suwis-recom-head{
  padding-top: 10px;
  background: #F35A5A;
  height: 85px;
  /* display: flex;
  padding:15px;
  height: 100px;
  border-bottom: 50px solid  #fff; */
}
.suwis-recom-bann{
  height: 300px;
  background: #fff;
  border-radius: 5px;
  flex: 1;
}

.d-banntitle-left{
  text-align: left;
  float: left;
  color: #fff;
}
.d-banntitle-left span{
  margin: 10px 0;
  padding: 0 15px;
  font-size: 16px;
  line-height: 31px;
  display: block;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.d-banntitle-right{
  text-align: right;
  border:1px solid #333;
  float:right;
  padding: 15px;
  color: #999;
  font-size: 12px;
  line-height: 31px;
}
.d-banntitle-right span{
  color:#F06B25
}
.suwis-recom-list{
  display: flex;
  flex-wrap:wrap;
  width: 100%;
  text-align: left;
}
.suwis-recom-item{
  flex: 1;
  min-width: 50%;
  max-width: 50%;
  padding-bottom:15px; 
}
.d-item-title{
  font-size: 12px;
  color: #666
}
.d-recom-img{
  width: 100%;
}
.d-recom-img img{
  border-radius: 5px
}
.suwis-recom-title{
  font-size: 14px;
  color: #333;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 5px 0;
}
.d-flex1{
  display:flex;padding:0 15px 0 7.5px
}
.d-flex{
  display:flex;padding:0 7.5px 0 15px
}
</style>
