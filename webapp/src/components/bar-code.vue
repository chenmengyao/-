<template>
<van-popup v-model="popupShow"
  class="barBodeScan"
  position="right"
  @opened="openPopup">
  <div class="suwis-bar-code">
    <div id="bcid"></div>
    <div class="footer">
      <van-button type="danger"
        size="small"
        round
        @click="closePopup">取消</van-button>
    </div>
  </div>
</van-popup>
</template>

<script>
// import permission from '@/utils/permission.js'
let scan
export default {
  name: "bar-code", // 二维码扫描
  props: {
    activity: String,
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      codeUrl: '',
      popupShow: false,
    }
  },
  methods: {
    // 关闭面板
    closePopup() {
      if (!window.plus) return
      scan.close()
      this.popupShow = false
      this.$emit('close')
    },
    onMarked(type, result, file) {
      switch (type) {
        case plus.barcode.QR:
          type = 'QR'
          break
        case plus.barcode.EAN13:
          type = 'EAN13'
          break
        case plus.barcode.EAN8:
          type = 'EAN8'
          break
        default:
          type = '其它' + type
          break
      }
      // 获得code
      result = result.replace(/\n/g, '')
      this.codeUrl = result
      // this.$toast(result)
      this.$emit('success', this.codeUrl)
      this.closePopup()
    },
    openPopup() {
      if (!window.plus) return
      scan = new plus.barcode.Barcode('bcid')
      scan.onmarked = this.onMarked
      scan.start()
      // 检测权限
      // this.checkAuth()
    },
    checkAuth() {
      alert('检查权限')
      // let status = permission.requestAndroidPermission('android.permission.CAMERA')
      // this.$toast(status)
    }
  },
  watch: {
    show(val) {
      this.popupShow = this.show
      // 关闭标题栏和底部导航栏
      this.$store.commit('core/toggleTabbar', !val)
      this.$store.commit('core/toggleHeader', !val)
    }
  },
  beforeDestroy () {
      this.closePopup();
  }
}
</script>
<style lang="scss">
.barBodeScan {
  height: 100vh;
  width: 100vw;
  right: 0;
  top: 0;
  transform: none;
  left: 0;
}
</style>

<style scoped lang="scss">
.suwis-bar-code {
    width: 100vw;
    height: 100vh;
    #bcid {
        width: 100vw;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 40px;
        text-align: center;
        color: #fff;
        background: transparent;
    }
    .footer {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        background: transparent;
    }
}
</style>
