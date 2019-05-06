<template>
  <div>
    <div>
      <van-search placeholder="请输入搜索关键词" v-model="keyWord" />
    </div>
    <div class="suwis-classify-con">
      <div class="suwis-classify-btn">
         <div>
          <div v-for="(item,index) in tabList" @click="classifyBtn(index)" :class="index==num?'d_active':''">{{item}}</div>
         </div>
      </div>
      <div class="suwis-classify-list">
        <div v-if="classifyBan!=''"><img :src="classifyBan"></div>
        <div>
           <div>
              <span class="d-title">常用分类</span>
              <div>
                  <span class="d-tips" v-for="item in 10">安卓</span>
              </div>
           </div>
           <div>
              <span class="d-title">常用分类</span>
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
  text-align: left;
}
.suwis-classify-btn,.suwis-classify-list{
  flex: 1;
}
.suwis-classify-btn{
  max-width: 100px;
  min-width: 100px;
}
.d-tips{
  border: 1px solid #ccc;
  display: inline-block;
  margin-top:15px;
  margin-left: 15px;
  padding:6px 10px;
  border-radius: 15px;
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
.d_active{
  border-left: 2px solid red;
  background: #fff !important;
}
</style>
