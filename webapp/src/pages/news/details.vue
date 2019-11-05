<template lang="html">
  <div>
     <div style="display:flex;padding:0 16px;padding-bottom:60px;">
       <div style="flex:1">
         <div style="padding:15px 0 9px 0">{{newDateils.title}}</div>
         <div style="color:#999;font-size:12px;">{{newDateils.time|dateFmt}}
             <span><img src="../../assets/slices.png" style="width:15px;margin:0 5px 0 17px;">{{newDateils.clicks}}</span>
             </div>
          <div v-for="(item,index) in text">
            <p style="line-height:26px;font-size:14px;color:#666">{{item.textContent}}</p>
            <div style="display:flex;padding:0 12px;" @click='toGoods(good[index].id)'>
              <img :src="good[index]?good[index].img:''" width="100%">
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
      newDateils: [],
      text: [],
      good: []
    }
  },
  methods: {
    //获取资讯详情
    getDetail(id) {
      this.$axios.post('news/find', {
        id: id
      }).then(res => {
        this.newDateils = res.data.data;
        this.text = res.data.data.content.text
        this.good = res.data.data.content.good
        try {
          plus.webview.currentWebview().setStyle({
            titleNView: {
              titleText: res.data.data.title
            }
          })
        } catch (e) { }
      })
    },
    toGoods(id){
      this.$router.push({path:'/goods/details', query: {id: id}})
    }
  },
  created() {
    var id = this.$route.query.id
    this.getDetail(id)
    this.$store.commit('core/hideTabbar')
  }
}
</script>

<style lang="css">
</style>
