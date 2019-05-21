<template>
  <div>
    <div>
        <!-- <van-tabs background="#FAA537" title-inactive-color="red" :line-height="0" title-active-color="#fff" v-model="active" swipeable> -->
    <!-- <div style="background-image: linear-gradient(to right , #F35A5A, #DD0B11);">-->
        <!-- <van-tabs background="none" line-height="0" animated title-inactive-color="red" title-active-color="#fff" v-model="active" swipeable>  -->
      <div class="d-bg"></div>
      <!-- <div> -->
        <van-tabs background="none" animated :line-height='0' title-inactive-color="#ef7f7c" title-active-color="#fff" v-model="active" swipeable>
        <van-tab>
            <div slot="title">
              <div class="suwis-tab-title">14:00</div>
              <div class="suwis-tab-title1">抢购中</div>
            </div>
            <div>
               <div>
                  <div style="display:flex;padding:15px 10px;padding-top:0;margin-top:15px;">
                        <van-swipe :autoplay="3000" indicator-color="white" style="width:100vw;height:100%">
                          <van-swipe-item>
                            <img src="../../../public/test2.png" style="width:100%;border-radius:4px;">
                          </van-swipe-item>
                          <van-swipe-item>
                            <img src="../../../public/test2.png" style="width:100%;border-radius:4px;">
                          </van-swipe-item>
                        </van-swipe>
                    
                  </div>
               </div>
               <div>
                  <div class="suwis-con" v-for="(item,index) in flashList[0]">
                    <div class="suwis-con-left">
                        <img :src="item.img" width="100%">
                    </div>
                      <div class="suwis-con-right">
                        <div>{{item.title}}</div>
                        <div style="margin-top:5px;">
                            <div class="suwis-right-con">
                              <div style="padding:7px 0;">
                                  <!-- 100件好货等您来抢～ -->
                                  <van-progress
                                    :show-pivot="false"
                                    color="linear-gradient(270deg,rgba(247,174,79,1) 0%,rgba(247,146,49,1) 33%,rgba(240,107,37,1) 100%)"
                                    :percentage="(item.percentage)"
                                  />
                              </div>
                              <div style="">
                                  <span class="d-yuan-price">￥{{item.price_max}}</span>
                                  <span class="d-basis-price">￥{{item.price_min}}</span>
                                  <span class="d-tags"><img src="../../assets/qg.png" style="width:25px;margin-top:-3px;vertical-align: middle;"></span>
                              </div>
                            </div>
                            <div style="float:right">
                              <img src="../../assets/masq.png" style="width:66px;">
                            </div>
                        </div>
                    </div>
                  </div>
                  
               </div>
            </div>
        </van-tab>
        <van-tab>
             <div slot="title">
              <div class="suwis-tab-title">16:00</div>
              <div class="suwis-tab-title1">等待中

              </div>
            </div>
            <div>
               <div>
                  <div style="display:flex;padding:15px 10px;padding-top:0">
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
            </div>
             <div>
                  <div class="suwis-con" v-for="(item,index) in flashList[1]">
                    <div class="suwis-con-left">
                        <img :src="item.img" width="100%">
                    </div>
                      <div class="suwis-con-right">
                        <div>{{item.title}}</div>
                        <div style="margin-top:5px;">
                            <div class="suwis-right-con">
                              <div style="padding-top:5px;font-size:10px;">
                                  100件好货等您来抢～
                              </div>
                              <div style="">
                                  <span class="d-yuan-price">￥59.9</span>
                                  <span class="d-basis-price">￥59.9</span>
                                  <span class="d-tags"><img src="../../assets/qg.png" style="width:25px;margin-top:-3px;vertical-align: middle;"></span>
                              </div>
                            </div>
                            <div style="float:right">
                              <img src="../../assets/wait.png" style="width:66px;">
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
        </van-tab>
        <van-tab>
            <div slot="title">
               <div slot="title">
                <div class="suwis-tab-title">20:00</div>
                <div class="suwis-tab-title1">抢购中</div>
              </div>
            </div>
              <div>
               <div>
                  <div style="display:flex;padding:15px 10px;padding-top:0">
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
            </div>
             <div>
                  <div class="suwis-con">
                    <div class="suwis-con-left">
                        <img src="../../../public/test4.png" width="100%">
                    </div>
                      <div class="suwis-con-right">
                        <div>钟点工保洁清洗开锁换锁管道疏通钟点工保洁清洗开锁换锁管道疏钟点工保洁清洗开锁换锁管道疏通钟点工保洁清洗开锁换锁管道疏</div>
                        <div style="margin-top:5px;">
                            <div class="suwis-right-con">
                              <div style="padding-top:5px;font-size:10px;">
                                  100件好货等您来抢～
                              </div>
                              <div style="">
                                  <span class="d-yuan-price">￥59.9</span>
                                  <span class="d-basis-price">￥59.9</span>
                                  <span class="d-tags"><img src="../../assets/qg.png" style="width:25px;margin-top:-3px;vertical-align: middle;"></span>
                              </div>
                            </div>
                            <div style="float:right">
                              <img src="../../assets/wait.png" style="width:66px;">
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
        </van-tab>
        <van-tab>
            <div slot="title">
               <div slot="title">
                <div class="suwis-tab-title">18:00</div>
                <div class="suwis-tab-title1">抢购中</div>
              </div>
            </div>
              <div>
               <div>
                  <div style="display:flex;padding:15px 10px;padding-top:0">
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
            </div>
             <div>
                  <div class="suwis-con">
                    <div class="suwis-con-left">
                        <img src="../../../public/test4.png" width="100%">
                    </div>
                      <div class="suwis-con-right">
                        <div>钟点工保洁清洗开锁换锁管道疏通钟点工保洁清洗开锁换锁管道疏钟点工保洁清洗开锁换锁管道疏通钟点工保洁清洗开锁换锁管道疏</div>
                        <div style="margin-top:5px;">
                            <div class="suwis-right-con">
                              <div style="padding-top:5px;font-size:10px;">
                                  100件好货等您来抢～
                              </div>
                              <div style="">
                                  <span class="d-yuan-price">￥59.9</span>
                                  <span class="d-basis-price">￥59.9</span>
                                  <span class="d-tags"><img src="../../assets/qg.png" style="width:25px;margin-top:-3px;vertical-align: middle;"></span>
                              </div>
                            </div>
                            <div style="float:right">
                              <img src="../../assets/wait.png" style="width:66px;">
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
        </van-tab>
       <van-tab>
            <div slot="title">
               <div slot="title">
                <div class="suwis-tab-title">22:00</div>
                <div class="suwis-tab-title1">抢购中</div>
              </div>
            </div>
              <div>
               <div>
                  <div style="display:flex;padding:15px 10px;padding-top:0">
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
            </div>
             <div>
                  <div class="suwis-con">
                    <div class="suwis-con-left">
                        <img src="../../../public/test4.png" width="100%">
                    </div>
                      <div class="suwis-con-right">
                        <div>钟点工保洁清洗开锁换锁管道疏通钟点工保洁清洗开锁换锁管道疏钟点工保洁清洗开锁换锁管道疏通钟点工保洁清洗开锁换锁管道疏</div>
                        <div style="margin-top:5px;">
                            <div class="suwis-right-con">
                              <div style="padding-top:5px;font-size:10px;">
                                  100件好货等您来抢～
                              </div>
                              <div style="">
                                  <span class="d-yuan-price">￥59.9</span>
                                  <span class="d-basis-price">￥59.9</span>
                                  <span class="d-tags"><img src="../../assets/qg.png" style="width:25px;margin-top:-3px;vertical-align: middle;"></span>
                              </div>
                            </div>
                            <div style="float:right">
                              <img src="../../assets/wait.png" style="width:66px;">
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
   <!-- </div> -->
