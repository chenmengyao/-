<template>
  <div>
    <div>
      <van-search placeholder="请输入搜索关键词" v-model="keyWord" />
    </div>
    <div class="suwis-classify-con">
      <div class="suwis-classify-btn">
         <div>手机数码</div>
         <div>照相机</div>
         <div>苹果</div>
         <div>手机数码</div>
         <div>手机数码</div>
         <div>手机数码</div>
         <div>手机数码</div>
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
      classifyBan:''
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
</style>
