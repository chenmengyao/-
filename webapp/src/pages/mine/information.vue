<template lang="html">
  <div>
    <div>
        <router-link :to="{path:'/mine/message/logistics'}">
          <div class="suwis-infor-list">
            <div>
              <img src="../../assets/infor2.png" style="width:26px">
              交易物流
            </div>
            <div v-if="content.count1>0">
              <span class="suwis-infor-tags">{{content.count1}}</span>
            </div>
          </div>
        </router-link>
        <router-link :to="{path:'/mine/message/system'}">
        <div class="suwis-infor-list">
           <div>
             <img src="../../assets/infor1.png" style="width:26px">
             系统信息
           </div>
           <div v-if="content.count2>0">
             <span class="suwis-infor-tags">{{content.count2}}</span>
           </div>
        </div>
        </router-link>
        <router-link :to="{path:'/mine/message/kefu'}">
        <div class="suwis-infor-list">
           <div>
             <img src="../../assets/infor3.png" style="width:26px">
             客服信息
           </div>
           <div v-if="content.count3>0">
             <span class="suwis-infor-tags">{{content.count3}}</span>
           </div>
        </div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    }
  },
  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')
    this.$axios.post('message/mymsg', {
    }).then(res => {
      if (res.data && res.data.data) {
        this.content = res.data.data
      }
    })
  }
}
</script>

<style lang="css" scoped>
body {
  background-color: red !important;
}
.suwis-infor-tags {
  line-height: 12px;
  padding: 1px 4px;
  font-size: 10px;
  color: #fff;
  border-radius: 6px;
  background: #ff6468;
}
.suwis-infor-list {
  border-bottom: 1px solid #efefef;
  display: flex;
  font-size: 16px;
  color: #333;
  background: #fff !important;
  padding: 0 35px 0 15px;
  line-height: 53px;
}
.suwis-infor-list > div {
  flex: 1;
  background: #fff !important;
}
.suwis-infor-list > div img {
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 8px;
}
.suwis-infor-list > div:nth-child(1) {
  text-align: left;
}
.suwis-infor-list > div:nth-child(2) {
  text-align: right;
}
</style>
