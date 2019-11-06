<template>
    <div class="suwis-setting">
        <van-cell title="会员头像" :clickable="true" :center="true" value-class="content" @click="modifyProfile">
            <template>
                <img :src="user.photo || require('../../../assets/login/avatar@3x.png')" alt="头像" class="profile">
                <van-icon name="arrow" size="10px" color="#b4b4b4" style="margin-left: 28px;"/>
            </template>
        </van-cell>
        <van-cell title="用户昵称" :clickable="true" :center="true" value-class="content" @click="modifyNickname">
            <template>
                {{user.name}}
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <van-cell title="我的二维码名片" :clickable="true" :center="true" value-class="content" v-if="user_type === 0 || user_type === 2" @click="barCodeScan">
            <template>
                <img src="@/assets/uc/qr-code-black@2x.png" alt="二维码" class="qr-code">
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <van-cell title="我的位置" :clickable="true" :center="true" value-class="content" @click="modifyLocation">
            <template>
                {{ user | address }}
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <van-cell title="我的收货地址" :center="true" value-class="content" to="/uc/setting/address">
            <van-icon name="arrow" size="10px" color="#b4b4b4"/>
        </van-cell>
        <van-cell title="登录密码" :center="true" value-class="content" to="/resetpwd">
            <template>
                修改
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <van-cell title="支付密码" :center="true" value-class="content" to="/resetpwd">
            <template>
                修改
                <van-icon name="arrow" size="10px" color="#b4b4b4"/>
            </template>
        </van-cell>
        <div class="login-out" @click="logout">退出当前账户</div>

        <!-- 上传头像弹框 -->
        <van-popup v-model="profileShow" :close-on-click-overlay="false" class="popup-custom popup-profile">
            <div class="popup-content">
                <img :src="profileUrl" alt="" class="popup-profile">
                <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" :max-size="maxSize" @oversize="oversize">
                    <div class="upload-text">更换头像</div>
                </van-uploader>
            </div>
            <div class="button-line">
                <button class="cancel" @click="closePopup">取消</button>
                <button class="confirm" @click="confirmPopup('profile')">确定</button>
            </div>
        </van-popup>
        <!-- 上传头像弹框 // -->

        <!-- 修改昵称弹框 -->
        <van-popup v-model="nameShow" :close-on-click-overlay="false" class="popup-custom popup-name">
            <div class="popup-content">
                <van-field v-model="name" placeholder="请输入昵称" />
            </div>
            <div class="button-line">
                <button class="cancel" @click="closePopup">取消</button>
                <button class="confirm" @click="confirmPopup('name')">确定</button>
            </div>
        </van-popup>
        <!-- 修改昵称弹框 // -->

        <!-- 扫描二维码 -->
        <BarCode :show="qrCodeShow" @close="closeBarCode" @success="scanSuccess"></BarCode>
        <!-- 扫描二维码 // -->

        <!-- 修改位置弹框 -->
        <van-popup v-model="locationShow" position="bottom" :close-on-click-overlay="false">
            <van-area :area-list="areaList" :value="locationValue" @confirm="confirmLocation" @cancel="closePopup"/>
        </van-popup>
        <!-- 修改位置弹框 // -->

    </div>
</template>

