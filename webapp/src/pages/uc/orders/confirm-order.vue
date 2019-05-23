<template>
    <div class="suwis-confirm-order">
        <van-cell-group class="address">
            <van-cell title="收货人：胡然（18062439081）" />
            <van-cell title-class="cell-flex">
                <template slot="title">
                    收地址：湖北省武汉市洪山区光谷大道光谷现代世贸中心I栋1102
                    <van-icon name="arrow" size="10px" color="#b4b4b4" style="margin-left: 28px;"/>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        created() {
            // this.
        }
    }
</script>

<style scoped lang="scss">
    .suwis-confirm-order {
        min-height: 100vh;
        background: #f5f5f5;
        box-sizing: border-box;
        font-size: 14px;
        .address {
            margin-bottom: 6px;
            padding-bottom: 4px;
            background: url(../../../assets/orders/address-border@2x.png) bottom left no-repeat;
            -webkit-background-size: cover;
            background-size: contain;
        }
        .cell-flex {
            display: flex;
            justify-content: space-between;
        }
        .van-icon {
            line-height: 24px;

        }
    }
</style>