<template lang="html">
  <div>
    <div v-if="!stsyemList.length" style="line-height:40px;text-align:center">暂无系统消息</div>
    <div v-else class="suwis-system-list" v-for="item in stsyemList">
      <div>
        <div class="suwis-system-titie">
            <img src="../../../assets/infor1.png">系统消息
        </div>
        <div class="suwis-system-date">{{item.time|dateFmt}}</div>
        <div class="suwis-system-con">
           <span>{{item.content}}</span>
        </div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  data(){
    return{
     stsyemList:[]
    }
  },
  methods:{
    getStsyem(){
      this.$axios.post('message/system').then(res => {
        if(res.data.data){
          this.stsyemList=res.data.data
        }
      })
    }
  },
  mounted() {
    this.getStsyem()
     document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')

  }
}
</script>

<style lang="css" scoped>
.suwis-system-con{
  display: flex;
  margin-top: 10px;
  line-height: 23px;
  font-size: 14px;
  color: #999;
  padding-left: 31px;
}
.suwis-system-con span{
  padding:10px 13px;
  background: #FAFAFA;
  flex: 1;
}
.suwis-system-titie{
  font-size:16px;
}
.suwis-system-date{
  padding-left: 31px;
  color: #999;
  font-size: 12px;
}
.suwis-system-titie img{
  width: 26px;
  vertical-align: middle;
  margin-right: 8px;
  margin-top: -2px;
}
.suwis-system-list{
  text-align: left;
  display: flex;
  padding:15px; 
  border-bottom: 1px solid #EFEFEF;
  background: #fff;
}
.suwis-system-list>div{
  flex: 1;
  width: 100%;
}
</style>
