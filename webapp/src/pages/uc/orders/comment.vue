<template lang="html">
    <div class="suwis-comment" ref='heig'>
        <div class='content-div'>
            <main class="content">
                <SimpleGood
                    :name="detail.goods_name"
                    :desc="[detail.header_one, detail.header_two, detail.header_three]"
                    :store-logo="detail.goods_img"
                ></SimpleGood>
                <ul class="comment-list">
                    <li class="comment-item">
                        <div class="name">商品品质</div>
                        <van-rate
                            v-model="evaluate_quality"
                            :size="24"
                            class="comment"
                            color="#f0914b"
                            void-icon="star"
                            void-color="#c9c8c8"/>
                    </li>
                    <li class="comment-item">
                        <div class="name">商家服务</div>
                        <van-rate
                            v-model="evaluate_serve"
                            :size="24"
                            class="comment"
                            color="#f0914b"
                            void-icon="star"
                            void-color="#c9c8c8"/>
                    </li>
                    <li class="comment-item">
                        <div class="name">快递评价</div>
                        <van-rate
                            v-model="evaluate_express"
                            :size="24"
                            class="comment"
                            color="#f0914b"
                            void-icon="star"
                            void-color="#c9c8c8"/>
                    </li>
                </ul>
                <van-field
                    v-model.trim="evaluate"
                    type="textarea"
                    placeholder="商品满足您的期待吗？说说你的使用心得，分享给想买的他们吧～"
                    rows="3"
                    autosize
                />
                <div class="upload-line">
                    <img v-for="(img, index) in imgList" :src="img" :key="img" class="image-item" @click="removeImg(index)">
                    <van-uploader :after-read="onRead" v-show="imgList.length < 5" accept="image/gif, image/jpeg" :max-size="maxSize" @oversize="oversize">
                        <div class="icon-line">
                            <van-icon name="photograph" size="24px" color="rgb(180, 180, 180)"/>
                        </div>
                        <div class="upload-text">添加图片</div>
                    </van-uploader>
                    <!--<van-uploader>-->
                        <!--<div class="icon-line">-->
                            <!--<van-icon name="live" size="24px" color="rgb(180, 180, 180)"/>-->
                        <!--</div>-->
                        <!--<div class="upload-text">添加视频</div>-->
                    <!--</van-uploader>-->
                </div>
                
            </main>
        </div>
        <footer class="button-line">
            <div class="deploy" @click="submit">发布</div>
        </footer>
    </div>
</template>

<script>
    import SimpleGood from '@/components/uc/orders/simple-good'

    export default {
        components: {
            SimpleGood
        },
        data() {
            return {
                detail: {},
                evaluate: '',
                evaluate_quality: 5,
                evaluate_serve: 5,
                evaluate_express: 5,
                maxSize: 5 * 1024 * 1024,    // 上传图片的最大kb
                imgList: [],
                orderId: '',
                clientHeight: '0px'
            }
        },
        mounted(){
            this.$refs.heig.style.height=`${document.documentElement.clientHeight}px`
        },
        methods: {
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
                const { orderId, evaluate, evaluate_quality, evaluate_serve, evaluate_express, imgList } = this
                this.$axios
                    .post('/order/evaluate', {
                        order_id: orderId,
                        evaluate,
                        evaluate_quality,
                        evaluate_serve,
                        evaluate_express,
                        evaluate_img: imgList
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            this.$toast('发布成功')
                            this.$router.push({
                                path: '/uc/orders',
                                query: {
                                    activeTabIndex: 2,
                                    type:'0000'
                                }
                            })
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            }
        },
        created() {
            this.orderId = this.$route.query.id;
            // this.$refs.heig.style.height=`${document.body.clientHeight}px`
            // this.clientHeight = `${document.body.clientHeight}px`
            this.$axios
                .post('/order/detail', {
                    id: this.orderId
                })
                .then(({ data }) => {
                    if (data.code === 1) {
                        if (data.data)
                            this.detail = data.data
                    } else {
                        this.$toast(data.msg);
                    }
                })
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-comment {
        min-height: 100vh;
        height: 100vh;
        padding-top: 50px;
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
        .content-div{
            height: calc(100% - 70px);
        }
        .content {
            background-color: #fff;
        }
        .comment-item {
            display: flex;
            align-items: center;
            padding: 10px 14px;
            border-bottom: 1px solid rgb(245, 245, 245);
            line-height: 24px;
            .name {
                margin-right: 30px;
            }
            .comment {
                height: 24px;
            }
        }
        .van-cell {
            padding: 16px 20px;
            font-size: 12px;
            &::after {
                border: none;
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
            // position: fixed;
            width: 100%;
            margin-bottom: 25px;
            text-align: center;
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
            }
        }
    }
</style>
