<template lang="html">
  <div>
	  <div class="suwis-feedback-con">
	    	<textarea class="suwis-feedback-txt" placeholder="请输入您遇到的问题和建议～"></textarea>
	  </div>
	  <div class="suwis-feedback-con">
	    <input class="suwis-feedback-inp" type="text" placeholder="请输入您的联系电话／邮箱" />
	  </div>
	  <div class="suwis-feedback-con">
	  	<van-button round type="danger">提交</van-button>
	  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      keyWord:'',
    }
  }
}
</script>

<style lang="css">
	.suwis-feedback-con{
		display: flex;
		justify-content: center;
    align-items: center;
    font-size: 12px;
    padding:21px 24px 13px 24px;
    
	}
	.suwis-feedback-txt{
		display: block;
		background-color:#F5F5F5;
		padding: 15px 18px;
		border-radius: 4px;
		height: 163px;
		border: none;
		flex: 1;
		color: #999999;
		resize:none;
		
	}
	.suwis-feedback-inp{
		flex: 1;
		background-color: #F5F5F5;
		border: none;
		height: 40px;
		color: #999999;
		font-size: 12px;
		padding-left: 18px;
		border-radius: 4px; 
	}
	.suwis-feedback-con:nth-child(2) {
		padding: 0px 24px;
		
	}
	.suwis-feedback-con{
		display: flex;
	}
	.van-button{
		flex: 1;
		height:45px;
		background:linear-gradient(54deg,rgba(245,92,60,1) 0%,rgba(246,96,62,1) 17%,rgba(221,11,17,1) 100%);
		opacity:1;
		border-radius:23px;
		font-size: 16px;
	}
</style>
