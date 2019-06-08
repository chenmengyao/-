<template lang="html">
  <div class="suwis-good-status" :class="type">
    <!-- 底价清仓 -->
    <template v-if="type=='clearance'">
      <dl>
        <dt>
          底价<br>清仓
        </dt>
        <dd>
          <span>
            <i>¥59.9</i><em>¥49.9</em>
          </span>
          <span>
            <img src="@/assets/details/timer.png" alt="">剩余123件
          </span>
        </dd>
      </dl>
    </template>
    <!-- 底价清仓 //-->
    <!-- 竞拍捡漏 -->
    <template v-if="type=='auction'">

    </template>
    <!-- 竞拍捡漏 //-->
    <!-- 限时抢购 -->
    <template v-if="type=='flash'">

    </template>
    <!-- 限时抢购 //-->
    <!-- 好物推荐 -->
    <template v-if="type=='recommend'">

    </template>
    <!-- 好物推荐 //-->
  </div>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style lang="scss" scoped>
.suwis-good-status {
    position: relative;
    height: 40px;
    color: #fff;
    padding: 0 15px;
    &.clearance {
        background: linear-gradient(54deg,rgba(243,90,90,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
        dl {
            margin: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;

            dt {
                border-right: 1px solid rgba(255,255,255,0.6);
                padding-right: 15px;
            }

            dd {
                display: flex;
                justify-content: space-between;
                flex: 1;
                align-items: center;
                margin: 0 0 0 10px;

                span {
                    display: flex;
                    align-items: center;
                }
            }
        }

        i {
            font-size: 14px;
            text-decoration: line-through;
            font-style: normal;
            border-right: 1px solid rgba(255,255,255,0.6);
            padding-right: 5px;
            margin-right: 5px;
            display: inline-block;
        }

        em {
            font-size: 18px;
            font-style: normal;
        }

        img {
            width: 22px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
        }
    }

    &.flash {
        background: linear-gradient(220deg,rgba(250,165,55,1) 0%,rgba(247,149,50,1) 28%,rgba(240,107,37,1) 100%);
    }
}
</style>
