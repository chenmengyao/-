<template lang="html">
  <dl class="suwis-good-item">
    <dt>
      <img :src="img" alt="">
    </dt>
    <dd class="title">
      {{title||''}}
    </dd>
    <dd>
      <em>¥{{price||0.0}}</em>
      <span class="bought">{{sell||0}}人已付款</span>
    </dd>
  </dl>
</template>

<script>
export default {
  props: ['title', 'img', 'price', 'sell']
}
</script>

<style lang="scss">
.suwis-good-item {
    font-size: 12px;

    dt {
        img {
            border-radius: 4px;
            margin-bottom: 3px;
        }
    }
    .title {
        font-size: 14px;
        text-align: left;
        justify-content: flex-start;
        padding-bottom: 5px;
    }
    dd {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;

        em {
            color: $red;
            font-size: 14px;
            font-style: normal;
        }
        .bought {
            color: $gray;
            transform: scale(0.9);
            transform-origin: right;
        }
    }
}
</style>
