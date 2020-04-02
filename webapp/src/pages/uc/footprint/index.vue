<template>
    <div class="suwis-footprint">
        <ul class="date-list">
            <li class="date-item" v-for="item in week" :key="item.day">
                <div class="day">{{item.day}}</div>
                <div class="date" v-scroll-to="{element:`#goo${item.date}`,offset:-100}" @click="onChangeDay(item)" :class="{today: item.isToday}">{{item.date}}</div>
            </li>
        </ul>
        <template v-for="(item, index) in list">
            <div class="footprint-item" :id="item[0].time | date2" v-if="item.length" :key="index">
                <div class="title" >{{item[0].time | date}}</div>
                <ul class="goods-list">
                    <li class="goods-item" v-for="goods in item" :key="goods.time" @click="onClick(goods)">
                        <img :src="goods.img" v-lazy="goods.img" class="img">
                        <div class="bottom-line">
                            <span class="price">￥{{goods.price_min}}</span>
                            <span class="button">···</span>
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
                return moment(v * 1000).format('M月D日')
            },
            date2(v){
                return 'goo'+moment(v * 1000).format('D')
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
                        isToday: i === today,
                        index:i
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
            },
            onChangeDay(list){
                const now = moment()
                // 今天的星期数
                const today = now.get('day')
                if(today<list.index){
                    return
                }
                this.week.forEach(element => {
                    element.isToday=false;
                    if(element.date===list.date){
                        element.isToday=true;
                    }
                });
            },
            onClick(goods) {
                this.$router.push({
                    path: '/goods/details',
                    query: {
                    id: goods.goods_id
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
        padding-top: 78px;
        text-align: center;
        background: #efefef;
        .date-list {
            padding: 14px;
            display: flex;
            justify-content: space-between;
            position: fixed;
            width: 100%;
            box-sizing: border-box;
            background: #efefef;
            top:0;
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
                flex-wrap: wrap;
                margin: 12px 0 0;
            }
            .goods-item {
                overflow: hidden;
                width: 32%;
                margin: 0 2% 10px 0;
                border-radius: 4px;
                &:nth-child(3n) {
                    margin-right: 0;
                }
                .img {
                    display: block;
                    width: 100%;
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