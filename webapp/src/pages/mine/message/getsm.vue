<template lang="html">
  <div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">


        <div id="d-content-scroll">
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
import Vue from 'vue'
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  data(){
    return{
     list:[],
     sendMessage:'',
     setInter:null,
     messageList:[],
     count: 0,
     isLoading: false
    }
  },
  methods:{
      onRefresh() {
        if(sessionStorage.getItem("message")){
            this.messageList=JSON.parse(sessionStorage.getItem("message"))
            
            this.$axios.post('message/getsm',{
                store_id:this.$route.query.store_id,
                id:this.messageList[0].id
            }).then(res => { 
                this.isLoading=false
                var arr=[]
                    for(let i in res.data.data.msg){
                        this.messageList.unshift(res.data.data.msg[i])
                    }
                    sessionStorage.setItem("message", JSON.stringify(this.messageList)); 
                
            })
        }
       
    },
    getList(){
        var uuid=new Date().getTime()
      this.$axios.post('message/sendsm',{
          store_id:this.$route.query.store_id,
          uuid:uuid,
          content:this.sendMessage
      }).then(res => {
        Toast(res.data.msg);
          var div = document.getElementById('d-content-scroll')
          var con={content:this.sendMessage,uuid:uuid,pid:null}
          this.messageList.push(con)
          sessionStorage.setItem("message", JSON.stringify(this.messageList)); 
          this.sendMessage=''
      })
    },
     getMessage(){
         if(sessionStorage.getItem("message")){
      this.messageList=JSON.parse(sessionStorage.getItem("message"))
      this.$axios.post('message/getsm',{
          store_id:this.$route.query.store_id
      }).then(res => {
            var list=JSON.parse(sessionStorage.getItem("message"))
            var listArr=list.map(function (user) { return user.uuid; })
            var msgArr=res.data.data.msg.map(function (user) { return user.uuid; })
            var arr=[]
            for(let i in msgArr){
                var item=msgArr[i]
                if(listArr.indexOf(item)>-1){
                //    console.log(listArr)
                }else{
                    if(listArr.indexOf(Number(item))){
                     var items=res.data.data.msg[msgArr.indexOf(msgArr[i])]
                     list[listArr.indexOf(Number(item))]=items
                    }
                    // arr.push(res.data.data.msg[msgArr.indexOf(msgArr[i])])
                }
            }
            // this.messageList=JSON.parse(sessionStorage.getItem("message")).reverse()
            sessionStorage.setItem("message", JSON.stringify(list.concat(arr))); 
        
      })
    }else{
         this.$axios.post('message/getsm',{
          store_id:this.$route.query.store_id
      }).then(res => {
          this.messageList=res.data.data.msg.reverse()
            sessionStorage.setItem("message", JSON.stringify(res.data.data.msg));
      })
    }
     }
  },
  mounted() {
      document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')
      this.setInter=setInterval(() => {
          this.getMessage()
      }, 2000);
      
  },
  destroyed(){
        clearInterval(this.setInter); 
        sessionStorage.removeItem("message");
    }
}
</script>

<style lang="css" scoped>
#d-content-scroll{
  height:100vh;
  overflow:scroll;
}
.active{
    color:red;
}
</style>
