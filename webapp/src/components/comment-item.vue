<template lang="html">
  <div class="suwis-comment-item">
    <van-row class="info">
      <van-col span="16">
        <slot name="avatar">
          <img class="avatar" :src="avatar" alt="">
        </slot>
        <span>
          <slot name="name">{{name}}</slot><br>
          <van-rate
            v-model="score"
            readonly
            :size="12"
            color="#f44"
            void-icon="star"
            void-color="#eee"
          />
        </span>
      </van-col>
      <van-col class="date" span="8"><slot name="date">{{date}}</slot></van-col>
    </van-row>
    <van-row class="content">
      <van-col span="24">
        <slot>
          {{content}}
        </slot>
      </van-col>
    </van-row>
    <van-row class="medias">
      <van-col v-for="(url,idx) in medias">
        <img :src="url" @click="preview(idx)" alt="">
      </van-col>
    </van-row>
  </div>
</template>

<script>
import {
  ImagePreview
} from 'vant'
export default {
  props: ['name', 'date', 'avatar', 'content', 'medias', 'score'],
  watch: {
    medias(val) {}
  },
  methods: {
    preview(idx) {
      ImagePreview({
        images: this.medias || [],
        startPosition: idx,
        onClose() {
          // do something
        }
      })
    }
  }
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
        color: $gray;
    }
    .info {
        padding-bottom: 0;
    }
    .content {
        padding-top: 0;
    }
    .medias {
        display: flex;
        justify-content: flex-start;
        padding-top: 0;
        .van-col {
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
            img {
                border-radius: 4px;
                width: 60px;
                height: 60px;
                object-fit: cover;
            }
        }
    }
}
</style>
