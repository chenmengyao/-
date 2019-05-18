<template lang="html">
  <div>
     
  </div>
</template>

<script>
export default {
  data(){
    return{
        
    }
  },
  methods: {
    //获取资讯详情
    getDetail(id){     
      this.$axios.post('news/find',{
        id:id
      }).then(res => {
        
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
