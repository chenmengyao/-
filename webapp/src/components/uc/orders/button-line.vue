<template>
    <div class="suwis-button-line">
        <van-button
            plain
            round
            size="small"
            v-for="button in buttonList"
            :key="button.key"
            :type="button.type" >{{button.name}}
        </van-button>
    </div>
</template>

<script>
    export default {
        props: {
            buttonList: Array,
            default: []
        }
    }
</script>

<style scoped lang="scss">
.suwis-button-line {
    text-align: right;
    .van-button {
        margin-left: 10px;
    }
}
</style>