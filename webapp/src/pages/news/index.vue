<template lang="html">
  <div> 
    <div class="suwis-news-ban">
      <van-swipe :autoplay="3000" indicator-color="white" style="width:100vw;" :height="200">
        <van-swipe-item>
          <img src="./../../assets/test.jpg" style="width:100%;">
        </van-swipe-item>
        <van-swipe-item>
          <img src="./../../assets/test.jpg" style="width:100%;">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <div class="suwis-news-list">
         <div class="suwis-news-left">
            <span>只需这四款长款，让你告别老气穿 出高级感</span>
            <p class='suwis-news-tips'>
              <span class='suwis-news-date'>2019-02-28 10:18</span>
              <span class='suwis-news-num'><img src="../../assets/slices.png" style="width:15px;"> 500</span>
            </p>
         </div>
         <div class="suwis-news-right">
           <img src="./../../assets/test1.png" width="100%">
         </div>
      </div>
      <div class="suwis-news-list">
         <div class="suwis-news-left">
            <span>我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</span>
            <p class='suwis-news-tips'>
              <span class='suwis-news-date'>2019-02-28 10:18</span>
              <span class='suwis-news-num'><img src="../../assets/slices.png" style="width:15px;"> 500</span>
            </p>
         </div>
         <div class="suwis-news-right">
           <img src="./../../assets/test1.png" width="100%">
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
  },
   methods: {
     //获取资讯列表
      getNewsList(){
     
      // this.$axios.post('/app/user/reset').then(res => {

      // })
      }
    },
    created(){
      this.getNewsList()
    }
}
</script>

<style lang="css">
.suwis-news-ban {
  display: flex;
  padding: 15px;
  padding-bottom: 5px;
}
.suwis-news-ban img {
  flex: 1;
  width: 100%;
  height: 100%;
}
.suwis-news-list {
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #f5f5f5;
}
.suwis-news-left,
.suwis-news-right {
  text-align: left;
  flex: 1;
}
.suwis-news-left {
  padding-right: 15px;
}
.suwis-news-right {
  max-width: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
}
.suwis-news-left > span {
  font-size: 16px;
  line-height: 26px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.suwis-news-date {
  float: left;
  font-size: 12px;
  color: #999999;
}
.suwis-news-num {
  float: right;
  font-size: 12px;
  color: #999999;
}
.suwis-news-tips::after {
  clear: both;
  content: "";
}
</style>
