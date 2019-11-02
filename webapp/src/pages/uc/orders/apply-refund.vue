<template lang="html">
    <div class="suwis-apply-refund">
        <main class="content">
            <SimpleGood
                :name="goodInfo.goods_name"
                :desc="[goodInfo.header_one, goodInfo.header_two, goodInfo.header_three]"
                :store-logo="goodInfo.goods_img"
            ></SimpleGood>
            <ul class="list">
                <li class="item" v-if="goodInfo.num > 1">
                    <div class="name">退货数量</div>
                    <div class="value">
                        <van-stepper v-model="refundNum" :max="goodInfo.num"/>
                    </div>
                </li>
                <li class="item" @click="showReason">
                    <div class="name">{{type === 'exchange' ? '换货' : '退款'}}原因：</div>
                    <div class="value">
                        {{reason | reason}}
                        <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                    </div>
                </li>
                <li class="item" v-if="type === 'refund' || type === 'return'">
                    <div class="name">退款金额</div>
                    <div class="value">
                        <span class="color-red price">￥{{goodInfo.sum}}</span>
                    </div>
                </li>
                <li class="item address" v-if="type === 'exchange'" @click="selectAddress">
                    <div class="name">换货地址</div>
                    <div class="address-box">
                        <div class="address-top">
                            <span class="address-name">{{address.name}}</span>
                            <span class="address-tel">{{address.tel}}</span>
                        </div>
                        <div class="address">{{address | location}}</div>
                    </div>
                    <div class="value">
                        <van-icon name="arrow" size="10px" color="rgb(180, 180, 180)"/>
                    </div>
                </li>
                <li class="item remark">
                    <div class="name">{{type === 'exchange' ? '换货' : '退款'}}说明：</div>
                    <van-field
                        v-model="remark"
                        :placeholder="type === 'exchange' ? '请输入换货说明（选填）' : '请输入退款说明（选填）'"/>
                </li>
            </ul>

            <div class="card">
                <div class="title">
                    上传凭证
                    <span class="subtitle">（最多3张）</span>
                </div>
                <div class="upload-line">
                    <img v-for="(img, index) in imgList" :src="img" :key="img" class="image-item" @click="removeImg(index)">
                    <van-uploader :after-read="onRead" v-show="imgList.length < 3" accept="image/gif, image/jpeg" :max-size="maxSize" @oversize="oversize">
                        <div class="icon-line">
                            <van-icon name="photograph" size="24px" color="rgb(180, 180, 180)"/>
                        </div>
                        <div class="upload-text">添加图片</div>
                    </van-uploader>
                </div>
            </div>

            <div class="button-line">
                <div class="deploy" @click="submit">提交</div>
            </div>

        </main>

        <van-actionsheet v-model="statusShow" title="货物状态">
            <van-radio-group v-model="status">
                <van-cell-group>
                    <van-cell title="已收到货" clickable @click.native="changeStatus('1')">
                        <van-radio name="1"  @click.native="changeStatus('1')"/>
                    </van-cell>
                    <van-cell title="未收到货" clickable @click.native="changeStatus('2')">
                        <van-radio name="2"  @click.native="changeStatus('2')"/>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </van-actionsheet>

        <van-actionsheet v-model="reasonShow" title="退款原因">
            <van-radio-group v-model="reason">
                <van-cell-group>
                    <van-cell title="7天无理由退款" clickable @click.native="changeReason('1')">
                        <van-radio name="1" @click.native="changeReason('1')"/>
                    </van-cell>
                    <van-cell title="地址、商品信息填写错误" clickable @click.native="changeReason('2')">
                        <van-radio name="2" @click.native="changeReason('2')"/>
                    </van-cell>
                    <van-cell title="商家缺货" clickable @click.native="changeReason('3')">
                        <van-radio name="3" @click.native="changeReason('3')"/>
                    </van-cell>
                    <van-cell title="其他" clickable @click.native="changeReason('4')">
                        <van-radio name="4" @click.native="changeReason('4')"/>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </van-actionsheet>
    </div>
</template>

