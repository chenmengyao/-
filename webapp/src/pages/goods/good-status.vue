<template lang="html">
  <div class="suwis-good-status" v-if="details.type" :class="modules[details.type]">
    <!-- 限时抢购 -->
    <template v-if="details.type==1">
      <dl>
        <dt>
          限时<br>抢购
        </dt>
        <dd v-if="Date.now()< details.activity_start_time  * 1000">
          距离活动开启还剩&nbsp;&nbsp;
          <countdown class="countdown" :time="details.activity_start_time  * 1000 - Date.now()">
            <template slot-scope="props">
              <i>{{ props.hours < 10 ? `0${props.hours}`: props.hours }}</i> :
              <i>{{ props.minutes < 10 ? `0${props.minutes}`: props.minutes }}</i> :
              <i>{{ props.seconds < 10 ? `0${props.seconds}`: props.seconds }}</i>
            </template>
          </countdown>
        </dd>
        <dd v-else>
          距离活动结束还剩&nbsp;&nbsp;
          <countdown class="countdown" :time="details.activity_end_time  * 1000 - Date.now()">
            <template slot-scope="props">
              <i>{{ props.hours < 10 ? `0${props.hours}`: props.hours }}</i> :
              <i>{{ props.minutes < 10 ? `0${props.minutes}`: props.minutes }}</i> :
              <i>{{ props.seconds < 10 ? `0${props.seconds}`: props.seconds }}</i>
            </template>
          </countdown>
        </dd>
      </dl>
    </template>
    <!-- 限时抢购 //-->
    <!-- 竞拍捡漏 -->
    <template v-if="details.type==2">
      <dl>
        <dt>
          竞拍<br>捡漏
        </dt>
        <dd>
          <div class="price">
            <span>
              <i>当前价格</i>
              <em>¥{{details.price_max}}</em>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;<var>{{details.sell||0}}次出价</var>
          </div>
          <span class="time">
            <img src="@/assets/details/timer.png" alt="">
            <countdown v-if="details.activity_end_time" :time="details.activity_end_time * 1000 - Date.now()">
              <template slot-scope="props">
                <i>{{ props.hours < 10 ? `0${props.hours}`: props.hours }}</i> :
                <i>{{ props.minutes < 10 ? `0${props.minutes}`: props.minutes }}</i> :
                <i>{{ props.seconds < 10 ? `0${props.seconds}`: props.seconds }}</i>
              </template>
            </countdown>
          </span>
        </dd>
      </dl>
    </template>
    <!-- 竞拍捡漏 //-->
    <!-- 好物推荐 -->
    <template v-if="details.type==3">
      <dl>
        <dt>
          好物<br>推荐
        </dt>
        <dd>
          推荐指数 <van-rate v-model="details.star" disabled disabled-color="#fff" color="#fff" void-color="#fff" :size="16" />
        </dd>
      </dl>
    </template>
    <!-- 好物推荐 //-->
    <!-- 底价清仓 -->
    <template v-if="details.type==4">
      <dl>
        <dt>
          底价<br>清仓
        </dt>
        <dd>
          <span>
            <i>¥{{details.price_max}}</i><em>¥{{details.price_min}}</em>
          </span>
          <span>
            <img src="@/assets/details/timer.png" alt="">剩余{{details.inventory}}件
          </span>
        </dd>
      </dl>
    </template>
    <!-- 底价清仓 //-->
  </div>
</template>

<script>
export default {
  props: ['details'],
  data() {
    return {
      modules: ['', 'flash', 'auction', 'recommend', 'clearance']
    }
  }
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
    //
    &.auction {
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

                .price,
                .time {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                }

                .price {
                    line-height: 16px;
                    span {
                        i {
                            display: block;
                        }
                    }

                    var {
                        font-style: normal;
                        border: 1px solid #fff;
                        border-radius: 30px;
                        padding: 2px 5px;
                        font-size: 12px;
                    }
                }
            }
        }

        i {
            font-size: 12px;
            font-style: normal;
            display: inline-block;
        }

        em {
            font-size: 16px;
            font-style: normal;
        }

        img {
            width: 22px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
        }
    }

    //
    &.flash {
        background: linear-gradient(220deg,rgba(250,165,55,1) 0%,rgba(247,149,50,1) 28%,rgba(240,107,37,1) 100%);
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
                flex: 1;
                align-items: center;
                margin: 0 0 0 10px;
                font-size: 14px;
                white-space: nowrap;

                .countdown {
                    display: flex;
                }

                i {
                    background: rgba(255,255,255,1);
                    border-radius: 2px;
                    font-style: normal;
                    margin: 0 5px;
                    padding: 0;
                    font-size: 14px;
                    width: 21px;
                    height: 21px;
                    line-height: 21px;
                    color: #F9A236;
                    text-align: center;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    align-content: center;
                }
            }
        }
    }

    //
    &.recommend {
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
                flex: 1;
                align-items: center;
                margin: 0 0 0 10px;
                font-size: 14px;
                white-space: nowrap;

                .van-rate {
                    margin-top: 2.8px;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
