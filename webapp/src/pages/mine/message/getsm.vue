<template lang="html">
  <div class="d-getsm">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled='isDis'>
        <div id="d-content-scroll">
          <div style="padding-bottom:50px">
         <div v-for="item in messageList">
             <div v-if="item.pid!==null" style="margin-top:14px;">
                 <div style="display:flex;font-size:12px;color:#333;">
                    <div style="flex:1;max-width:55px;max-height:30px;">
                        <img :src="store_logo" style="max-width:30px;border-radius:50%;overflow:hidden;margin:0 10px 0 15px;">
                    </div>
                    <div style="flex:1;padding-right:45px">
                         <div style="background:#fff;display:inline-block;padding:3px 11px 3px 9px;border-radius:4px;">
                             <span style="line-height:24px;">
                                 {{item.content}}
                             </span>
                         </div>
                    </div>
                 </div>
             </div>

             <div v-if="item.pid==null" style="margin-top:14px;float:right">
                 <div style="display:flex;font-size:12px;color:#333;">

                    <div style="flex:1;padding-left:45px;">
                         <div style="background:#fff;display:inline-block;padding:3px 11px 3px 9px;border-radius:4px;">
                             <span style="line-height:24px;float:right">
                                 {{item.content}}
                             </span>
                         </div>
                    </div>
                    <div style="flex:1;max-width:55px;max-height:30px;">
                        <img :src="user_photo" style="max-width:30px;border-radius:50%;overflow:hidden;margin:0 10px 0 15px;">
                    </div>
                 </div>
             </div>
             <div style="clear:both"></div>
             </div>
         </div>
      </div>

</van-pull-refresh>
<div style="position:fixed;bottom:0;width:100%">
          <div style="display:flex;padding:6px 15px 4px 0;background:#fff ">
            <input style="flex:1;margin:0 15px;background:#efefef;border:none;height:30px;padding:0 10px;font-size:14px;color:#333;border-radius:4px;"
                v-model="sendMessage"
                type="text"
            />
            <div style="flex:1;max-width:45px;line-height:30px;font-size:14px;color:#333;background:#EFEFEF;border-radius:4px;" @click="getList">
                <div style="height:30px;text-align:center">发送</div>
            </div>
        </div>
      </div>

      <!-- <div id="d-content-scroll">
          <div style="padding-bottom:50px">
         <div v-for="item in messageList">
             <div v-if="item.pid!==null" style="margin-top:14px;">
                 <div style="display:flex;font-size:12px;color:#333;">
                    <div style="flex:1;max-width:55px;max-height:30px;">
                        <img src="../../../assets/test1.png" style="max-width:30px;border-radius:50%;overflow:hidden;margin:0 10px 0 15px;">
                    </div>
                    <div style="flex:1;padding-right:45px">
                         <div style="background:#fff;display:inline-block;padding:3px 11px 3px 9px;border-radius:4px;">
                             <span style="line-height:24px;">
                                 {{item.content}}
                             </span>
                         </div>
                    </div>
                 </div>
             </div>

             <div v-if="item.pid==null" style="margin-top:14px;float:right">
                 <div style="display:flex;font-size:12px;color:#333;">

                    <div style="flex:1;padding-left:45px;">
                         <div style="background:#fff;display:inline-block;padding:3px 11px 3px 9px;border-radius:4px;">
                             <span style="line-height:24px;float:right">
                                 {{item.content}}
                             </span>
                         </div>
                    </div>
                    <div style="flex:1;max-width:55px;max-height:30px;">
                        <img src="../../../assets/test1.png" style="max-width:30px;border-radius:50%;overflow:hidden;margin:0 10px 0 15px;">
                    </div>
                 </div>
             </div>
             <div style="clear:both"></div>
             </div>
         </div>
      </div>
      <div style="position:fixed;bottom:0;width:100%">
          <div style="display:flex;padding:6px 15px 4px 0;background:#fff ">
            <input style="flex:1;margin:0 15px;background:#efefef;border:none;height:30px;padding:0 10px;font-size:14px;color:#333;border-radius:4px;"
                v-model="sendMessage"
                type="text"
            />
            <div style="flex:1;max-width:45px;line-height:30px;font-size:14px;color:#333;background:#EFEFEF;border-radius:4px;" @click="getList">
                <div style="height:30px;text-align:center">发送</div>
            </div>
        </div>
      </div> -->
  </div>
</template>

