<template lang="html">
  <div id="news"> 
    <div class="suwis-news-ban" style="height:27vw;overflow:hidden">
      <van-swipe :autoplay="3000" indicator-color="#E83F44" style="width:100vw;text-align:center">
        <van-swipe-item v-for="item in banner">
          <div  v-lazy-container="{ selector: 'img' }">
            <router-link tag="div" :to="{path: '/goods/details', query: {id: item.goods_id,type:'news'}}">
             <img :data-src="item.img" :data-error="require('../../assets/more.jpg')" :data-loading="require('../../assets/loading_alpha.png')" style="width:100%"> 
            </router-link>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div style="padding-bottom:60px;">
     <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  error-text="请求失败，点击重新加载"
  :error.sync="error"
  @load="loadlist"
>
  <div>
      <div v-for="item in newsList">
        <router-link class="suwis-news-list"  tag="div" :to="{path: '/news/details', query: {id: item.id}}">
          <div class="suwis-news-left">
              <span>{{item.title}}</span>
              <p class='suwis-news-tips'>
                <span class='suwis-news-date'>{{item.time|dateFmt}}</span>
                <span class='suwis-news-num'><img src="../../assets/slices.png" style="width:15px;"> {{item.clicks}}</span>
              </p>
          </div>
          <div class="suwis-news-right">
            <img :src="item.content.good[0].img" width="100%" height="100%" style="object-fit:cover;">
          </div>
        </router-link>
      </div>
    </div>
</van-list>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      banner: [],
      loading: false,
      finished: false,
      error: false,
      page: 1,
      total: null
    }
  },
  methods: {
    loadlist() {
      this.$axios.post('news/index', {
        page: this.page,
        num: 10
      }).then(res => {
        if (res.data.code === 1) {
          if (res.data && res.data.data) {
            this.banner = res.data.data.banner
            this.total = res.data.data.total
            delete res.data.data.total
            delete res.data.data.banner
            var arr = []
            for (let i in res.data.data) {
              arr.push(res.data.data[i])
            }
            this.newsList = this.newsList.concat(arr)
            if (this.page * 10 > this.total) this.finished = true
          }
        } else {
          this.$toast(res.data.msg);
        }
        this.page++
        this.loading = false
      }).catch(() => {
        this.error = true
      })
    },
    //获取资讯列表
    // getNewsList(page,num){     
    //   this.$axios.post('news/index',{
    //     page:page,
    //     num:num
    //   }).then(res => {
    //     this.banner=res.data.data.banner
    //     delete res.data.data.banner
    //     var list=[]
    //     for(let i in res.data.data){
    //       list.push(res.data.data[i])
    //     }
    //     this.newsList=list
    // })
    // }
  },
  created() {
    this.$store.commit('core/hideTabbar')
    // this.getNewsList(1,10)
  }
}
</script>
<style lang="css" scoped>
#news .van-swipe__indicator {
  background: #fff;
  left: none !important;
  right: 11px !important;
  opacity: 1;
}
#news .van-swipe {
  border-radius: 4px;
}
#news .van-swipe__indicators {
  left: 85vw;
}
</style>

<style lang="css" scoped>
ul,
li {
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
.suwis-news-left > li {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 41.6px;
}
.suwis-news-right > div {
  width: 80px;
  height: 80px;
}
.suwis-news-right {
  max-width: 80px;
  min-width: 80px;
  max-height: 80px;
  min-height: 80px;
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
.van-swipe__indicators {
  left: none;
  right: 10px !important;
}
</style>