<script>
    import SimpleGood from '@/components/uc/orders/simple-good'

    const typeMap = {
        refund: '退款',
        return: '退货退款',
        exchange: '换货'
    }
    const reasonMap = {
        1: '7天无理由退款',
        2: '地址、商品信息填写错误',
        3: '商家缺货',
        4: '其他'
    }

    export default {
        components: {
            SimpleGood
        },
        filters: {
            goodsStatus(v) {
                const goodsStatus = {
                    1: '已收到货',
                    2: '未收到货'
                }
                return v ? goodsStatus[v] : '请选择'
            },
            location(v) {
                const province = v.province || ''
                const city = v.city || ''
                const area = v.area || ''
                const address = v.address || ''
                return (province + city + area + address) || '---'
            },
            reason(v) {
                return v ? reasonMap[v] : '请选择'
            }
        },
        data() {
            return {
                address: {},
                address_id: '',
                goodInfo: {},
                refundNum: 1,
                id: '',
                maxSize: 5 * 1024 * 1024,    // 上传图片的最大kb
                imgList: [],
                remark: '',
                reason: '',
                status: '',
                type: '',               // 售后类型
                reasonShow: false,
                statusShow: false
            }
        },
        methods: {
            changeReason(reason) {
                this.reason =reason
                this.reasonShow = false
            },
            changeStatus(status) {
                this.status = status
                this.statusShow = false
            },
            selectAddress() {
                const { id, type } = this
                this.$router.push({
                    path: '/uc/setting/address',
                    query: {
                        from: this.$route.path,
                        id,
                        type
                    }
                })
            },
            showReason() {
                this.reasonShow = true
            },
            showStatus() {
                this.statusShow = true
            },
            onRead(file) {
                if (this.imgList >= 5) {
                    this.$toast('最多只能上传5张图片')
                    return
                }
                const formData = new FormData()
                formData.append('file', file.file)
                this.$axios
                    .post('/index/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            if (data.data) this.imgList.push(data.data)
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            oversize() {
                const maxSize = Math.floor(this.maxSize / 1024 / 1024)
                this.$toast(`上传图片最大不能超过${maxSize}MB`)
            },
            removeImg(index) {
                this.$dialog
                    .confirm({
                        title: '移除图片',
                        message: '确定移除该图片吗'
                    })
                    .then(() => {
                        this.imgList.splice(index, 1)
                    })
            },
            submit() {
                if (!this.imgList.length) {
                    this.$toast('请至少上传一张图片凭证')
                    return
                }
                if (!this.reason) {
                    this.$toast('请选择原因')
                    return
                }
                this.$axios
                    .post('/order/aftersale', {
                        order_id: this.id,
                        type: typeMap[this.type],
                        reason: reasonMap[this.reason],
                        remark: this.remark,
                        num: this.refundNum,
                        address_id : this.type === 'exchange' ? this.address.id : undefined,
                        imgs: this.imgList
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            
                            this.$router.push({
                                path: '/uc/orders',
                                query: { type:'0000' }
                            })
                            this.$toast('已提交售后申请');
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            }
        },
        created() {
            this.id = this.$route.query.id
            this.type = this.$route.query.type
            this.address_id = this.$route.query.address_id
            this.$axios
                .post('/order/detail', {
                    id: this.id
                })
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) {
                            this.goodInfo = data.data
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })
            this.$axios
                .post('/user/alladdress')
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data) {
                            this.address = data.data.find(item => this.address_id ? item.id === +this.address_id : item.sta === 1)
                        }
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-apply-refund {
        position: relative;
        min-height: 100vh;
        padding-top: 50px;
        background-color: #f5f5f5;
        box-sizing: border-box;
        .content {
            background-color: #fff;
        }
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            border-bottom: 1px solid rgb(245, 245, 245);
            font-size: 14px;
            line-height: 24px;
            .value {
                color: rgb(153, 153, 153);
            }
            .color-red {
                color: #e83f44;
            }
            .price {
                margin-right: 15px;
            }
            .van-cell {
                flex: 1;
                padding: 0;
            }
            &.address {
                align-items: inherit;
            }
            .address-box {
                flex: 1;
                margin: 0 14px;
                color: #666;
                font-size: 12px;
                .address-top {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

        .card {
            padding: 14px;
            .title {
                margin-bottom: 10px;
                text-align: left;
            }
            .subtitle {
                color: rgb(153, 153, 153);
                font-size: 12px;
            }
        }

        .upload-line {
            padding: 0 16px 12px;
            text-align: left;
            display: flex;
            flex-wrap: wrap;
            .image-item, .van-uploader {
                width: 64px;
                height: 64px;
                margin-right: 10px;
                margin-bottom: 10px;
                border: 1px dashed rgb(136, 136, 136);
                text-align: center;
                color: rgb(180, 180, 180);
            }
            .icon-line {
                margin-top: 12px;
            }
            .upload-text {
                font-size: 12px;
            }
        }
        .button-line {
            position: absolute;
            width: 100%;
            bottom: 25px;
            .deploy {
                width:323px;
                height:45px;
                margin: 0 auto;
                background:linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
                border-radius:25px;
                color: #fff;
                cursor: pointer;
                font-size: 16px;
                line-height: 45px;
                text-align: center;
            }
        }

        .van-actionsheet {
            padding-bottom: 80px;
            .van-cell__title {
                text-align: left;
            }
        }

    }
</style>
