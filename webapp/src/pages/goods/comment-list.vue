<template lang="html">
  <div class="suwis-comment-list">
    <div class="wrapper">
      <van-row class="title" type="flex" align="center" justify="between">
        <van-col>
          评价（{{evaluation.evaluate_count||0}}）
        </van-col>
        <van-col>
          好评率{{(evaluation.feedback*100)||0}}%
        </van-col>
      </van-row>
      <van-row class="options">
        <van-col>
          <van-button :class="{active:item.active}" v-for="item of buttons" @click="current=item" type="primary">{{item.name}}</van-button>
        </van-col>
      </van-row>
    </div>
    <comment-list v-if="list">
      <comment-item v-for="(item,idx) in list"
        :name="item.nickname"
        :date="item.evaluate_time"
        :avatar="item.photo"
        :score="((item.evaluate_express + item.evaluate_serve + item.evaluate_quality) / 15) * 5"
        :content="item.evaluate"
        @lookImg="lookImg"
        :medias="getMedias(item)">
      </comment-item>
      <van-row v-if="list.length==0" type="flex" align="center" justify="center">
        <van-col style="color:#999999;">
          暂无评价~
        </van-col>
      </van-row>
    </comment-list>
  </div>
</template>

<script>
import {
  ImagePreview
} from 'vant'
export default {
  data() {
    return {
      list: [],
      evaluation: [],
      buttons: [{
        name: '全部订单',
        key: '',
        active: true
      }, {
        name: '好评',
        key: 'good',
        val: 1,
        active: false
      }, {
        name: '晒单',
        key: 'show',
        val: 1,
        active: false
      }],
      current: {},
      params: {
        id: '',
        good: '',
        show: ''
      },
      ImagePreviewDialog:''
    }
  },
  created() {
    this.current = this.buttons[0];
    this.$store.commit('core/hideTabbar');
  },
  watch: {
    current(now, old) {
      now.active = true
      old.active = false
      if (now.key) {
        this.params[now.key] = now.val
        this.params[old.key] = ''
      } else {
        this.params.good = ''
        this.params.show = ''
      }
      this.getList()
    }
  },
  methods: {
    async getList() {
      this.params.id = this.$route.query.id
      let res = await this.$axios.post('goods/comment', this.params)
      this.list = res.data.data.comment || []
      this.evaluation = res.data.data || {}
    },
    getMedias(item) {
      if (!item.evaluate_img) return []
      let imgs = JSON.parse(item.evaluate_img) || []
      return imgs
    },
    lookImg(medias,idx){
      this.ImagePreviewDialog=ImagePreview({
        images: medias || [],
        startPosition: idx,
        onClose() {
          // do something
        }
      });
    }
  },
  beforeRouteLeave(to,from,next){
    this.ImagePreviewDialog&&this.ImagePreviewDialog.close();
    next();
  }
}
</script>

<style lang="scss">
.suwis-comment-list {
    position: relative;
    padding: $interval 0;
    font-size: 14px;

    .wrapper {
        padding: 0 $interval;
    }

    .title {
        justify-content: space-between;
        font-size: 14px;
    }

    .options {
        margin-top: 15px;
        .van-button {
            padding: 2px 10px;
            height: 26px;
            line-height: 18px;
            background: #fce4e5;
            color: #333333;
            margin-left: 15px;
            border: 2px solid transparent;
            font-size: 12px;

            &:first-child {
                margin-left: 0;
            }

            &.active {
                border-color: #e83f44;
            }
        }
    }
}
</style>
