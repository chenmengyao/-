<template>
<div class="suwis-classify">
  <div>
    <van-search @search="goList"
      placeholder="请输入搜索关键词"
      v-model="keyWord"
      style="text-align:center" />
  </div>
  <div v-for="(items,index) in tabList">
    <div class="suwis-classify-con">
      <div class="suwis-classify-btn">
        <div v-for="(item,idxs) in items">
          <div class="suwis-classify-active"
            :class="idxs==num?'d_background':''"
            @click="classifyBtn(idxs)">
            <span :class="idxs==num?'d_active':'d_active1'"></span>{{item.title}}</div>
        </div>
      </div>
      <div class="suwis-classify-list">
        <div v-if="banner.length"
          style="width:calc(100vw - 114px);padding:15px 13px 0 13px">
          <van-swipe :autoplay="3000"
            indicator-color="white">
            <van-swipe-item v-for="item in banner">
              <img :src="item.img"
                width="100%">
            </van-swipe-item>
          </van-swipe>
        </div>
        <div v-for="(itm,id) in tabList[0][num].children"
          style="margin-top:15px;">
          <div>
            <span style="padding-left:15px;">{{itm.title}}</span>
            <div class="d-title">
              <span class="d-tips"
                v-for="(it,ids) in itm.children">
                <router-link :to="{ path: '/goods/list',query:{category:it.id}}"
                  tag="span">
                  {{it.title}}
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      keyWord: '', //搜索关键词
      classifyBan: '',
      tabList: [],
      num: 0,
      banner: []
    }
  },
  methods: {
    classifyBtn(index) {
      this.num = index
    },
    getClassify() {
      this.$axios.post('category/list').then(res => {
        this.banner = res.data.data.banner
        delete res.data.data.banner
        this.tabList.push(res.data.data)
      })
    },
    goList() {
      this.$router.push({
        path: '/goods/list',
        query: {
          search: this.keyWord
        }
      })
    }
  },
  created() {
    this.keyWord=''
    this.getClassify()
  }
}
</script>
<style lang="css" scoped>
.suwis-classify-con{
  display: flex;
  display: -webkit-flex;
  width: 100%;
  text-align: left;
  font-size: 12px;
  color: #333;
}
.suwis-classify-btn,
.suwis-classify-list {
  flex: 1;
}
.suwis-classify-btn {
  max-width: 88px;
  min-width: 88px;
  margin-top: 15px;
  min-height: calc(100vh - 64px) !important;
  background: #efefef;
}
.d-tips {
  border: 1px solid #ccc;
  display: inline-block;
  margin-top: 15px;
  margin-left: 15px;
  line-height: 26px;
  border-radius: 13px;
  padding: 0 11px;
  color: #666666;
  font-size: 12px;
}
.d-title {
  padding: 0 15px 15px 0;
  /* margin-top:15px; */
  display: block;
}
.suwis-classify-btn div {
  line-height: 40px;
  text-align: center;
  background: #efefef;
}
.d_active1 {
  color: #fff;
  font-size: 14px;
  color: #333;
}
.d_background {
  background: #fff !important;
  font-size: 14px;
}
.d_active {
  border-left: 3px solid red;
  position: absolute;
  height: 14px;
  top: 13px;
  font-size: 12px;
  left: 0;
  color: #fff;
  display: block;
}
.suwis-classify-active {
  position: relative;
}
.van-search {
  padding: 15px;
  padding-bottom: 0;
}
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
