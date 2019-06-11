<template lang="html">
  <div id="auction"> 
    <div class="suwis-news-ban" style="height:27vw;overflow:hidden">
      <van-swipe :autoplay="3000" indicator-color="#E83F44" style="width:100vw;text-align:center">
        <van-swipe-item v-for="item in banner">
           <div  v-lazy-container="{ selector: 'img' }">
              <router-link tag="div" :to="{path: '/goods/details', query: {id: item.goods_id,type:'auction'}}">
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
   <div class="suwis-news-list" v-for="(item,index) in list">
         <div class="suwis-news-right">
           <router-link tag="div" :to="{path: '/goods/details', query: {id: item.id,type:'auction'}}">
              <img :src="item.img" width="100%">
           </router-link>
         </div>
         <div class="suwis-news-left">
             <router-link tag="div" :to="{path: '/goods/details', query: {id: item.id,type:'auction'}}">
            <div>{{item.title}}</div>
            <div class='suwis-news-tips'>
               <div><span class="suwis-current-price">当前价 : </span><span class="suwis-current-pri">￥{{item.price_min}}</span></div>
               <div>
                  <span class="suwis-current-price">距离结束仅剩下 </span>
                  <span v-if="item.endTime=='结束'">{{item.endTime}}</span>
                  <span v-else>
                    <span class="suwis-auction-date"> {{item.endTime[0]}}</span>
                    <span class="suwis-auction-date"> {{item.endTime[1]}}</span> :
                    <span class="suwis-auction-date"> {{item.endTime[2]}}</span>
                    <span class="suwis-auction-date"> {{item.endTime[3]}}</span>
                  </span>
                </div>
               <div style="text-align:right;font-size:12px"><span style="color:#E83F44 ">{{item.price_count}}</span><span class="suwis-current-price">次出价</span></div>
            </div>
           </router-link>
         </div>
      </div>
</van-list>
</div>
  </div>
</template>

<script>
// function InitTime(endtime) {
//   var dd, hh, mm, ss = null;
//   var time = parseInt(endtime * 1000) - new Date().getTime();
//   if (Number(time) <= 0) {
//     return '结束'

