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
                <OrderCard
                        v-for="order in list"
                        :key="order.id"
                        :order-data="order"
                        @click="onClickStore">
                    <GoodsItem :goods-list="[order]" @click="onClickGoods"></GoodsItem>
                    <template #footer>
                        <ButtonLine
                                :button-list="order.sta | buttonList"
                                :order-id="order.id"
                                @on-click="onButtonClick"></ButtonLine>
                    </template>
                </OrderCard>
            </template>
        </van-list>
    </div>
</template>

<script>
    import OrderCard from '@/components/uc/orders/order-card'
    import GoodsItem from '@/components/uc/orders/goods-item'
    import ButtonLine from '@/components/uc/orders/button-line'
    import ButtonMap from '@/constants/order/button-map'

    export default {
        components: {
            ButtonLine,
            GoodsItem,
            OrderCard
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
            onClickGoods(goods) {
                this.$router.push({
                    path: '/uc/orders/refund-details',
                    query: {id: goods.id}
                })
            },
            onClickStore(store) {
                this.$router.push({
                    path: '/shop',
                    query: {id: store.store_id}
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