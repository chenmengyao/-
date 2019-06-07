<template lang="html">
  <van-popup class="suwis-share" v-model="value" @close="close" position="bottom">
    <div>
      <ul class="btn-group">
        <li><img src="@/assets/share/wx@2x.png" alt="">微信好友</li>
        <li><img src="@/assets/share/wxpyq@2x.png" alt="">朋友圈</li>
        <li><img src="@/assets/share/sina@2x.png" alt="">新浪微博</li>
        <li><img src="@/assets/share/copy@2x.png" alt="">复制链接</li>
      </ul>
      <van-button class="btn-cancel" @click="close">取消</van-button>
    </div>
  </van-popup>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    close() {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss">
.suwis-share {
    background: #fff;
    border-radius: 8px 8px 0 0;
    padding: 15px 20px;
    box-sizing: border-box;
    padding-bottom: 68px;

    .btn-group {
        display: flex;
        justify-content: space-between;

        li {
            text-align: center;
        }

        img {
            display: block;
            margin: auto;
            max-width: 49px;
            margin-bottom: 5px;
        }
    }

    .btn-cancel {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100vw;
        background: rgba(245,245,245,1);
        border: none;
        color: #999999;
    }
}
</style>