</template>

<script>
export default {
  data(){
    return{
      active:'',
      flashList:{
        0:[{id: 21, title: "11111", number: "1558409901", store_id: 1, sta: 0, leader: 20}],
        1:[{id: 21, title: "11111", number: "1558409901", store_id: 1, sta: 0, leader: 20}]
      }
    }
  },
  methods:{
    getFlashList(){
      // this.$axios.post('goods/lists',{
      //   type:1,
      //   page:1,
      //   num:10
      // }).then(res => {
      //   this.flashList=res.data.data
      // })
    }
  },
  created(){
    this.getFlashList()
  }
}
</script>

<style lang="css">
.van-hairline--top-bottom::after{
  border:0;
}
.suwis-tab-title1{
  font-size: 12px;
  line-height: 17px;
  padding-top: 3px;
}
.van-tabs--line .van-tabs__wrap{
  height: 54px !important;
}
.van-tabs__nav--line{
  padding: 10px 0;
  font-size:16px;;
  font-family:'迷你简大黑';
  line-height: 18px;
  font-weight:bold;
  background:linear-gradient(43deg,rgba(243,90,90,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%) !important;
}
.d-bg{
  position: absolute;
  display: flex;
  height: 90px;
  width: 100%;
  background:linear-gradient(43deg,rgba(243,90,90,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%) !important;
}
.suwis-right-con{
  float:left;font-size:12px;color:#666;text-align:left
}
.suwis-con-icon{
  width:14px;vertical-align: middle;margin-top:-2px;
}
.suwis-con-icon1{
  height:15px;vertical-align: middle;margin-top:-2px;
}
.suwis-con{
  margin-bottom:15px;
  text-align: left;
}
.van-tab{
  line-height: 20px;
  flex-basis:20% !important;
}
.suwis-tab-title{
  font-size: 16px;
  line-height: 18px;
}
.suwis-con-right>div:nth-child(1){
   font-size: 14px;
  line-height: 20px;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.suwis-con{
  display: flex;
  padding: 0 15px;
}
.suwis-con-left{
  flex:1;
  max-width: 80px;
  max-height: 80px;
  overflow: hidden;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  
}
.suwis-con-right{
  flex: 1;
  padding-left: 15px;
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
.van-progress{
  background:#FBD8D9;
  height: 4px;
  padding: 1px 0;
  width:113px;
}
.van-progress__portion{
  height: 4px;
  max-width:110px !important;
  margin-left:2px;
}
</style>
