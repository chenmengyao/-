<template>
<van-actionsheet v-model="popupShow"
  title="确认付款"
  :close-on-click-overlay="false"
  @cancel="cancel">
	<van-cell-group>
		<van-cell title="请选择付款方式"></van-cell>
		<van-radio-group v-model="payType"
		  @change="select">
			<van-radio v-for="pay in typeList"
			  :name="pay.key"
			  :key="pay.key">
				<div class="check-line">
					<img :src="pay.imgUrl"
					  alt="pay.name"
					  class="pay-image">
					{{pay.name}}
				</div>
			</van-radio>
		</van-radio-group>
	</van-cell-group>
</van-actionsheet>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			pays: {},
			payType: '',
			popupShow: false,
			typeList: [{
					key: 'alipay',
					name: '支付宝支付',
					imgUrl: require('../../../assets/orders/ali-pay@2x.png')
				},
				{
					key: 'wxpay',
					name: '微信支付',
					imgUrl: require('../../../assets/orders/weixin@2x.png')
				},
				// {
				//     key: 'unionPay',
				//     name: '银联支付',
				//     imgUrl: require('../../../assets/orders/union-pay@2x.png')
				// },
				{
					key: 'scorePay',
					name: '佣金余额支付',
					imgUrl: require('../../../assets/orders/score-pay@2x.png')
				},
			]
		}
	},
	methods: {
		cancel() {
			this.$emit('close')
		},
		pay() {
			if (w) return //检查是否请求订单中

		},
		select() {
			if (window.plus) this.pay()
			// this.popupShow = false
			this.$emit('select', this.payType)
		}
	},
	watch: {
		show() {
			this.popupShow = this.show
		}
	},
	mounted() {
		this.onPlusReady(() => {
			plus.payment.getChannels(channels => {
				Object.values(channels).forEach(channel => {
					this.pays[channel.id] = channel
				})
				alert(JSON.stringify(this.pays))
			}, function(e) {
				this.$toast("获取支付通道失败：" + e.message);
			});
		})
	}
}
</script>

<style scoped lang="scss">
.check-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 50px;
    .pay-image {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
}

.van-radio-group {
    padding: 0 15px;
}
</style>
