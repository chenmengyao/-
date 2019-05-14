<template>
  <div>
    <div>
      <van-search placeholder="请输入搜索关键词" v-model="keyWord" style="text-align:center"/>
    </div>
    <div class="suwis-classify-con">
      <div class="suwis-classify-btn">
         <div>
          <div class="suwis-classify-active" v-for="(item,index) in tabList" :class="index==num?'d_background':''" @click="classifyBtn(index)">
            <span :class="index==num?'d_active':'d_active1'"></span>{{item}}</div>
         </div>
      </div>
      <div class="suwis-classify-list">
        <div style="width:calc(100vw - 114px);padding:15px 13px 0 13px">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
             <img src="../../../public/test2.png" width="100%">
          </van-swipe-item>
          <van-swipe-item>
             <img src="../../../public/test2.png" width="100%">
          </van-swipe-item>
        </van-swipe>
      </div>
        <div>
           <div>
              <span class="d-title">常用分类</span>
              <div>
                  <span class="d-tips" v-for="item in 10">安卓</span>
                  <span class="d-tips" v-for="item in 10">诺基亚</span>
              </div>
           </div>
           <div>
              <span class="d-title">热门品牌</span>
              <div>
                  <span class="d-tips" v-for="item in 5">苹果</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      keyWord:'',//搜索关键词
      classifyBan:'',
      tabList:['手机','相机','数码相机'],
      num:0
    }
  },
  methods:{
    classifyBtn(index){
     this.num=index
    }
  }
}
</script>

<style lang="css">
.suwis-classify-con{
  display: flex;
  display: -webkit-flex;
  width: 100%;
  text-align: left;
  font-size: 12px;
  color: #333;
}
.suwis-classify-btn,.suwis-classify-list{
  flex: 1;
}
.suwis-classify-btn{
  max-width: 88px;
  min-width: 88px;
  margin-top:15px;
}
.d-tips{
  border: 1px solid #ccc;
  display: inline-block;
  margin-top:15px;
  margin-left: 15px;
  line-height: 26px;
  border-radius: 13px;
  padding: 0 11px;
  color: #666666;
  font-size: 12px;
}
.d-title{
  padding-left:15px;
  margin-top:15px;
  display: inline-block
}
.suwis-classify-btn div{
  line-height: 40px;
  text-align: center;
  background: #EFEFEF
}
.d_active1{
  color: #fff;
  font-size: 14px;
  color: #333;
}
.d_background{
  background: #fff !important;
  font-size: 14px;
}
.d_active{
  border-left: 3px solid red;
  position: absolute;
  height: 14px;
  top: 13px;
  font-size: 12px;
  left: 0;
  color:#fff;
  display: block;
}
.suwis-classify-active{
  position: relative;
}
.van-search{
  padding: 15px;
  padding-bottom: 0;
}
</style>
