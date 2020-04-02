<template>
    <div class="suwis-card">
        <van-cell-group v-if="list.length">
            <van-cell :title="`${item.type} ： ${item.content}`" :clickable="true" :center="true" value-class="content" v-for="item in list" :key="item.id" @click="showBarCode(item.id)">
                <template>
                    生成二维码
                    <van-icon name="arrow" size="10px" color="#b4b4b4"/>
                </template>
            </van-cell>
        </van-cell-group>
        <div class="no-data" v-else>暂无数据</div>

        <!-- 二维码弹框 -->
        <van-popup v-model="qrCodeShow" :close-on-click-overlay="false" class="popup-qr-code">
            <div class="info-box">
                <img :src="user.photo || require('../../../assets/login/avatar@3x.png')" alt="头像" class="profile">
                <div class="info">
                    <span class="name">{{user.name}}</span>
                    <span class="address">{{user | address}}</span>
                </div>
                <img src="@/assets/uc/refresh@2x.png" alt="" class="refresh" @click="getQrCode">
            </div>
            <div class="img-box">
                <img :src="qrCodeImg" v-lazy="qrCodeImg" alt="" class="qr-code">
            </div>
            <div class="close" @click="closeBarCode">×</div>
        </van-popup>
        <!-- 二维码弹框 //-->
    </div>
</template>

<script>
    export default {
        name: "card",
        filters: {
            address(v) {
                return v.area ? v.province + v.city + v.area : '---'
            }
        },
        data() {
            return {
                list: [],
                qrCodeShow: false,
                qrCodeImg: '',
                region_id: '',
                user: {}
            }
        },
        methods: {
            closeBarCode() {
                this.region_id = ''
                this.qrCodeShow = false
            },
            getQrCode() {
                this.$axios
                    .post('/user/captainqrcode', {
                        region_id: this.region_id
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            this.qrCodeImg = data.data
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            showBarCode(id) {
                this.qrCodeShow = true
                this.region_id = id
                this.getQrCode()
            }
        },
        created() {
            this.$axios
                .post('/user/captainqrcodelist')
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) this.list = data.data
                    } else {
                        this.$toast(data.msg);
                    }
                })
            this.$axios
                .post('/mine/index')
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) {
                            Object.assign(this.user, data.data.user)
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>

<style scoped lang="scss">
.suwis-card {
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #f5f5f5;
    .content {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        line-height: 24px;
    }
    .no-data {
        color: #333;
        padding: 10px 0;
        background: #fff;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
    }

    .popup-qr-code {
        box-sizing: border-box;
        width: 320px;
        padding: 20px;
        border-radius: 4px;
        overflow: unset;
        .profile {
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }
        .info-box {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            .info {
                display: flex;
                flex: 1;
                margin-left: 10px;
                flex-direction: column;
                justify-content: space-between;
            }
            .name {
                color: #333;
            }
            .address {
                color: #999;
                font-size: 10px;
            }
            .refresh {
                width: 20px;
                height: 16px;
                margin-left: 10px;
            }
        }
        .img-box {
            text-align: center;
            .qr-code {
                width: 200px;
                height: 220px;
            }
        }


        .close {
            position: absolute;
            bottom: -70px;
            left: 50%;
            width: 38px;
            height: 38px;
            line-height: 36px;
            border: 1px solid #fff;
            border-radius: 50%;
            color: #fff;
            font-size: 36px;
            text-align: center;
            transform: translateX(-50%);
        }
    }

}
</style>