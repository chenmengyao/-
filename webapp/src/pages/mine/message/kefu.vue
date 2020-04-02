<template lang="html">
  <div class="suwis-wrapper">
    <div class="suwis-kefu-list" v-for="item in list">
      <div><img :src="item.store_logo || require('@/assets/infor3.png')"></div>
      <div style="margin-left:13px;">
        <div>
          <router-link :to="{path:'/mine/message/getsm',query:{store_id:item.message.store_id}}">
            <div class="d-merchant">{{item.store_name}}</div>
            <div class="d-content">{{item.message.time|dateFmt2}}</div>
            <div style="clear:both"></div>
          </router-link>
        </div>
        <div class="d-infor">{{item.message.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    getList() {
      this.$axios.post('message/servicesm', {
        //   id:''
      }).then(res => {
        this.list = res.data.data
      })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.suwis-wrapper {
    background-color: #f5f5f5;
    min-height: 100%;
}
.suwis-kefu-list {
    display: flex;
    padding: 15px;
    border-bottom: 1px solid #efefef;
    background: #fff;
}

.suwis-kefu-list > div {
    flex: 1;
}

.suwis-kefu-list > div:nth-child(1) {
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.d-merchant {
    float: left;
    font-size: 16px;
    color: #333;
    line-height: 23px;
}

.d-content {
    float: right;
    color: #999;
    font-size: 12px;
}

.d-infor {
    font-size: 14px;
    color: #666;
    line-height: 23px;
    margin-top: 6px;
}
</style>
