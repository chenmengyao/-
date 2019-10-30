<template lang="html">
  <div class="suwis-wrapper">
    <!-- <div v-if="!stsyemList.length" style="line-height:40px;text-align:center">暂无系统消息</div> -->
    <!-- <div v-else class="suwis-system-list" v-for="item in stsyemList">
      <div>
        <div class="suwis-system-titie">
            <img src="../../../assets/infor1.png">系统消息
        </div>
        <div class="suwis-system-date">{{item.time|dateFmt}}</div>
        <div class="suwis-system-con">
           <span>{{item.content}}</span>
        </div>
        </div>
      </div> -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" error-text="请求失败，点击重新加载" :error.sync="error" @load="loadlist">
      <div class="suwis-system-list" v-for="item in stsyemList">
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
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stsyemList: [],
      loading: false,
      finished: false,
      error: false,
      page: 1,
    }
  },
  methods: {
    loadlist() {
      this.$axios.post('message/system', {
        page: this.page,
        num: 10
      }).then(res => {
        if (res.data.code === 1) {
          if (res.data.data && res.data.data.system) {
            this.stsyemList = this.stsyemList.concat(res.data.data.system)
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
    getStsyem() {
      this.$axios.post('message/system', {
        page: 1,
        num: 10
      }).then(res => {
        if (res.data.data) {
          this.stsyemList = res.data.data
        }
      })
    }
  },
  mounted() {
    // this.getStsyem()
  }
}
</script>

<style lang="scss" scoped>
.suwis-wrapper {
    background-color: #f5f5f5;
    min-height: 100vh;
}

.suwis-system-con {
    display: flex;
    margin-top: 10px;
    line-height: 23px;
    font-size: 14px;
    color: #999;
    padding-left: 31px;
}

.suwis-system-con span {
    padding: 10px 13px;
    background: #fafafa;
    flex: 1;
}

.suwis-system-titie {
    font-size: 16px;
}

.suwis-system-date {
    padding-left: 31px;
    color: #999;
    font-size: 12px;
}

.suwis-system-titie img {
    width: 26px;
    vertical-align: middle;
    margin-right: 8px;
    margin-top: -2px;
}

.suwis-system-list {
    text-align: left;
    display: flex;
    padding: 15px;
    border-bottom: 1px solid #efefef;
    background: #fff;
}

.suwis-system-list > div {
    flex: 1;
    width: 100%;
}
</style>
