<template>
    <div class="suwis-after-sale">
        <ShopItem
            v-for="shop in shopList"
            :key="shop.name"
            :shop-data="shop"
            :show-price="false">
            <template #footer>
                <ButtonLine :button-list="shop.sta | buttonList"></ButtonLine>
            </template>
        </ShopItem>
    </div>
</template>

<script>
    import ShopItem from '@/components/uc/orders/shop-item'
    import ButtonLine from '@/components/uc/orders/button-line'

    const buttonMap = {
        afterSale: [
            {
                key: 'viewProgress',
                name: '查看进度',
                type: 'warning'
            }
        ]
    }

    export default {
        name: "after-sale",
        components: {
            ButtonLine,
            ShopItem
        },
        filters: {
            buttonList: v => buttonMap[v]
        },
        data() {
            return {
                shopList: [
                    {
                        store_name: '小锅米线',
                        sta: 'afterSale',
                    },
                    {
                        store_name: '土鸡米线',
                        sta: 'afterSale',
                    },
                    {
                        store_name: '汆肉米线',
                        sta: 'afterSale',
                    }
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    .suwis-after-sale {
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
    }
</style>