<template>
    <div class="suwis-footprint">
        <ul class="date-list">
            <li class="date-item" v-for="item in week">
                <div class="day">{{item.day}}</div>
                <div class="date" :class="{today: item.isToday}">{{item.date}}</div>
            </li>
        </ul>
        <template v-for="item in list">
            <div class="footprint-item" v-if="item.length">
                <div class="title">{{item[0].time |date}}</div>
                <ul class="goods-list">
                    <li class="goods-item" v-for="goods in item" :key="goods.goods_id">
                        <img :src="goods.img" class="img">
                        <div class="bottom-line">
                            <span class="price">￥{{goods.price_min}}</span>
                            <span class="button">· · ·</span>
                        </div>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script>
    import moment from 'moment'

    const dayList = ['日', '一', '二', '三', '四', '五', '六']

    export default {
        filters: {
            date(v) {
                return moment(v).format('M月-D日')
            }
        },
        data() {
            return {
                list: [],
                week: [],
            }
        },
        methods: {
            calculateWeek() {
                const now = moment()
                // 今天的星期数
                const today = now.get('day')
                // 计算周天的日期
                const weekBeginDate = now.add(0 - now.get('day'), 'd')
                for (let i = 0; i < 7; i++) {
                    this.week.push({
                        day: dayList[i],
                        date: weekBeginDate.get('date'),
                        isToday: i === today
                    })
                    weekBeginDate.add(1, 'd')
                }
            },
            getFootprint() {
                this.$axios
                    .post('/mine/footprint')
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data) {
                                this.list = data.data
                            }
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            }
        },
        created() {
            this.getFootprint()
            this.calculateWeek()
        }
    }
</script>

<style scoped lang="scss">
    .suwis-footprint {
        min-height: 100vh;
        text-align: center;
        background: #efefef;
        .date-list {
            padding: 14px;
            display: flex;
            justify-content: space-between;
            .day {
                margin-bottom: 10px;
                color: #999;
                font-size: 12px;
                line-height: 16px;
            }
            .date {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                color: #333;
                line-height: 24px;
            }
            .today {
                background:linear-gradient(45deg,#f55c3c 0%,#f6603e 17%,#dd0b11 100%);
                color: #fff;
            }
        }
        .footprint-item {
            margin-top: 14px;
            padding: 0 14px;
            .title {
                line-height: 16px;
                color: #999;
                font-size: 12px;
                text-align: left;
            }
            .goods-list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin: 12px 0 0;
            }
            .goods-item {
                overflow: hidden;
                width: 28vw;
                margin-bottom: 10px;
                border-radius: 4px;
                .img {
                    display: block;
                    height: 30vw;
                    border: none;
                }
                .bottom-line {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 6px 12px;
                    background: #fff;
                }
                .price {
                    color: #e83f44;
                    font-size: 12px;
                }
                .button {
                    color: #999;
                    font-size: 16px;
                }
            }
        }
    }
</style>