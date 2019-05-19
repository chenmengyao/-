<template>
    <div class="suwis-address">
        <div class="button-line">
            <span class="button">新增地址</span>
        </div>
        <ul class="address-list">
            <li class="address-item">
                <img src="@/assets/uc/address@2x.png" alt="地址" class="address-icon">
                <div class="info">
                    <div class="info-title">
                        <div class="title-left">
                            <span class="name">周红娇</span>
                            <span class="tel">18062439108</span>
                            <span class="default">默认</span>
                        </div>
                        <div class="edit">编辑</div>
                    </div>
                    <div class="info-address">
                        湖北省武汉市洪山区东湖风景区街道鲁磨路宝迪通汽修服务中心3楼308
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            getAddresses() {
                this.$axios
                    .post('/user/alladdress')
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data) {

                            }
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            }
        },
        created() {
            this.getAddresses()
        }
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
                .edit {
                    color: #999;
                    font-size: 12px;
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
        }
    }

</style>