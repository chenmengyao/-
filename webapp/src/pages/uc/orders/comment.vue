<template lang="html">
    <div class="suwis-comment">
        <main class="content">
            <SimpleGood
                    :name="goodInfo.name"
                    :desc="goodInfo.desc"
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
                v-model="evaluate"
                type="textarea"
                placeholder="商品满足您的期待吗？说说你的使用心得，分享给想买的他们吧～"
                rows="3"
                autosize
            />
            <div class="upload-line">
                <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" :max-size="maxSize" @oversize="oversize">
                    <div class="icon-line">
                        <van-icon name="photograph" size="24px" color="rgb(180, 180, 180)"/>
                    </div>
                    <div class="upload-text">添加图片</div>
                </van-uploader>
                <van-uploader>
                    <div class="icon-line">
                        <van-icon name="live" size="24px" color="rgb(180, 180, 180)"/>
                    </div>
                    <div class="upload-text">添加视频</div>
                </van-uploader>
            </div>
            <div class="button-line">
                <div class="deploy">发布</div>
            </div>
        </main>
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
                goodInfo: {
                    name: '猫猫包袋女2019新款潮韩版时尚水桶复',
                    desc: ['黑色', '时尚款']
                },
                evaluate: '',
                evaluate_quality: 2.5,
                evaluate_serve: 3.5,
                evaluate_express: 4,
                maxSize: 500 * 1024
            }
        },
        methods: {
            onRead(file) {
                const formData = new FormData()
                formData.append('file', file.file)
                console.log(file)
                this.$axios
                    .post('/index/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(({ data }) => {
                        console.log(data)
                    })
            },
            oversize() {
                const maxSize = Math.floor(this.maxSize / 1024)
                this.$toast(`上传图片最大不能超过${maxSize}KB`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .suwis-comment {
        min-height: 100vh;
        padding-top: 50px;
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
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
            .van-uploader {
                width: 64px;
                height: 64px;
                margin-right: 10px;
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
            position: fixed;
            width: 100%;
            bottom: 25px;
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
