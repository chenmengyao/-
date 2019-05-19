<template>
    <div class="suwis-vip">
        <div class="info-box">
            <div class="tag">团队: 周红娇</div>
            <div class="info-line">
                <img src="@/assets/login/avatar@3x.png" alt="头像" class="profile">
                <div class="info-right">
                    <div class="name">
                        穿堂而过的风
                        <span class="level">
                            <img src="@/assets/myvip.png" alt="vip" class="vip">
                            LV.3
                        </span>
                    </div>
                    <div class="register-time">
                        2018-09-10注册VIP
                    </div>
                </div>
            </div>
        </div>

        <ul class="illustration">
            <li class="item">
                <div class="title">
                    <img src="@/assets/uc/vip@2x.png" alt="vip" class="icon">
                    VIP额度：5000
                </div>
                <p class="para">额度说明：VIP额度由对应团长发放额度，从注册VIP之日起满一年额度自动清零。VIP额度即为等额优惠券，购买商品时即可使用。</p>
            </li>

            <li class="item">
                <div class="title">
                    <img src="@/assets/uc/vip-level@2x.png" alt="vip" class="icon">
                    VIP等级
                </div>
                <p class="para">当前等级：LV.3</p>
                <p class="para">实际使用vip额度超出原有额度一倍时，VIP等级可以提升一级</p>
            </li>

            <li class="item">
                <div class="title">
                    <img src="@/assets/uc/vip-privilege@2x.png" alt="vip" class="icon">
                    VIP特权
                </div>
                <p class="para">①系统派发优惠券，购买平台商品时即可使用；</p>
                <p class="para">②部分商品可享受自动折扣；</p>
                <p class="para">③商品折扣和vip优惠券可以累加使用。</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .suwis-vip {
        min-height: 100vh;
        background-color: #fff;
        .info-box {
            position: relative;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            margin: 16px;
            padding: 16px 14px;
            background: url(../../../assets/uc/uc-bg-gold@2x.png) no-repeat;
            background-size: cover;
            border-radius: 4px;
            .tag {
                position: absolute;
                top: 0;
                right: 0;
                height: 24px;
                padding: 0 6px;
                background: url(../../../assets/uc/uc-bg-grouper@2x.png) no-repeat;
                background-size: cover;
                border-bottom-left-radius: 4px;
                color: #c7973a;
                font-size: 10px;
                line-height: 24px;
            }
            .info-line {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .profile {
                    box-sizing: border-box;
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                    border-radius: 50%;
                    border: 1px solid #fff;
                }
                .info-right {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 40px;
                    color: #fff;
                }
                .name {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;
                    font-size: 16px;
                }
                .level {
                    display: flex;
                    align-items: center;
                    height: 20px;
                    margin-left: 10px;
                    padding: 0 8px;
                    border-radius: 12px;
                    background: #fff;
                    color: #e3b156;
                    font-size: 12px;
                }
                .vip {
                    width: 18px;
                    height: 16px;
                    margin-right: 2px;
                }
                .register-time {
                    font-size: 10px;
                }
            }
        }
        .illustration {
            .item {
                padding: 14px 12px 16px;
                border-bottom: 1px solid #f5f5f5;
            }
            .title {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                .icon {
                    width: 18px;
                    height: 18px;
                    margin-right: 10px;
                    color: #333;
                    font-size: 16px
                }
            }
            .para {
                margin: 0;
                color: #999;
                font-size: 14px;
                line-height: 24px;
            }
        }
    }

</style>