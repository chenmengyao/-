<template>
    <van-address-edit
        ref="address"
        show-postal
        :address-info="addressInfo"
        :area-list="areaList"
        show-set-default
        :validator="validate"
        @save="onSave"
    />
</template>

<script>
    import areaList from '@/constants/uc/address'

    export default {
        data() {
            return {
                areaList,
                addressInfo: {
                    name: '',
                    tel: '',
                    province: '',
                    city: '',
                    content: '',
                    postalCode: '',
                    areaCode: '',
                    addressDetail: '',
                    isDefault: true  // 0 非默认，1 默认
                },
                id: '',
                query: {}
            }
        },
        methods: {
            onSave(content) {
                const { name, tel, province, city, county, addressDetail, postalCode, isDefault } = content
                this.$axios
                    .post('/user/saveaddress', {
                        id: this.id,
                        name,
                        tel,
                        province,
                        city,
                        area: county,
                        address: addressDetail,
                        postcode: postalCode,
                        sta: +isDefault
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            const tip = this.id ? '创建成功' : '修改成功'
                            this.$toast(tip);
                            if (this.query.from) {
                                this.$router.go(-1)
                            }else {
                                 this.$router.go(-1)
                                // this.$router.replace('/uc/setting/address')
                            }
                            
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            },
            validate(key, value) {
                if (key === 'postalCode' && !value) return '请填写邮政编码'
            }
        },
        created() {
            Object.assign(this.query, this.$route.query)
            this.id = this.$route.query.id
            if (this.id) {
                this.$axios.
                    post('/user/address', {
                        id: this.id
                    })
                    .then(({ data }) => {
                        if (data.code === 1) {
                            let res = data.data
                            if (res) {
                                const { addressInfo } = this
                                const countyList = areaList.county_list
                                const areaCode = Object.keys(countyList).find(key => countyList[key] === res.area)
                                addressInfo.name = res.name
                                addressInfo.tel = res.tel
                                addressInfo.areaCode = areaCode
                                addressInfo.addressDetail = res.address
                                addressInfo.postalCode = res.postcode
                                addressInfo.isDefault = Boolean(res.sta)
                            }
                        } else {
                            this.$toast(data.msg);
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>