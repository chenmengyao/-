<template>
  <div>
    <div style="background-image: linear-gradient(to right , #F35A5A, #DD0B11);">
        <van-tabs background="none" line-height="0" animated title-inactive-color="red" title-active-color="#fff" v-model="active" swipeable>
        <van-tab>
            <div slot="title">
              <div class="suwis-tab-title">14:00</div>
              <div class="suwis-tab-title">抢购中</div>
            </div>
            <div>
               <div>
                  <div style="position:absolute;width:100%;height:50px;"></div>
                  <div style="display:flex;padding:15px">
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
               <div>
                 454545
               </div>
            </div>
        </van-tab>
        <van-tab>
            <div slot="title">
              <div class="suwis-tab-title">12</div>
              <div class="suwis-tab-title">选项</div>
            </div>
              标签二
        </van-tab>
        <van-tab>
            <div slot="title">
              <div class="suwis-tab-title">12</div>
              <div class="suwis-tab-title">选项</div>
            </div>
              标签三
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:'',
    }
  }
}
</script>

<style lang="css">
.van-tab{
  line-height: 20px;
}
.suwis-tab-title{
  font-size: 12px;
}
</style>
