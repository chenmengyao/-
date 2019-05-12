<template lang="html">
  <div class="suwis-updatepwd">
      <van-cell-group>
        <van-field v-model="test" placeholder="请输入您的11位手机号">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/phone@3x.png" alt="">
        </van-field>
        <van-field v-model="test" placeholder="请输入验证码">
          <img class="field-icon" style="margin-top:2.2px;" slot="left-icon"  src="@/assets/login/code@3x.png" alt="">
           <van-button class="send-code" slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
        <van-field v-model="test" placeholder="请输入登录名">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/user@3x.png" alt="">
        </van-field>
        <van-field v-model="test" placeholder="请输入8-16位登录密码">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/pwd@3x.png" alt="">
        </van-field>
        <van-field v-model="test" placeholder="请再次确认您的登录密码">
          <img class="field-icon" slot="left-icon"  src="@/assets/login/pwd@3x.png" alt="">
        </van-field>
    </van-cell-group>
    <van-button class="btn-submit" type="primary">确认修改</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.suwis-updatepwd {
    background: rgba(245,245,245,1);
    height: 100vh;

    .field-icon {
        width: 19px;
        display: block;
        margin-top: 1.6px;
    }

    .btn-submit {
        border-radius: 50px;
        width: calc(100% - 30px);
        margin: 5vw auto;
        position: absolute;
        bottom: 15px;
        left: 15px;
    }

    .van-tab__pane {
        padding-top: 6vw;
    }

    .send-code {
        background: transparent;
        color: #E83F44;
        border: none;
        height: 20px;
    }
}
</style>
