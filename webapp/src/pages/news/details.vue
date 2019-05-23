<template lang="html">
  <div>
     <div style="display:flex;padding:0 16px;">
       <div style="flex:1">
         <div style="padding:15px 0 9px 0">{{newDateils.title}}</div>
         <div style="color:#999;font-size:12px;">{{newDateils.time|dateFmt}}
             <span><img src="../../assets/slices.png" style="width:15px;margin:0 5px 0 17px;">{{newDateils.clicks}}</span>
             </div>
          <div v-for="(item,index) in text">
            <p style="line-height:26px;font-size:14px;color:#666">{{item.textContent}}</p>
            <div style="display:flex;padding:0 12px;">
              <img :src="good[index].img" width="100%">
            </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        newDateils:[],
        text:[],
        good:[]
    }
  },
  methods: {
    //获取资讯详情
    getDetail(id){     
      this.$axios.post('news/find',{
        id:id
      }).then(res => {
        this.newDateils=res.data.data;
        this.text=res.data.data.content.text
        this.good=res.data.data.content.good
    })
    }
  },
  created(){
    var id=this.$route.query.id
    this.getDetail(id)
  }
}
</script>

<style lang="css">
</style>
