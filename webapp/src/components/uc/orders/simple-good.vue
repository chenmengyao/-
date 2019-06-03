<template>
    <div class="suwis-simple-good">
        <ul class="list">
            <li class="item" @click="toggleCheck">
                <img class="image" :src="storeLogo" v-lazy="storeLogo" alt="商品">
                <div class="info" :style="infoStyle">
                    <div class="name">{{name}}</div>
                    <template v-if="desc && desc.length">
                        <div class="desc">
                            <span v-for="item in desc" class="desc-item">{{item}}</span>
                        </div>
                    </template>

                </div>
                <div class="checkbox" v-if="hasCheckbox">
                    <van-checkbox v-model="checked" checked-color="#e83f44"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            name,
            desc: {
                type: Array,
                default: _ => [''],
            },
            storeLogo: {
                type: String,
            },
            hasCheckbox: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                checked: true,
                infoStyle: this.hasCheckbox ? { width: 'calc(100% - 88px)' } : { width: 'calc(100% - 48px)' }
            }
        },
        methods: {
            toggleCheck() {
                if (!this.hasCheckbox) return
                this.checked = !this.checked
            }
        }
    }
</script>

<style scoped lang="scss">
.suwis-simple-good {
    position: relative;
    margin: 0 15px;
    .list {
        transform: translateY(-50%);
        padding: 12px;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(232,63,68,0.17);
        border-radius: 4px;
    }
    .item {
        display: flex;
        align-items: center;
        .image {
            width: 36px;
            height: 36px;
            margin-right: 12px;
        }
        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .name {
            overflow: hidden;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
            text-align: left;
            white-space: nowrap;
        }
        .desc {
            min-height: 16px;
            margin-right: 8px;
            color: rgb(153, 153, 153);
            font-size: 12px;
            text-align: left;
            .desc-item {
                margin-right: 8px;
            }
        }
        .checkbox {
            margin-left: 20px;
        }
    }
}
</style>