<script>
import male from '@/assets/uc/male.png'
import store_logo from '@/assets/infor3.png'
import Vue from 'vue'
import {
  Toast
} from 'vant';
Vue.use(Toast);
export default {
  data() {
    return {
      isDis: false,
      list: [],
      sendMessage: '',
      setInter: null,
      messageList: [],
      count: 0,
      isLoading: false,
      store_logo: '',
      user_photo: ''
    }
  },
  methods: {
    onRefresh() {
      if (sessionStorage.getItem("message")) {
        this.messageList = JSON.parse(sessionStorage.getItem("message"))

        this.$axios.post('message/getsm', {
          store_id: this.$route.query.store_id,
          id: this.messageList[0].id
        }).then(res => {
          this.isLoading = false
          var arr = []
          if (!res.data.data.msg.length) {
            console.log('0000')
            this.isDis = true
          }
          if (res.data.data.msg&&res.data.data.msg.length>0) {
            
            for (let i in res.data.data.msg) {
              this.messageList.unshift(res.data.data.msg[i])
            }
          }
          
          sessionStorage.setItem("message", JSON.stringify(this.messageList));

        })
      }

    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    },
    getList() {
      var uuid = this.randomNum(1000, 9999) + '' + this.randomNum(1000, 9999)
      this.$axios.post('message/sendsm', {
        store_id: this.$route.query.store_id,
        uuid: uuid,
        content: this.sendMessage
      }).then(res => {
        Toast(res.data.msg);
        var div = document.getElementById('d-content-scroll')
        var con = {
          content: this.sendMessage,
          uuid: uuid,
          pid: null
        }
        this.messageList.push(con)
        sessionStorage.setItem("message", JSON.stringify(this.messageList));
        this.sendMessage = ''
        setTimeout(() => {
          var charBox = document.querySelector('#d-content-scroll')
          if (charBox) {
            charBox.scrollTop = charBox.scrollHeight-charBox.clientHeight
          }
        }, 1000);
      })
    },
    getMessage() {
            
      if (sessionStorage.getItem("message")) {
        this.messageList = JSON.parse(sessionStorage.getItem("message"))
        this.$axios.post('message/getsm', {
          store_id: this.$route.query.store_id
        }).then(res => {
          this.store_logo = res.data.data.store_logo || store_logo
          this.user_photo = res.data.data.user_photo || male
          var list = JSON.parse(sessionStorage.getItem("message"))
          var listArr = list.map(function(user) {
            return user.uuid;
          })
          var msgArr = res.data.data.msg.map(function(user) {
            return user.uuid;
          })
          var arr = []
          for (let i in msgArr) {
            var item = msgArr[i]
            if (listArr.indexOf(item) > -1) {
              //    console.log(listArr)
            } else {
              if (msgArr.indexOf(Number(item))) {
                var items = res.data.data.msg[msgArr.indexOf(msgArr[i])]
                list.push(items)
              }
              // arr.push(res.data.data.msg[msgArr.indexOf(msgArr[i])])
            }
          }
          if (this.messageList.length<=0||this.messageList[this.messageList.length-1].uuid != res.data.data.msg[0].uuid) {
            setTimeout(() => {
              var charBox = document.querySelector('#d-content-scroll')
              if (charBox) {
                charBox.scrollTop = charBox.scrollHeight-charBox.clientHeight
              }
            }, 2000);
          }
          // this.messageList=JSON.parse(sessionStorage.getItem("message")).reverse()
          sessionStorage.setItem("message", JSON.stringify(list));

        })
      } else {
        this.$axios.post('message/getsm', {
          store_id: this.$route.query.store_id
        }).then(res => {
          if (this.messageList.length<=0||this.messageList[this.messageList.length-1].uuid != res.data.data.msg[0].uuid) {
            setTimeout(() => {
              var charBox = document.querySelector('#d-content-scroll')
              if (charBox) {
                charBox.scrollTop = charBox.scrollHeight-charBox.clientHeight
              }
              
            }, 2000);
          }
          this.messageList = res.data.data.msg.reverse()
          
          sessionStorage.setItem("message", JSON.stringify(res.data.data.msg));
        })
      }
    }
  },
  mounted() {
    this.setInter = setInterval(() => {
      this.getMessage()
    }, 2000);
    var charBox = document.querySelector('#d-content-scroll')
    if (charBox) {
      setTimeout(() => {
        charBox.scrollTop = charBox.scrollHeight-charBox.clientHeight
      }, 3000);
    }
  },
  destroyed() {
    clearInterval(this.setInter);
    sessionStorage.removeItem("message");
  }
}
</script>

<style lang="css" scoped>
.d-getsm{
  background-color:#f5f5f5
}
#d-content-scroll {
  height: 100vh;
  overflow: scroll;
}
.active {
  color: red;
}
</style>
