<template lang="html">
  <div>
	  <div class="suwis-feedback-con">
	    	<textarea id="wenti" class="suwis-feedback-txt" placeholder="请输入您遇到的问题和建议～" v-model="content"></textarea>
	  </div>
	  <div class="suwis-feedback-con">
	    <input id="dianhua" class="suwis-feedback-inp" type="text" placeholder="请输入您的联系电话／邮箱"  v-model="contact_way"/>
	  </div>
	  <div class="suwis-feedback-con" >
	  	<van-button round type="danger" @click="submit()">提交</van-button>
	  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  data() {
    return {
      token: '', //token
      contact_way: '', //联系方式
      content: '', //详情内容
      code: '', //状态码
      msg: '' //消息
    }
  },
  methods: {
    submit() {
      if (this.content == null || this.content == "") {
        Toast("详情内容不能为空！！")
        return;
      } else if (this.contact_way == null || this.contact_way == "") {
        Toast("联系方式不能为空！！")
        return;
      } else {
        this.$axios.post('message/feedback', {
          contact_way: this.contact_way,
          content: this.content
        }).then(res => {
          if (res.data.code == 1) {
            this.contact_way = "";
            this.content = "";
            this.$router.push({ path: '/mine/details' });
          }
          Toast(res.data.msg);
        })
      }

    },
    // 重置导航
    resetNav() {
      this.$store.commit('core/header', {
        title: '惠回来',
        // 清空按钮
        buttons: {
          // 左边按钮配置
          left: {
            float: 'left',
            // 字号
            fontSize: '27px',
            // 字体路径
            fontSrc: '_www/fonts/iconfont.ttf',
            // 按钮文字
            text: '\ue673',
            // 监听点击
            onclick: () => {
              this.scanShow = true
            }
          },
          // 右边图标
          right: {
            float: 'right',
            // 字号
            fontSize: '27px',
            // 字体路径
            fontSrc: '_www/fonts/iconfont.ttf',
            // 按钮文字
            text: '\ue608',
            // 监听点击
            onclick: () => {
              if (this.scanShow) return
              this.$router.push('/mine/information')
            }
          }
        }
      })
    },
  },
  watch: {
    $route(val, oldVal) {
      if (val.path == '/mine/details') this.resetNav()
    }
  },
  created(){
    this.onPlusReady(() => {
      this.resetNav()
    });
  }
}
</script>

<style lang="css" scoped>
.suwis-feedback-con {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 21px 24px 13px 24px;
}
.suwis-feedback-txt {
  display: block;
  background-color: #f5f5f5;
  padding: 15px 18px;
  border-radius: 4px;
  height: 163px;
  border: none;
  flex: 1;
  color: #999999;
  resize: none;
}
.suwis-feedback-inp {
  flex: 1;
  background-color: #f5f5f5;
  border: none;
  height: 40px;
  color: #999999;
  font-size: 12px;
  padding-left: 18px;
  border-radius: 4px;
}
.suwis-feedback-con:nth-child(2) {
  padding: 0px 24px;
}
.suwis-feedback-con {
  display: flex;
}
.van-button {
  flex: 1;
  height: 45px;
  background: linear-gradient(
    54deg,
    rgba(245, 92, 60, 1) 0%,
    rgba(246, 96, 62, 1) 17%,
    rgba(221, 11, 17, 1) 100%
  );
  opacity: 1;
  border-radius: 23px;
  font-size: 16px;
}
</style>