<script>
    import areaList from '@/constants/uc/address'
    import profile from '../../../assets/login/avatar@3x.png'
    import BarCode from '@/components/bar-code'

    export default {
        name: "setting",
        components: {
            BarCode
        },
        filters: {
            address(v) {
                return v.area ? v.province + v.city + v.area : '---'
            }
        },
        data() {
            return {
                areaList,
                name: '',       // 弹框昵称
                maxSize: 5 * 1024 * 1024,    // 上传图片的最大kb
                profileUrl: '',
                locationValue: '',
                profileShow: false,
                nameShow: false,
                locationShow: false,
                qrCodeShow: false,
                user: {},
                user_type: 0
            }
        },
        methods: {
            barCodeScan() {
                const { user_type } = this
                if (user_type === 0) {
                    this.qrCodeShow = true

                } else if (user_type === 2) {
                    this.$router.push({
                        path: '/uc/setting/card',
                    })
                }
            },
            closeBarCode() {
                this.qrCodeShow = false
            },
            closePopup() {
                this.profileUrl = ''
                this.name = ''
                this.province = ''
                this.city = ''
                this.area = ''
                this.locationValue = ''
                this.profileShow = false
                this.nameShow = false
                this.locationShow = false
            },
            confirmPopup(type) {
                let params = null
                switch (type) {
                    case 'profile':
                        params = {
                            photo: this.profileUrl
                        }
                        break
                    case 'name':
                        params = {
                            name: this.name
                        }
                        break
                    case 'location':
                        params = {
                            province: this.province,
                            city: this.city,
                            area: this.area
                        }
                        break
                }

                this.$axios
                    .post('/user/usersave', params)
                    .then(({ data }) => {
                        if (data.code === 1) {
                            data && Object.assign(this, data.data)
                            this.closePopup()
                            this.getUserInfo()
                            this.$toast('修改成功');
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            confirmLocation(data) {
                if (data) {
                    this.province = data[0].name
                    this.city = data[1].name
                    this.area = data[2].name
                }
                this.confirmPopup('location')
            },
            getUserInfo() {
                this.$axios
                    .post('/mine/index')
                    .then(({ data }) => {
                        if (data.code === 1) {
                            data && Object.assign(this, data.data)
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            logout() {
                this.$axios
                    .post('/login/outlogin')
                    .then(({ data }) => {
                        if (data.code === 1) {
                            this.$toast('退出成功');
                            this.$store.commit('core/exit')
                            this.$router.push('/login')
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            modifyLocation() {
                const { user } = this
                if (user.area) {
                    const countyList = areaList.county_list
                    this.locationValue = Object.keys(countyList).find(key => countyList[key] === user.area)
                }
                this.locationShow = true
            },
            modifyNickname() {
                this.name = this.user.name
                this.nameShow = true
            },
            modifyProfile() {
                this.profileUrl = this.user.photo || profile
                this.profileShow = true
            },
            onRead(file) {
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
                            if (data.data) this.profileUrl = data.data
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            oversize() {
                const maxSize = Math.floor(this.maxSize / 1024 / 1024)
                this.$toast(`上传图片最大不能超过${maxSize}MB`)
            },
            scanSuccess(codeUrl) {
                this.qrCodeShow = false
                this.$axios
                    .post('/user/captainqrcode', {
                        region_id: codeUrl
                    })
                    .then(({ data }) => {
                        if(data.code === 1) {
                            this.$toast('绑定成功')
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            }
        },
        created() {
            this.getUserInfo()
            
        },
         beforeRouteLeave (to, from, next) {
            this.qrCodeShow = false;
            next()
        }
    }
</script>

<style scoped lang="scss">
.suwis-setting {
    min-height: 100vh;
    background: #f5f5f5;
    box-sizing: border-box;
    font-size: 14px;
    .content {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        line-height: 24px;
        .profile {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .qr-code {
            width: 12px;
            height: 12px;
        }
        .van-icon-arrow {
            margin-left: 10px;
        }
    }
    .login-out {
        position: fixed;
        bottom: 0;
        width: 100%;
        height:45px;
        line-height: 45px;
        background:linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
        color: #fff;
        font-size: 14px;
        text-align: center;
    }

    .popup-custom {
        width: 320px;
        text-align: center;
        .popup-content {
            padding: 20px 24px;
        }
        .popup-profile {
            display: block;
            width: 80px;
            height: 80px;
            margin: 0 auto 10px;
            border-radius: 50%;
        }
        .van-field {
            background: #efefef;
        }
        .button-line {
            .cancel, .confirm {
                display: inline-block;
                width: 50%;
                height: 44px;
                padding: 0;
                border: none;
                background: #efefef;
            }
            .confirm {
                background: linear-gradient(54deg, #f55c3c 0%, #f6603e 17%, #dd0b11 100%);
                color: #fff;
            }
        }
    }

    .popup-profile {
        .upload-text {
            color: #409eff;
        }
    }

    .popup-qr-code {
        box-sizing: border-box;
        width: 320px;
        height: 180px;
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