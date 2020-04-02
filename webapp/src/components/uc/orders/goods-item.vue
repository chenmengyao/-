<template>
    <div v-if="goodsList.length">
        <div class="suwis-goods-item"
             v-for="goods in goodsList"
             :key="goods.goods_id">
            <img :src="goods.goods_img" v-lazy="goods.goods_img" class="img" @click="onClick(goods)">
            <div class="center">
                <div class="title" @click="onClick(goods)">{{goods.goods_name}}</div>
                <div class="desc-line">
                    <div class="desc-item" v-if="goods.header_one">{{goods.header_one}}</div>
                    <div class="desc-item" v-if="goods.header_two">{{goods.header_two}}</div>
                    <div class="desc-item" v-if="goods.header_three">{{goods.header_three}}</div>
                </div>
                <div class="tag-line" v-if="goods.is7 === 'true'">
                    <span class="tag">7天无理由退款</span>
                </div>
            </div>
            <div class="right">
                <div class="price" v-if='goods.goods_price'>￥{{goods.goods_price}}</div>
                <div class="num" v-if="goods.num">×{{goods.num}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            goodsList: {
                type: Array,
                default: () => []
            },
        },
        methods: {
            onClick(goods) {
                this.$emit('click', goods)
            }
        }
    }
</script>

<style scoped lang="scss">
    .suwis-goods-item {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        margin-top: 16px;
        .img {
            width: 80px;
            height: 80px;
            border-radius:4px;
        }
        .center {
            flex: 1;
            margin-left: 16px;
            .title {
                overflow: hidden;
                display: -webkit-box;
                height: 40px;
                font-size: 14px;
                line-height: 20px;
                word-break: break-all;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                -ms-text-overflow: ellipsis;
                text-overflow: ellipsis;
            }
            .desc-line {
                display: flex;
                word-break: break-all;
                margin-bottom: 8px;
                color: #999;
                font-size: 10px;
                line-height: 14px;
                .desc-item {
                    margin: 0 4px
                }
            }
            .tag-line {
                color: #f0914b;
                line-height: 1;
                .tag {
                    display: inline-block;
                    padding: 3px 4px;
                    background: rgba(240,145,75,.15);
                    border-radius: 2px;
                    font-size: 10px;
                }
            }
        }
        .right {
            margin-left: 8px;
            color: #999;
            font-size: 12px;
            line-height: 20px;
            text-align: right;
        }
    }
</style>