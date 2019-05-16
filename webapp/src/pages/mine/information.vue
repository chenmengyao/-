<template lang="html">
  <div>
    <div>
        <router-link :to="{path:'/mine/message/system'}">
          <div class="suwis-infor-list">
            <div>
              <img src="../../assets/infor2.png" style="width:26px">
              交易物流
            </div>
            <div>
              <span class="suwis-infor-tags">03</span>
            </div>
          </div>
        </router-link>
        <router-link :to="{path:'/mine/message/logistics'}">
        <div class="suwis-infor-list">
           <div>
             <img src="../../assets/infor1.png" style="width:26px">
             系统信息
           </div>
           <div>
             <span class="suwis-infor-tags">12</span>
           </div>
        </div>
        </router-link>
        <div class="suwis-infor-list">
           <div>
             <img src="../../assets/infor3.png" style="width:26px">
             客服信息
           </div>
           <div>
             <span class="suwis-infor-tags">12</span>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')
  }
}
</script>

<style lang="css" scoped>
 body {
        background-color: red !important;
    }
.suwis-infor-tags{
  line-height: 12px;
  padding: 1px 4px;
  font-size: 10px;
  color: #fff;
  border-radius: 6px;
  background: #FF6468
}
.suwis-infor-list{
  border-bottom: 1px solid #EFEFEF;
  display: flex;
  font-size: 16px;
  color: #333;
  background: #fff !important;
  padding: 0 35px 0 15px;
  line-height: 53px;
}
.suwis-infor-list>div{
  flex: 1;
  background: #fff !important;
}
.suwis-infor-list>div img{
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}
.suwis-infor-list>div:nth-child(1){
  text-align: left;
}
.suwis-infor-list>div:nth-child(2){
  text-align: right;
}
</style>
