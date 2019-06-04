<template lang="html">
  <div> 
    <div class="suwis-news-ban" style="height:27vw;overflow:hidden">
      <van-swipe :autoplay="3000" indicator-color="white" style="width:100vw;text-align:center">
        <van-swipe-item v-for="item in banner">
           <div  v-lazy-container="{ selector: 'img' }">
              <img :data-src="item.img" :data-error="require('../../assets/more.jpg')" :data-loading="require('../../assets/loading_alpha.png')"  style="width:100%"> 
           </div>
        </van-swipe-item>
        
      </van-swipe>
    </div>
    <div>
      <!-- <div class="suwis-news-list" v-for="(item,index) in clearList">
         <div class="suwis-news-right"> 
           <img :src="item.img" width="100%">
         </div>
         <div class="suwis-news-left">
            <span>{{item.title}}</span>
            <div class='suwis-news-tips'>
              <span class='suwis-news-date'>
                <span class="d-yuan-price">￥59.9</span>
                <span class="d-basis-price">￥59.9</span>
                <img src="../../assets/clear.png" class="d-tags">
              </span>
              <span class='suwis-news-num'>
                <span class="d-sale-btn">
                   <img src="../../assets/gm.png">
                </span>
              </span>
            </div>
         </div>
        
      </div> -->
     
      
    </div>
    <!-- <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <div class="suwis-news-list" v-for="(item,index) in clearList">
         <div class="suwis-news-right">
           <img :src="item.img" width="100%">
         </div>
         <div class="suwis-news-left">
            <span>{{item.title}}</span>
            <div class='suwis-news-tips'>
              <span class='suwis-news-date'>
                <span class="d-yuan-price">￥59.9</span>
                <span class="d-basis-price">￥59.9</span>
                <img src="../../assets/clear.png" class="d-tags">
              </span> -->
              <!-- <span class='suwis-news-num'>
                <span class="d-sale-btn">
                   <img src="../../assets/gm.png">
                </span>
              </span>
            </div>
         </div>
      </div>
    </van-list> -->
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  error-text="请求失败，点击重新加载"
  :error.sync="error"
  @load="loadlist"
>
  <div class="suwis-news-list" v-for="(item,index) in clearList">
    
         <div class="suwis-news-right">
           <router-link tag="div" :to="{path: '/goods/details', query: {id: item.id,type:'clearance'}}">
           <img :src="item.img" width="100%">
           </router-link>
         </div>
         <div class="suwis-news-left">
            <span><router-link tag="span" :to="{path: '/goods/details', query: {id: item.id,type:'clearance'}}">{{item.title}}</router-link></span>
            <div class='suwis-news-tips'>
              <span class='suwis-news-date'>
                <span class="d-yuan-price">￥59.9</span>
                <span class="d-basis-price">￥59.9</span>
                <img src="../../assets/clear.png" class="d-tags">
              </span>
              <span class='suwis-news-num'>
                <span class="d-sale-btn">
                  <router-link tag="span" :to="{path: '/goods/details', query: {id: item.id,type:'clearance'}}">
                   <img src="../../assets/gm.png">
                   </router-link>
                </span>
              </span>
            </div>
         </div>
         
      </div>
</van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clearList:[],
      banner:[],
      page:1,
      list: [],
      loading: false,
      finished: false,
      error: false,
    }
  },
  methods:{
    // onLoad(){
    //  if(this.page<this.total){
    //     this.page++
    //     this.getClearList()
    //  }
    
    // },
    // getClearList(){
    //   this.$axios.post('goods/lists',{
    //     type:4,
    //     page:this.page,
    //     num:10
    //   }).then(res => {
    //    this.clearList=res.data.data.goods;
    //    this.total=Math.ceil(res.data.data.total/10)
    //    if(this.page<this.total){
    //         this.finished=true
    //     }else{
    //        this.finished=false
    //     }
        
    //   })
    // },
     loadlist() {
         this.$axios.post('goods/lists',{
            type:4,
            page:this.page,
            num:10
          }).then(res => {
            if (res.data.code === 1) {
            
              if(res.data.data&&res.data.data.goods){
                 this.clearList=this.clearList.concat(res.data.data.goods)
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
     getBanner(){
      this.$axios.post('goods/goodsbanner',{
        type:4,
      }).then(res => {
        this.banner=res.data.data
      })
    }
  },
  created(){
    // this.getClearList() 
    this.getBanner()
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
  height:40px;
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
.d-sale-btn img{
  /* padding: 0 4px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  display: block;
  border: 1px solid #E83F44;
  border-radius:15px; 
  color: #E83F44 */
  width: 66px;
  margin-top: 1px;
}
.d-tags{
  /* color:#F0914B;border:1px solid #F0914B;font-size:6px;padding:2px 3px;border-top-right-radius:6px;border-bottom-left-radius:6px; */
  width:26px;
  vertical-align: middle;
  margin-top: -2px;
  margin-left: 2px;
}
.van-swipe__indicators{
  left: none;
  right: 10px !important;
}
</style>
