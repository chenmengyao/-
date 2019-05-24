<template>
    <div class="suwis-score-discount">
        <van-cell-group class="score-box">
            <van-cell center value-class="cell-content">
                <template slot="title">
                    我的积分：113456分
                </template>
            </van-cell>
            <van-cell center value-class="cell-content">
                <template slot="title">
                    我的积分：113456分
                    <span style="color: #f0914b;font-size: 12px">￥20</span>
                </template>
            </van-cell>
            <van-field
                v-model="score"
                clearable
                label="本次使用："
                placeholder="请输入本次使用的积分数" />
            <div class="bottom-tip">*积分兑换公式：100积分=1元</div>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "score-decount",
        data() {
            return {
                score: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .suwis-score-discount {
        min-height: 100vh;
        background: #f5f5f5;
        box-sizing: border-box;
        font-size: 14px;
        .score-box {
            background: #fff;
        }
        .bottom-tip {
            padding: 8px 16px;
            color: #f0914b;
            font-size: 10px;
            text-align: right;
        }
    }

</style>