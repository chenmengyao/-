<template lang="html">
  <div class="suwis-shopping-cart">
    <div class="list-group" v-for="item in 5">
      <van-checkbox>
        <div class="name">
          <img class="icon" src="touiocn.png" alt="">新胜数码通讯<img class="arrow" src="@/assets/details/arrowright@3x.png" alt="">
        </div>
      </van-checkbox>
      <van-checkbox   v-for="item in 3">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="/test3.png"
          origin-price="10.00"
        >
      </van-card>
    </van-checkbox>
  </div>
  <div class="btn-group">
    <van-checkbox>
      全选
    </van-checkbox>
    <img src="@/assets/shopping-cart/remove@3x.png" alt="">
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.suwis-shopping-cart {
    padding: 15px;
    background: $bg;
    padding-bottom: 55px;

    .list-group {
        background: #fff;
        margin-bottom: 5vw;
        padding: 1vw 0;
        border-radius: 4px;
        padding-left: 12px;

        .name {
            display: flex;
            align-items: center;
            white-space: nowrap;
            font-size: 16px;
            margin: 15px 0;
            .icon {
                max-width: 20px;
                display: block;
                margin-right: 5px;
            }
            .arrow {
                max-width: 6.9px;
                display: block;
                margin-left: 5px;
            }
        }

        .van-card {
            background: transparent;
            padding-left: 0;
        }
    }

    .btn-group {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 55px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        box-sizing: border-box;
        border-top: 1px solid $border;

        img {
            display: block;
            height: 30px;
        }
    }
}
</style>
