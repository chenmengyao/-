<template>
	<div>
		     <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  error-text="请求失败，点击重新加载"
  :error.sync="error"
  @load="initialization"
>
		<div class="suwis-coupons-con" v-if="history_feedback.length" v-for="item in history_feedback">
			<div class="suwis-details-con">
				<div style="flex:1 ;padding-top: 15px;">
					<div style="float:left">
						<span class="suwis-details-hondian"></span>
						<span class="suwis-details-fanhui">{{item.name}}</span>
					</div>	
					<div style="float: right;">
						<span class="suwis-details-shijian">{{item.time|dateFmt}}</span>
					</div>
					<div style="clear:both"></div>
				</div>
			</div>
			<div class="suwis-details-con">
				<div class="suwis-details-wenben">
					{{item.content||'我是反馈内容'}}
				</div>
			</div>
			<div>
				<div class="suwis-details-con{">
					<div class="suwis-details-huifu">
						<div style=" padding-bottom: 9px;">
							<diV class="suwis-details-pintaihuifu">来自平台的回复：</diV>
							<div class="suwis-details-huifushijian" v-if='item.sta==1'>{{item.reply.time|dateFmt}}</div>
						</div>　
						<div style="padding-top: 10px;text-align: left;">
							<div class="suwis-details-huifuneiron">{{item.sta==1?item.reply.content:'系统尚未回复'}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</van-list>
	</div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant';
export default {
	data(){
		return{		
			history_feedback:[],
			banner:[],
			error:false,
			loading: false,
      finished: false,
			total:null,
			page:1,
		}
	},
	methods:{
	  	initialization(){
	  		this.$axios.post('message/history_feedback',{
	  			page:this.page,
            	num:10
	  		}).then(res=>{
	  			if(res.data.code==1){
						this.total=res.data.data.total
						this.history_feedback=this.history_feedback.concat(res.data.data.data)
		  				if (this.page * 10 > this.total) this.finished = true
	  			}
	  			this.page++
          this.loading = false
	  		}).catch(()=>{
	  			this.error = true
	  		})
	  	}
  },
  created(){
  }
}
</script>

<style>
  .suwis-details-con{
	display: flex;
    font-size: 12px;
  }
  .suwis-details-hondian{
  	margin-top: 10px;
  	margin-left: 15px;
  	margin-right: 6px;
  	width:10px;
	height:10px;
	display: inline-block;
	background-color: #E83F44;
	background:rgba(232,63,68,1);
	border-radius:50%;
	opacity:1;
  }
  .suwis-details-fanhui{
  	display: inline-block;
  	font-size: 16px;	
  	line-height: 23px;
  	color: #333333;
  }
  .suwis-details-shijian{
  	display: inline-block;
  	font-size: 12px;
  	padding-right: 34px;
  	color: #999999;
  	line-height: 30px;
  }
  .suwis-details-feil{
  	float: left;
  }
  .suwis-details-wenben{
  	padding: 8px 15px;
  	color: #666666;
  	line-height: 23px;
  	font-size: 14px;
  	text-align:left;
  }
  .suwis-details-huifu{
  	margin: 8px 15px;
  	padding: 8px 14px;
  	background-color: #F5F5F5;
  }
  .suwis-details-pintaihuifu{
  	float: left;
  	font-size: 12px;
  	color: #666666;
  }
  .suwis-details-huifushijian{
  	padding-right: 16px;
  	float:right;
	font-size:12px;
	font-family:PingFang HK;
	font-weight:400;
	color: #999999;
	opacity:1;
  }
  .suwis-details-huifuneiron{
	font-size:12px;
	font-family:PingFang SC;
	font-weight:400;
	line-height:23px;
	color:rgba(153,153,153,1);
	opacity:1;
  }
</style>