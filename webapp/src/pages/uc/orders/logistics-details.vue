<template lang="html">
    <div class="suwis-logistics-details">
        <div class="map-box"></div>
        <SimpleGood
            :name="goodInfo.goods_name"
            :desc="goodInfo.desc"
            :store-logo="goodInfo.goods_img"
        ></SimpleGood>
        <div class="logistics-box">
            <div class="order-info">
                <div class="title">
                    <img src="@/assets/orders/car@2x.png" class="icon">
                    物流动态
                </div>
                <ul class="logistics-info">
                    <li class="logistics-item">订单编号：20190122123456789</li>
                    <li class="logistics-item">物流单号：20190122123456789</li>
                </ul>
            </div>
        </div>
        <van-steps direction="vertical" :active="0" active-color="#f6603e">
            <van-step>
                <div>【城市】物流状态1</div>
                <div>2016-07-12 12:40</div>
            </van-step>
            <van-step>
                <div>【城市】物流状态2</div>
                <div>2016-07-11 10:00</div>
            </van-step>
            <van-step>
                <div>快件已发货</div>
                <div>2016-07-10 09:30</div>
            </van-step>
        </van-steps>
    </div>
</template>

<script>
    import SimpleGood from '@/components/uc/orders/simple-good'


    export default {
        components: {
            SimpleGood
        },
        data() {
            return {
                goodInfo: {},
                logisticsInfo: [],
                order_id: ''
        }
        },
        created() {
            this.order_id = this.$route.query.order_id
            this.$axios
                .post('/order/checkthelogistics', {
                    order_id: this.order_id
                })
                .then(({data}) => {
                    if (data.code === 1) {
                        if (data.data) {
                            this.logisticsInfo = data.data
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-logistics-details {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
        color: #333;
        font-size: 14px;
        .map-box {
            height: 150px;
            background: #fff;
        }
        .logistics-box {
            padding: 16px 12px;
            background: #fff;
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
    }
</style>
