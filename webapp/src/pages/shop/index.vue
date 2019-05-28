<template lang="html">
  <div class="suwis-shop">
    <van-row class="interval shop" v-if="details.store">
      <van-col>
        <dl>
          <dt>
            <img :src="details.store.logo" alt="">
          </dt>
          <dd>
            <h6>{{details.store.name}}</h6>
            <span>在售商品<em>{{details.store_count}}</em>件</span>
          </dd>
        </dl>
      </van-col>
      <van-col class="link">
        <router-link :to="{ path: '/', params: {} }">
          <img class="btn" src="@/assets/details/look@3x.png" alt="">
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.suwis-shop {
    position: relative;
}
</style>
