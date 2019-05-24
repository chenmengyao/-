<template>
    <div class="suwis-score-discount">
        <van-cell-group class="score-box">
            <van-cell center value-class="cell-content">
                <template slot="title">
                    我的积分：113456分
                    <span style="color: #e83f44">￥20</span>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "score-decount"
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
    }

</style>