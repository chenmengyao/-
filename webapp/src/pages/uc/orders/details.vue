<template lang="html">
    <div class="suwis-order-detail">
        <!-- 商品卡片 -->
        <ShopItem
            :shop-data="shopData"
            :show-price="false"
        ></ShopItem>
        <!-- 商品卡片 //-->

        <!-- 地址卡片 -->
        <div class="card card-address">
            <img src="@/assets/orders/address@2x.png" alt="地址" class="image-address">
            <div class="info">
                <div class="user">
                    <span class="name">{{name}}</span>
                    <span class="tel">{{tel}}</span>
                </div>
                <div class="address">{{address}}</div>
            </div>
        </div>
        <!-- 地址卡片 //-->

        <!-- 价格卡片 -->
        <div class="card card-price">
            <div class="card-row row-light-grey">
                <span class="row-key">商品总价</span>
                <span class="row-value text-right">￥ 192</span>
            </div>

            <div class="card-row row-light-grey">
                <span class="row-key">运费</span>
                <span class="row-value text-right">￥ 192</span>
            </div>

            <div class="card-row">
                <span class="row-key">订单总价</span>
                <span class="row-value text-right">￥ 192</span>
            </div>

            <div class="card-row">
                <span class="row-key">实际付款</span>
                <span class="row-value text-right color-red">￥ 192</span>
            </div>
        </div>
        <!-- 价格卡片 //-->

        <!-- 订单信息卡片 -->
        <div class="card card-order">
            <h5 class="card-title">订单信息</h5>
            <div class="card-row">
                <span class="row-key">商品总价</span>
                <span class="row-value">20190122123456789</span>
            </div>
            <div class="card-row">
                <span class="row-key">交易编号</span>
                <span class="row-value">2019030122001176611018461640</span>
            </div>
            <div class="card-row">
                <span class="row-key">获得积分</span>
                <span class="row-value">192</span>
            </div>
            <div class="card-row">
                <span class="row-key">下单时间</span>
                <span class="row-value">2019-03-05 12:09</span>
            </div>
            <div class="card-row">
                <span class="row-key">付款时间</span>
                <span class="row-value">2019-03-05 12:09</span>
            </div>
            <div class="card-row">
                <span class="row-key">发货时间</span>
                <span class="row-value">2019-03-05 12:09</span>
            </div>
            <div class="card-row">
                <span class="row-key">成交时间</span>
                <span class="row-value">2019-03-05 12:09</span>
            </div>
            <div class="card-row row-button">
                <div class="button-item">
                    <img class="image-button" src="@/assets/orders/message@2x.png" alt="联系商家">
                    联系商家
                </div>
                <div class="button-item">
                    <img class="image-button" src="@/assets/orders/telephone@2x.png" alt="联系平台">
                    联系平台
                </div>
            </div>
        </div>
        <!-- 订单信息卡片 //-->

        <!-- 按钮卡片 -->
        <div class="card card-button">
            <ButtonLine :button-list="buttonList"></ButtonLine>
        </div>
        <!-- 按钮卡片 //-->
    </div>
</template>

<script>
    import ShopItem from '@/components/uc/orders/shop-item'
    import ButtonLine from '@/components/uc/orders/button-line'

    export default {
        components: {
            ShopItem,
            ButtonLine
        },
        data() {
            return {
                address: '湖北省武汉市洪山区东湖风景区街道鲁磨路宝迪通 汽修服务中心3楼308',
                buttonList: [
                    {
                        key: 'viewLogistics',
                        name: '查看物流',
                        type: 'default'
                    },
                    {
                        key: 'evaluate',
                        name: '评价',
                        type: 'warning'
                    }
                ],
                name: '齐天大圣',
                shopData: {
                    store_name: '小锅米线',
                    sta: 'toPay',
                    num: 7,
                    goods_price: 793
                },
                tel: 13712341234
            }
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-order-detail {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
        color: rgb(51, 51, 51);
        text-align: left;
        .card {
            margin-bottom: 8px;
            padding: 16px 12px;
            background-color: #fff;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .card-address {
            display: flex;
            align-items: center;
            .image-address {
                width: 28px;
                height: 28px;
                margin-right: 10px;
            }
            .info {
                flex: 1;
            }
            .user {
                margin-bottom: 10px;
                line-height: 24px;
            }
            .name {
                margin-right: 10px;
                font-size: 16px;
            }
            .tel {
                font-size: 12px;
                color: rgb(153, 153, 153)
            }
            .address {
                line-height: 24px;
            }
        }
        .card-row {
            display: flex;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
            &.row-light-grey {
                color: rgb(153, 153, 153);
                font-size: 12px;
            }
            .text-right {
                text-align: right;
            }
            .color-red {
                color: rgb(232, 63, 68);
            }

        }
        .card-price .card-row {
            justify-content: space-between;
        }
        .card-order {
            .card-row {
                color: rgb(102, 102, 102);
                font-size: 12px;
                &.row-button {
                    justify-content: space-around;
                    margin-top: 16px;
                }
                .button-item {
                    display: flex;
                    align-content: center;
                    cursor: pointer;
                }
                .image-button {
                    width: 16px;
                    height: 16px;
                    margin-right: 8px;
                }
            }
            .row-key {
                width: 48px;
                margin-right: 16px;
            }
        }
        .card-title {
            margin: 0 0 16px;
            font-size: 16px;
            font-weight: normal;
        }
    }
</style>