function InitTime(endtime) {
  var dd, hh, mm, ss = null;
  var time = parseInt(endtime * 1000) - new Date().getTime();
  if (Number(time) <= 0) {
    return '结束'
  } else {
    dd = Math.floor(time / 60 / 60 / 24);
    hh = Math.floor((time / 60 / 60) % 24);
    mm = Math.floor((time / 60) % 60);
    ss = Math.floor(time % 60);
    if (mm < 10 && ss < 10) {
      var str = '0' + mm + '0' + ss;
    } else if (mm < 10) {
      var str = '0' + mm + ss;
    } else if (ss < 10) {
      var str = mm + '0' + ss;
    } else {
      var str = mm + '' + ss
    }

    return str;
  }
}
export default {
  data() {
    return {
      flashList: [],
      active: 'tab-container1',
      pinkFont: true,
      // 上拉刷新、下拉加载
      allLoaded: false, //如果为true,禁止上拉刷新
      autoFill: false, //取消自动填充，
      list: [],
      banner: [],
      page: 1,
      loading: false,
      finished: false,
      error: false,
    }
  },
  methods: {
    loadlist() {
      this.$axios.post('goods/lists', {
        type: 2,
        page: 1,
        num: 10
      }).then(res => {
        if (res.data.code === 1) {
          if (res.data.data && res.data.data.goods) {
            var list = res.data.data.goods
            list.map((obj, index) => {
              this.$set(
                obj, "endTime", InitTime(obj.activity_end_time)
              );
            })
            this.list = this.list.concat(list);
            //  this.flashList=this.flashList.concat(res.data.data.goods)
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
        type: 2,
      }).then(res => {
        this.banner = res.data.data
      })
    }
  },
  created() {
    this.getBanner()
    this.$store.commit('core/header', {
      // 标题
      title: '竞拍捡漏',
      // 按钮组
      buttons: {
        // 右边图标
        right: {
          // 按钮文字
          text: '竞拍规则',
          width: '96',
          // 监听点击
          // onclick() {
          //   this.$router.push({ path: '/special/auctionrlue' })

          onclick: () => {
            this.$router.push({
              path: '/special/auctionrlue'
            })
          }
        }
      }
    })
    // this.$axios.post('goods/lists',{
    //     type:2,
    //     page:1,
    //     num:10
    //   }).then(res => {
    //     var list=res.data.data.goods
    //       list.map( (obj,index)=>{
    //         this.$set(
    //             obj,"endTime",InitTime(obj.activity_end_time)
    //         );
    //     })
    //     console.log(list )
    //     this.list = list;
    //   })

  },
  mounted() {
    setInterval(() => {
      for (var key in this.list) {
        var aaa = parseInt(this.list[key]["activity_end_time"]);
        var bbb = new Date().getTime();
        var rightTime = (aaa * 1000) - bbb;
        if (rightTime > 0) {
          var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
          var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
          var mm = Math.floor((rightTime / 1000 / 60) % 60);
          var ss = Math.floor((rightTime / 1000) % 60);
          if (mm < 10 && ss < 10) {

            this.list[key]["endTime"] = '0' + mm + '0' + ss;
          } else if (mm < 10) {
            this.list[key]["endTime"] = '0' + mm + ss;
          } else if (ss < 10) {
            this.list[key]["endTime"] = mm + '0' + ss;
          } else {
            this.list[key]["endTime"] = mm + '' + ss
          }
        } else {
          this.list[key]["endTime"] = '结束'
        }

      }
    }, 1000);

  }
}
</script>
<style lang="css">
#auction .van-swipe__indicator {
  background: #fff;
  opacity: 1;
}
#auction .van-swipe {
  border-radius: 4px;
}
#auction .van-swipe__indicators {
  left: 85vw;
}
</style>

<style lang="css" scoped>
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
  font-size: 14px;
}
.suwis-news-right {
  max-width: 140px;
  /* min-width: 140px; */
  height: 140px;
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
.d-yuan-price {
  text-decoration: line-through;
  border-right: 1px solid #e6e6e6;
  padding-right: 5px;
}
.d-basis-price {
  font-size: 15px;
  color: #e83f44;
  padding: 0 5px 0 3px;
}
.d-sale-btn {
  padding: 0 5px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  display: block;
  /* border: 1px solid #e83f44;
  border-radius: 15px;
  color: #e83f44; */
  border: 1px solid #E83F44;
  border-radius:15px;
  color: #E83F44
}
.d-tags {
  color: #f0914b;
  border: 1px solid #f0914b;
  font-size: 6px;
  padding: 2px 3px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.suwis-current-price {
  font-size: 12px;
  line-height: 13px;
  color: #666;
}
.suwis-current-pri {
  color: #e83f44;
  font-size: 15px !important;
}
.suwis-auction-date {
  font-size: 12px;
  line-height: 12px;
  background-image: linear-gradient(to right, #faa537, #f06b25);
  color: #fff;
  display: inline-block;
  width: 12px;
  height: 13px;
  text-align: center;
  border-radius: 1px;
}
.suwis-auction-date:nth-child(2n) {
  margin-left: 3px;
}
/* .suwis-news-tips > div:nth-child(1) {
  margin-top: 15px;
}
.suwis-news-tips > div:nth-child(2) {
  margin-top: 10px;
}
.suwis-news-tips > div:nth-child(3) {
  margin-top: 25px; */
.suwis-news-tips>div:nth-child(1){
  margin-top:15px;
}
.suwis-news-tips>div:nth-child(2){
  margin-top:10px;
}
.suwis-news-tips>div:nth-child(3){
  margin-top:25px;
}
.van-swipe__indicators {
  left: none;
  right: 10px !important;
}
</style>
