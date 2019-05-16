<template lang="html">
  <div>
    <div class="suwis-system-list">
      <div>
        <div class="suwis-system-titie">
            <img src="../../../assets/infor1.png">系统消息
        </div>
        <div class="suwis-system-date">2019-02-28 14：01</div>
        <div class="suwis-system-con">
           <span>版本更新：XX商城APPv1.2版本已上线。</span>
        </div>
        </div>
      </div>
      <div class="suwis-system-list">
      <div>
        <div class="suwis-system-titie">
            <img src="../../../assets/infor1.png">系统消息
        </div>
        <div class="suwis-system-date">2019-02-28 14：01</div>
        <div class="suwis-system-con">
           <span>新VIP提醒：您有新注册VIP消息，请前往推广页面查看。</span>
        </div>
        </div>
      </div>
      <div class="suwis-system-list">
      <div>
        <div class="suwis-system-titie">
            <img src="../../../assets/infor1.png">系统消息
        </div>
        <div class="suwis-system-date">2019-02-28 14：01</div>
        <div class="suwis-system-con">
           <span>版本更新：XX商城APPv1.2版本已上线。</span>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
     document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')
  }
}
</script>

<style lang="css" scoped>
.suwis-system-con{
  display: flex;
  margin-top: 10px;
  line-height: 23px;
  font-size: 14px;
  color: #999;
  padding-left: 31px;
}
.suwis-system-con span{
  padding:10px 13px;
  background: #FAFAFA;
  flex: 1;
}
.suwis-system-titie{
  font-size:16px;
}
.suwis-system-date{
  padding-left: 31px;
  color: #999;
  font-size: 12px;
}
.suwis-system-titie img{
  width: 26px;
  vertical-align: middle;
  margin-right: 8px;
  margin-top: -2px;
}
.suwis-system-list{
  text-align: left;
  display: flex;
  padding:15px; 
  border-bottom: 1px solid #EFEFEF;
  background: #fff;
}
.suwis-system-list>div{
  flex: 1;
  width: 100%;
}
</style>
