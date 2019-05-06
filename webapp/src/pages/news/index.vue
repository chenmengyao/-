<template lang="html">
  <div> 
    <div class="suwis-news-ban">
        <img src="./../../assets/test.jpg">
    </div>
    <div>
      <div class="suwis-news-list">
         <div class="suwis-news-left">
            <span>我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</span>
            <p class='suwis-news-tips'><span class='suwis-news-date'>1212</span><span class='suwis-news-num'>1212</span></p>
         </div>
         <div class="suwis-news-right">
           <img src="./../../assets/test.jpg" width="100%">
         </div>
      </div>
      <div class="suwis-news-list">
         <div class="suwis-news-left">
            <span>我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</span>
            <p class='suwis-news-tips'><span class='suwis-news-date'>1212</span><span class='suwis-news-num'>1212</span></p>
         </div>
         <div class="suwis-news-right">
           <img src="./../../assets/test.jpg" width="100%">
         </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
.suwis-news-ban{
  display: flex;
  padding: 15px;
}
.suwis-news-ban img{
  flex: 1;
  width: 100%;
  height: 100%;
}
.suwis-news-list{
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #F5F5F5;
}
.suwis-news-left,.suwis-news-right{
  text-align: left;
  flex: 1;
}
.suwis-news-left{
  padding-right: 15px
}
.suwis-news-right{
  max-width:80px;
  height: 80px;
  border: 1px solid red;
  border-radius: 5px;
  overflow: hidden;
}
.suwis-news-left>span{
  font-size: 16px;
  line-height: 22px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.suwis-news-date{
  float: left
}
.suwis-news-num{
  float: right
}
.suwis-news-tips::after{
  clear:both;
  content:'';
}
</style>
