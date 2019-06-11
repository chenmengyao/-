<template lang="html">
  <div class="suwis-coupon-item" :class="{invalid:type!=1}" @click="click">
    <dl class="bg" :class="{invalid:type!=1}">
      <dt>
        <img class="money" src="@/assets/coupons/money@3x.png" alt="">
        <div>
          <span class="title">{{title}}</span><br>
          <span>{{desc}}</span>
        </div>
      </dt>
      <dd class="price">
        {{price}}
      </dd>
    </dl>
    <dl>
      <dt>
        <img class="time" src="@/assets/coupons/time@3x.png" alt="">有效期至：{{time|dateFmt}}
      </dt>
      <dd>
        <span class="btn" :class="{invalid:type!=1}">
          <slot name="btn-text">
            {{btnText||'领取'}}
          </slot>
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc', 'price', 'time', 'btnText', 'type'],
  methods: {
    click() {
      // 单击
      this.$emit('click', {
        title: this.title,
        desc: this.desc,
        price: this.price,
        time: this.time,
        type: this.type
      })
    }
  }
}
</script>

<style lang="scss">
.suwis-coupon-item {
    position: relative;
    margin-bottom: 3.9vw;
    box-shadow: 0 2px 10px rgba(232, 63, 68, 0.3);
    border-radius: 4px;
    font-size: 12px;

    &.invalid {
        pointer-events: none;
    }

    .bg {
        padding: 3vw 0 3vw 3vw;
        color: #fff;
        background: #fff url("./../assets/coupons/bg@3x.png") no-repeat center bottom/cover;
        line-height: 23px;

        &.invalid {
            background: #fff url("./../assets/coupons/gray.png") no-repeat center bottom/cover;
        }
    }

    dl {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1vw 0 3vw 3vw;
        border-radius: 4px;
        dt {
            display: flex;
            align-items: center;
            white-space: nowrap;
        }

        dd {
            width: 28vw;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
        }

        .title {
            font-size: 16px;
        }

        .money {
            max-width: 49px;
            margin-right: 3vw;
            display: block;
        }

        .time {
            max-width: 16px;
            display: block;
            vertical-align: middle;
            margin-right: 1.8vw;
        }

        .price {
            font-size: 39px;
            height: 50px;
            background: url("./../assets/coupons/border@3x.png") repeat-y left center/16px;
        }
        .btn {
            color: rgba(232, 63, 68, 1);

            &.invalid {
                color: #999;
            }
        }
    }
}
</style>
