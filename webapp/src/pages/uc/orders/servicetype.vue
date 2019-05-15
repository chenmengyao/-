<template lang="html">
    <div class="suwis-service-type">
        <main class="content">
            <SimpleGood
                :name="goodInfo.name"
                :desc="goodInfo.desc"
            ></SimpleGood>
            <ul class="type-list">
                <router-link class="type-item" to="/uc/orders" tag="li">
                    <div class="title-line">
                        <img src="@/assets/orders/refund@2x.png" class="type-icon" alt="退款">
                        仅退款
                    </div>
                    <div class="desc">未收到货（含未签收）或卖家协商同意的前提下</div>
                </router-link>
                <router-link class="type-item" to="" tag="li">
                    <div class="title-line">
                        <img src="@/assets/orders/refund&exchange@2x.png" class="type-icon" alt="退货退款">
                        退货退款
                    </div>
                    <div class="desc">已收到货，需要退换已收到的货物</div>
                </router-link>
                <router-link class="type-item" to="" tag="li">
                    <div class="title-line">
                        <img src="@/assets/orders/exchange@2x.png" class="type-icon" alt="换货">
                        换货
                    </div>
                    <div class="desc">已收到货，需要更换已收到的货物</div>
                </router-link>
            </ul>
        </main>
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
                goodInfo: {
                    name: '猫猫包袋女2019新款潮韩版时尚水桶复',
                    desc: ['黑色', '时尚款']
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-service-type {
        min-height: 100vh;
        padding-top: 50px;
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
        .content {
            background-color: #fff;
        }
        .type-list {
            .type-item {
                padding: 12px;
                border-bottom: 1px solid rgb(245, 245, 245);
            }
            .title-line {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
            }
            .type-icon {
                width: 18px;
                height: 18px;
                margin-right: 8px;
            }
            .desc {
                margin-left: 26px;
                color: rgb(153,153,153);
                font-size: 12px;
                text-align: left;
            }
        }
    }
</style>
