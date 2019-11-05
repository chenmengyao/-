<template>
<div class="suwis-classify">
  <div>
    <van-search @search="goList"
      placeholder="请输入搜索关键词"
      v-model="keyWord"
      @cancel="onCancel"
      @focus="onfocus"
      :show-action="showAction"
      style="text-align:center" />
  </div>
  <div v-show="!showAction" v-for="(items,index) in tabList">
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
               <router-link tag="div"
                :to="{path: '/goods/details', query: {id: item.goods_id}}">
                <img :src="item.img"
                  :data-error="require('../../assets/more.jpg')"
                  :data-loading="require('../../assets/loading_alpha.png')"
                  >
              </router-link>
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
  <div class="seachHistoly">
    <van-row type="flex" align="spaceBetween" class="tip" style="justify-content: space-between;">
      <van-col > 搜索历史</van-col>
      <van-col>
        <van-icon name="delete" v-if="!showDel" style="font-size:16px" @click="showDel=true"/>
        <div v-else class="delBox">
          <span @click="clearHis('all')">全部清除</span>
          <span @click="showDel=false">完成</span>
        </div>
      </van-col>
    </van-row>
    <div class="d-title" v-if="histolyList.length>0">
      <span class="d-tips"
        v-for="(it,ids) in histolyList" :key="ids" @click="goList(it)">
        <span >
          {{it}}
        </span>
        <van-icon v-if="showDel" name="cross" @click.stop="clearHis('11',ids)"/>
      </span>
    </div>
    <div class="nohis" v-else>
       暂无历史记录...
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
      banner: [],
      showAction: false,
      histolyList: [],
      showDel: false
    }
  },
  methods: {
    onCancel() {
      this.showAction = false;
    },
    onfocus() {
      this.showAction = true;
    },
    onfocus() {
      this.showAction = true;
    },
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
    goList(keyWord) {
      if (this.showDel&&keyWord) {
        return
      }
      var keyw = keyWord || this.keyWord;
      this.histolyList.push(keyw);
      this.histolyList = [...new Set(this.histolyList)];
      
      localStorage.setItem('histolyList',JSON.stringify(this.histolyList))
      
      this.$router.push({
        path: '/goods/list',
        query: {
          search: keyw
        }
      })
    },
    clearHis(type,inx) {
      if (type==='all') {
        this.histolyList = [];
        this.showDel = false;
      }else {
        this.histolyList.splice(inx,1)
      }
      localStorage.setItem('histolyList',JSON.stringify(this.histolyList))
    },
  },
  watch: {
    showAction() {
      if (this.showAction) {
        this.$store.commit('core/hideTabbar')
      }else {
        this.$store.commit('core/showTabbar')
      }
    }
  },
  created() {
    this.getClassify();
    if (localStorage.getItem('histolyList')) {
      this.histolyList = JSON.parse(localStorage.getItem('histolyList'))
    }else {
      this.histolyList = [];
    }
    this.$store.commit('core/header', {
      title: '商品分类',
      buttons: {
        right: {
          fontSize: '27px',
          text: '\ue655',
          onclick: () => {
            this.showAction = true
          }
        }
      }
    })
  },
  activated(){
    this.keyWord='';
  },
  beforeRouteLeave (to, from, next) {
    // ...
    this.showAction = false;
    next()
  }
}
</script>
<style  lang="css">
.seachHistoly .d-tips {
  background-color: #eee;
  position: relative;
}
.seachHistoly .delBox>span:first-child {
  padding-right: 5px;
  margin-right: 5px;
  border-right: 1px solid #aaa;
}
.seachHistoly .delBox>span:last-child {
  color: red;
}
.seachHistoly .d-tips .van-icon{
  background-color: red;
  position: absolute;
  height: 13px;
  width: 13px;
  line-height: 13px;
  text-align: center;
  color: #fff;
  font-size: 10px;
  border-radius: 50%;
  right: -6px;
  top: -10px;
}
</style>

<style lang="css" scoped>
.suwis-classify-con{
  display: flex;
  display: -webkit-flex;
  width: 100%;
  text-align: left;
  font-size: 12px;
  color: #333;
}
.seachHistoly {
  font-size: 12px;
}
.seachHistoly .tip {
  color: #666;
  padding: 20px 20px 20px;
}
.seachHistoly .d-titles {
  background-color: #eee;
}
.seachHistoly .nohis {
  color: #ccc;
  padding: 20p;
  text-align: center;
}
.seachHistoly .tip .van-icon {
  color: #333;
  font-size: 16px;
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
