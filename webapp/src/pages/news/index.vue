<template lang="html">
  <div> 
    <div class="suwis-news-ban">
      <van-swipe :autoplay="3000" indicator-color="white" style="width:100vw;" :height="200">
        <van-swipe-item v-for="item in banner">
          <img :src="item.img" style="width:100%;">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
        <div class="suwis-news-list" v-for="item in newsList">
          <div class="suwis-news-left">
              <router-link tag="li" :to="{path: '/news/details', query: {id: item.id}}">
                <span>{{item.title}}</span>
              </router-link>
              <p class='suwis-news-tips'>
                <span class='suwis-news-date'>{{item.time|dateFmt}}</span>
                <span class='suwis-news-num'><img src="../../assets/slices.png" style="width:15px;"> {{item.clicks}}</span>
              </p>
          </div>
          <div class="suwis-news-right">
            <router-link tag="li" to="{path: '/news/details', query: {id: item.id}}">
              <img :src="item.content.good[0].img" width="100%">
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList:[],
      banner:[]
    }
  },
   methods: {
     //获取资讯列表
      getNewsList(page,num){     
        this.$axios.post('news/index',{
          page:page,
          num:num
        }).then(res => {
          this.banner=res.data.data.banner
          delete res.data.data.banner
          var list=[]
          for(let i in res.data.data){
            list.push(res.data.data[i])
          }
          this.newsList=list
      })
      }
    },
    created(){
      this.getNewsList(1,10)
    }
}
</script>

<style lang="css">
ul,li{
  list-style: none;
}
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
