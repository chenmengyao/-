<template lang="html">
  <div id="rec">
    <div>
      <div class="suwis-recom-head">
      <div style="background:#fff;display:flex;margin:0 10px;height:120px;border-radius: 4px;-webkit-border-radius:4px;">
          <span class="d-banntitle-left"><span><img src="../../assets/hIcon.png">为您挑选人间好物</span></span>
          <span class="d-banntitle-right">共<span>{{total}}</span>件商品</span>
      </div>
      </div>
      <div class="suwis-news-ban" style="height:27vw;overflow:hidden">
        <van-swipe :autoplay="3000" indicator-color="#E83F44" style="width:100vw;text-align:center">
          <van-swipe-item v-for="item in banner">
             <div  v-lazy-container="{ selector: 'img' }">
               <router-link tag="div" :to="{path: '/goods/details', query: {id: item.goods_id,type:'recommend'}}">
                <img :data-src="item.img" :data-error="require('../../assets/more.jpg')" :data-loading="require('../../assets/loading_alpha.png')" style="width:100%;"> 
               </router-link>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
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
      <div class="suwis-recom-list">
            <div class="suwis-recom-item" v-for="(item,index) in reomList">
              <div :class="index%2==0?'d-flex':'d-flex1'">
                  <div style="flex:1;">
                    <div class="d-recom-img">
                      <router-link tag="div" class="d-dt" :to="{path: '/goods/details', query: {id: item.id,type:'recommend'}}">
                      <!-- <img :src="item.img" width="100%"> -->
                      <img :src="item.img" v-lazy="item.img" alt="">
                      </router-link></div>
                    <span class="suwis-recom-title"><router-link tag="div" :to="{path: '/goods/details', query: {id: item.id,type:'recommend'}}">{{item.title}}</router-link></span>
                    <span class="d-item-title">
                      <span>推荐指数:</span>
                      <van-rate
                        v-model="item.star"
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
      </van-list>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recValue: 4,
      reomList: [],
      total: null,
      banner: [],
      page: 1,
      loading: false,
      finished: false,
      error: false,
    }
  },
  methods: {
    // getReomList(){
    //   this.$axios.post('goods/lists',{
    //     type:3,
    //     page:1,
    //     num:10
    //   }).then(res => {
    //       this.reomList=res.data.data.goods
    //       this.total=res.data.data.total
    //   })
    // },
    loadlist() {
      this.$axios.post('goods/lists', {
        type: 3,
        page: this.page,
        num: 10
      }).then(res => {
        if (res.data.code === 1) {

          if (res.data.data && res.data.data.goods) {
            this.reomList = this.reomList.concat(res.data.data.goods)
            this.total = res.data.data.total
            if (this.page * 10 > res.data.data.total) this.finished = true
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
    getBanner() {
      this.$axios.post('goods/goodsbanner', {
        type: 3,
      }).then(res => {
        this.banner = res.data.data
      })
    }
  },
  created() {
    this.getBanner()
  }
}
</script>
<style lang="css">
#rec .van-swipe__indicators {
  left: 83vw;
}
#rec .van-swipe__indicator {
  background: #fff;
  opacity: 1;
}
#rec .van-swipe-item{
  width: 100vw;
}
</style>

<style lang="css" scoped>
.van-swipe {
  border-radius: 4px;
}
.d-dt {
  min-height: calc(50vw - 18px);
  max-height: calc(50vw - 18px);
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.d-dt img{
  object-fit: cover;
  min-height: calc(50vw - 18px);
  max-height: calc(50vw - 18px);
  min-width: 100%;
}
.suwis-news-ban {
  display: flex;
  padding: 0 15px;
  margin-top: -35px;
  padding-bottom: 10px;
}
.suwis-news-ban img {
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  -webkit-border-radius: 4px;
}
.suwis-recom-head {
  padding-top: 10px;
  background: #f35a5a;
  height: 85px;
  /* display: flex;
  padding:15px;
  height: 100px;
  border-bottom: 50px solid  #fff; */
}
.suwis-recom-bann {
  height: 300px;
  background: #fff;
  border-radius: 5px;
  flex: 1;
}

.d-banntitle-left {
  text-align: left;
  /* float: left; */
  flex: 1;
  color: #fff;
}
.d-banntitle-left span {
  margin: 10px 0;
  padding: 0 10px;
  font-size: 16px;
  background-image: linear-gradient(to right, #faa537, #f06b25);
  line-height: 31px;
  display: inline-block;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.d-banntitle-left span img {
  width: 18px;
  vertical-align: middle;
  margin-top: -5px;
  margin-right: 6px;
}
.d-banntitle-right {
  text-align: right;
  flex: 1;
  max-width: 100px;
  padding: 10px 14px 10px 0;
  color: #999;
  font-size: 12px;
  line-height: 31px;
}
.d-banntitle-right span {
  color: #f06b25;
}
.suwis-recom-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
}
.suwis-recom-item {
  flex: 1;
  min-width: 50%;
  max-width: 50%;
  padding-bottom: 15px;
}
.d-item-title {
  font-size: 12px;
  color: #666;
}
.d-recom-img {
  width: 100%;
}
.d-recom-img img {
  border-radius: 5px;
}
.suwis-recom-title {
  font-size: 14px;
  color: #333;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 5px 0;
  max-height: 40px;
}
.d-flex1 {
  display: flex;
  padding: 0 15px 0 7.5px;
}
.d-flex {
  display: flex;
  padding: 0 7.5px 0 15px;
}
.van-swipe__indicators {
  left: none;
  right: 10px !important;
}
</style>
