<template lang="html">
  <div class="suwis-comment-item">
    <van-row>
      <van-col span="16">
        <slot name="avatar">
          <img class="avatar" :src="avatar" alt="">
        </slot>
        <span>
          <slot name="name">{{name}}</slot><br>
          <van-rate
            v-model="value"
            :size="12"
            color="#f44"
            void-icon="star"
            void-color="#eee"
          />
        </span>
      </van-col>
      <van-col class="date" span="8"><slot name="date">{{date}}</slot></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: ['name', 'date', 'avatar']
}
</script>

<style lang="scss">
.suwis-comment-item {
    font-size: 12px;
    .van-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 12px;
        line-height: 20px;

        .van-col {
            display: flex;
            align-items: center;
        }
    }
    .avatar {
        width: 30px;
        border-radius: 30px;
        display: block;
        margin: 3px 8px auto 0;
    }
    .date {
        justify-content: flex-end;
    }
}
</style>
