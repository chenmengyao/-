<template lang="html">
  <div> 
    <div v-html="ritchtext" style="font-size:32px;padding:0 15px;" ></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        ritchtext:''
    }
  },
    created(){
        this.$axios.post('goods/auction_rule').then(res => {
            if(res.data&&res.data.data){
              this.ritchtext=JSON.parse(res.data.data)
            }
        })
    }
}
</script>

<style lang="css">

</style>
