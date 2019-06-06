<template lang="html">
  <div>
     <!-- <div class="suwis-logistics" v-for="(item,index) in list">
         <div class="suwis-logistics-title">
             <div>{{item.title}}</div>
             <div>{{item.time|dateFmt3}}</div>
         </div>
        <div class="suwis-logistics-title">
             <div class="suwis-logistics-img">
                 <img :src="item.goods_img">
             </div>
             <div class="suwis-logistics-con">
                 <div>{{item.goods_name}}</div>
                 <div>物流单号：{{item.express}} {{item.express_number}}</div>
             </div>
         </div>
     </div> -->
     
 <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  error-text="请求失败，点击重新加载"
  :error.sync="error"
  @load="loadlist"
>
   <div class="suwis-logistics" v-for="(item,index) in list">
         <div class="suwis-logistics-title">
             <div>{{item.title}}</div>
             <div>{{item.time|dateFmt3}}</div>
         </div>
        <div class="suwis-logistics-title">
             <div class="suwis-logistics-img">
                 <router-link tag="div" :to="{path: '/uc/orders/logistics-details', query: {id: item.order_id}}">
                 <img :src="item.goods_img">
                 </router-link>
             </div>
             <div class="suwis-logistics-con">
                 <div>
                    <router-link tag="div" :to="{path: '/uc/orders/logistics-details', query: {id: item.order_id}}">
                     {{item.goods_name}}
                 </router-link>
                </div>
                 <div>物流单号：{{item.express}} {{item.express_number}}</div>
             </div>
         </div>
     </div> 
</van-list>


  </div>
</template>

<script>
export default {
    data(){
      return{
        list:[], 
        loading: false,
        finished: false,
        error: false,
        page:1,
      }
    },
  mounted() {
     document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')
    //  this.getData()
  },
  methods:{
      loadlist() {
         this.$axios.post('message/logistics',{
            page:this.page,
            num:10
          }).then(res => {
            if (res.data.code === 1) {
              if(res.data.data&&res.data.data.logistics){
                 this.list=this.list.concat(res.data.data.logistics)
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
  }
}
</script>

<style lang="css" scoped>
.suwis-logistics-con{
    background: #fafafa;
}
.suwis-logistics-con>div{
    text-align: left;
    line-height: 23px;
}
.suwis-logistics-con>div:nth-child(1){
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1; 
    font-size: 14px;
    color: #333;
    margin-bottom: 16px;
}
.suwis-logistics-img{
    background: #fafafa;
    max-width: 50px;
    max-height: 50px;
    overflow: 4;
    padding: 4px 10px 6px 14px;
}
.suwis-logistics-img img{
    width: 100%;
    border-radius: 4px;
}
.suwis-logistics-title{
    display: flex;
    padding:0 15px;
    font-size: 16px;
    color: #333;
    background: #fff;
    line-height: 23px;

}
.suwis-logistics-title>div{
    flex: 1;
}
.suwis-logistics-title:nth-child(1){
    padding:15px; 
}
.suwis-logistics-title:nth-child(2){
    padding:0 15px;
}
.suwis-logistics-title>div:nth-child(1){
    text-align: left;
}
.suwis-logistics-title>div:nth-child(2){
    text-align: right;
    font-size: 12px;
    color: #999;
}
.suwis-logistics{
    padding-bottom: 11px;
    background: #fff;
    border-bottom: 1px solid #EFEFEF
}
</style>
