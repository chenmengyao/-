<template>
    <div class="suwis-address">
        <div class="button-line">
            <router-link class="link" to="/uc/setting/handleAddress">新增地址</router-link>
        </div>
        <ul class="address-list">
            <li class="address-item" v-for="item in list" :key="item.id">
                <img src="@/assets/uc/address@2x.png" alt="地址" class="address-icon">
                <div class="info" @click="onAddressClick(item.id)">
                    <div class="info-title">
                        <div class="title-left">
                            <span class="name">{{item.name}}</span>
                            <span class="tel">{{item.tel}}</span>
                            <span class="default" v-if="item.sta === 1">默认</span>
                        </div>
                    </div>
                    <div class="info-address">
                        {{item | address}}
                    </div>
                </div>
                <div class="edit" @click="edit(item.id)">编辑</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        filters: {
            address(v) {
                return v.province + v.city + v.area + v.address
            }
        },
        data() {
            return {
                list: [],
                query: {
                    from: '',   // 页面的来源
                    num: '',
                    stand_id: ''
                }
            }
        },
        methods: {
            edit(id) {
                this.$router.push({
                    path: '/uc/setting/handleAddress',
                    query: { id }
                })
            },
            getAddresses() {
                this.$axios
                    .post('/user/alladdress')
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data) {
                                this.list = data.data
                            }
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            onAddressClick(id) {
                const { from, num, stand_id } = this.query
                if (from === 'confirm-order') {
                    this.$router.push({
                        path: '/uc/orders/confirm-order',
                        query: {
                            addressId: id,
                            num,
                            stand_id
                        }
                    })
                }
            }
        },
        created() {
            this.getAddresses()
            Object.assign(this.query, this.$route.query)
        },
    }
</script>

<style scoped lang="scss">
    .suwis-address {
        min-height: 100vh;
        color: #333;
        .button-line {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 10px 14px;
            border-bottom: 1px solid #f5f5f5;
            font-size: 14px;
            line-height: 24px;
            .link {
                color: inherit;
            }
        }
        .address-item {
            display: flex;
            align-items: center;
            padding: 16px 14px;
            border-bottom: 1px solid #f5f5f5;
            .address-icon {
                width: 28px;
                height: 28px;
                margin-right: 10px;
            }
            .info {
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: space-between;
                cursor: pointer;
            }
            .info-title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 10px;
                .name {
                    margin-right: 10px;
                    font-size: 16px;
                }
                .tel {
                    margin-right: 18px;
                    color: #999;
                    font-size: 12px;
                }
                .default {
                    display: inline-block;
                    width: 36px;
                    height: 18px;
                    border: 1px solid #cb4660;
                    border-radius: 10px;
                    color: #cb4660;
                    font-size: 14px;
                    line-height: 18px;
                    text-align: center;
                }
            }
            .info-address {
                display: -webkit-box;
                overflow: hidden;
                min-height: 48px;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 14px;
                line-height: 24px;
                -ms-text-overflow: ellipsis;
                text-overflow: ellipsis;
            }
            .edit {
                padding: 0 6px 0 12px;
                border-left: 1px solid #ddd;
                color: #999;
                font-size: 12px;
                line-height: 32px;
            }
        }
    }

</style>