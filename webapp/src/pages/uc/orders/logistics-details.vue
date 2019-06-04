<template lang="html">
    <div class="suwis-logistics-details">
        <div class="map-box"></div>
        <SimpleGood
            :name="goodInfo.title"
            :desc="[goodInfo.header_one, goodInfo.header_two, goodInfo.header_three]"
            :store-logo="goodInfo.img"
        ></SimpleGood>
        <div class="logistics-box">
            <div class="order-info">
                <div class="title">
                    <img src="@/assets/orders/car@2x.png" class="icon">
                    物流动态
                </div>
                <ul class="logistics-info">
                    <li class="logistics-item">订单编号：{{logisticsInfo.EBusinessID}}</li>
                    <li class="logistics-item">物流单号：{{logisticsInfo.LogisticCode}}</li>
                </ul>
            </div>
            <van-steps direction="vertical" :active="0">
            <van-icon slot="inactive-icon" name="success"/>
            <van-step>
                <div class="step-box">
                    <div class="top-bar">
                        <span class="status">物流状态1</span>
                        <span>2016-07-12 12:40</span>
                    </div>
                    <div class="detail">描述信息</div>
                </div>
            </van-step>
            <van-step>
                <div class="top-bar">【城市】物流状态1</div>
                <div class="detail">2016-07-12 12:40</div>
            </van-step>
            <van-step>
                <div class="top-bar">【城市】物流状态1</div>
                <div class="detail">2016-07-12 12:40</div>
            </van-step>
        </van-steps>
        </div>
    </div>
</template>

<script>
    import SimpleGood from '@/components/uc/orders/simple-good'


    export default {
        components: {
            SimpleGood
        },
        computed: {
            traces() {
                const result = this.logisticsInfo.Traces || []
                return result.revers()
            }
        },
        data() {
            return {
                goodInfo: {},
                logisticsInfo: [],
                order_id: ''
            }
        },
        created() {
            this.order_id = this.$route.query.id
            this.$axios
                .post('/order/checkthelogistics', {
                    order_id: this.order_id
                })
                .then(({data}) => {
                    if (data.code === 1) {
                        if (data.data) {
                            this.goodInfo = data.data.goods
                            this.logisticsInfo = data.data.logistics
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>
<style lang="scss">
.suwis-logistics-details {
    .van-steps {
        text-indent: 10px;
        .van-icon-checked, .van-step__circle {
            &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -4px;
            width: 18px;
            height: 18px;
            background: url("../../../assets/orders/red-right@2x.png") center center;
            background-size: cover; 
            border-radius: 50%;
            line-height: 18px;
            text-align: center;
            }
        }
        .van-step__circle {
            background: transparent;
            &::before {
            top: -6px;
            left: -6px;
            background: url("../../../assets/orders/right@2x.png") center center;
            background-size: cover; 
            }
        }
    }
}
</style>


<style lang="scss" scoped>
    .suwis-logistics-details {
        position: relative;
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
        color: #333;
        font-size: 14px;
        .map-box {
            height: 150px;
            background: #fff;
        }
        .logistics-box {
            position: absolute;
            top: 190px;
            bottom: 18px;
            box-sizing: border-box;
            width: calc(100% - 30px); // 减去margin的宽度
            margin: 0 15px;
            padding: 16px 12px;
            background: #fff;
            border-radius: 4px;
            .title {
                display: flex;
                align-items: center;
                .icon {
                    width: 22px;
                    height: 16px;
                    margin-right: 10px;
                }
            }
            .logistics-info {
                color: #999;
                padding-left: 18px;
                margin-top: 6px;
                font-size: 12px;
                line-height: 24px;
                list-style: disc;
                text-decoration: dotted;
            }
        }
        .step-box {
            color: #999;
            font-size: 10px;
            line-height: 20px;
            .top-bar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6px;
                .status {
                    color: #333;
                    font-size: 14px
                }
            }
            .van-icon {
                font-size: 20px
            }
        }
    }
</style>
