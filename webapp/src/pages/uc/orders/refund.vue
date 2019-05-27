<template>
    <div class="suwis-refund-list">
        <van-list
                v-model="loading"
                finished-text="没有订单记录了"
                error-text="请求失败，点击重新加载"
                :error.sync="error"
                :finished="finished"
                @load="getList">
            <template v-if="list && list.length">
                <ShopItem
                        v-for="shop in list"
                        :key="shop.id"
                        :shop-data="shop"
                        :goods-list="[shop]"
                        @on-click-item="onClickOrder">
                    <template #footer>
                        <ButtonLine
                                :button-list="shop.sta | buttonList"
                                :order-id="shop.id"
                                @on-click="onButtonClick"></ButtonLine>
                    </template>
                </ShopItem>
            </template>
        </van-list>
    </div>
</template>

<script>
    import ShopItem from '@/components/uc/orders/shop-item'
    import ButtonLine from '@/components/uc/orders/button-line'
    import ButtonMap from '@/constants/order/button-map'

    export default {
        components: {
            ButtonLine,
            ShopItem
        },
        filters: {
            buttonList: v => ButtonMap.filter(item => item.sta.includes(v))
        },
        data() {
            return {
                error: false,
                finished: false,
                list: [],
                loading: false,
                num: 20,            // 每页的数量
                page: 1,            // 页码
            }
        },
        methods: {
            getList() {
                const { num, page } = this
                this.$axios
                    .post('/order/index', {
                        sta: 3,
                        num,
                        page
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data && data.data.order) {
                                this.list = this.list.concat(data.data.order)
                                if (page * num > data.data.total) this.finished = true
                            }
                        } else {
                            this.error = true
                            this.$toast(data.msg);
                        }
                        this.page++
                        this.loading = false
                    })
                    .catch(() => {
                        this.error = true
                    })
            },
            onClickOrder(goods) {
                this.$router.push({
                    path: '/uc/orders/refund-details',
                    query: {id: goods.id}
                })
            },
            onButtonClick(key, orderId) {
                this.$router.push({
                    path: '/uc/orders/refund-details',
                    query: {id: orderId}
                })
            },

        }
    }
</script>

<style scoped lang="scss">
    .suwis-refund-list {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
    }
</style>