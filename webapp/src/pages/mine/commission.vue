<template lang="html">
  <div>
    <div class="d-bg"></div>
    <div class="suwis-com-echarts">
        <div>
            <div style="text-align:left;font-size:12px;margin:20px 0 5px 20px"><img src="../../assets/pri.png" style="width:13px; vertical-align: middle;margin-top:-2px;margin-right:8px">当前佣金（元）</div>
            <div>
                <div style="float:left;margin-left:23px;line-height:62px;color:#E83F44;font-size:24px;">{{sum}}</div>
                 <div style="float:right;margin-right:23px;">
                     <img src="../../assets/yong.png" style="width:130px;">
                 </div>
                 <div style="clear:both"></div>
            </div>
            <div style="display:flex;padding:0 0 20px 20px;">
                <div style="flex:1">
                    <div id="myChart"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="suwis-com" v-for="item in comList">
       <div>
           <div style="border-bottom:1px solid #EFEFEF;padding: 15px 15px 8px 15px;">
            <div style="font-size:14px;">
                <div style="float:left;">
                    <div style="float:left">
                        <img :src="photo|| require('@/assets/login/avatar@3x.png')" style="width:20px;height:20px;margin-top:-2px;border-radius:50%">
                    </div>
                    <div style="float:left;text-align:left;margin-left:6px;">
                        <div>
                            {{item.user_nickname}}
                            <!-- <img v-if="userType==1" src="../../assets/myvip.png" style="width:18px; vertical-align: middle;margin:0 5px;margin-top:-2px;">
                            <span v-if="userType==1" style="font-size:12px;font-weight:bold;color:#E3B156">VIP</span>
                            <span  v-if="userType==0" style="color:#E3B156">普通用户</span>
                            <span  v-if="userType==2" style="color:#E3B156">团长</span> -->
                        </div>
                        <div style="padding-top:8px;font-size:12px">{{item.time|dateFmt}}</div>
                    </div>
                </div>
                <div style="float:right;line-height:45px;">
                    {{item.sum}}
                </div>
                <div style="clear:both"></div>
            </div>
        </div>




       </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comList: [],
      sum: 0,//总佣金
      photo: '',
      userType: '',
    }
  },
  mounted() {
    var that = this
    that.getCommission().then(function (data) {
      that.comList = data.list
      that.sum = data.sum
      that.userType = data.user_type
      // that.comList=data.list
      that.myChart(data.sum_m)
    })
    let user = JSON.parse(localStorage.getItem("suwis_app_state"));
    let photo = user.core.user.user.photo
    that.photo = photo
    // console.log(user.core.user.user,'user')
  },
  methods: {
    // 左上角柱状图
    myChart(data) {
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      myChart.setOption({
        // backgroundColor:'#050d19',
        title: {
          textStyle: {
            color: "#2BFDA3",//在这里插入图片描述
          },
          left: "left",
        },
        tooltip: {//鼠标悬浮弹出提示框
          trigger: 'axis', //提示框弹出的触发时间，折线图和柱状图为axis
          formatter: "{a} <br/>{b} : {c} "//提示框提示的信息，{a}series内的名字，{b}为块状的名字，{c}为数值
        },
        grid: {//统计图距离边缘的距离
          top: '14%',
          left: '10%',
          right: '10%',
          bottom: '14%'
        },
        xAxis: [{//x轴
          type: 'category',//数据类型为不连续数据
          boundaryGap: true,//坐标轴两边是否留白
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#233e64' //x轴颜色
            },
          },
          axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#999999',
            },
          },
          axisTick: { show: true, },//刻度点数轴
          data: data.x,
        }],
        yAxis: [{//y轴的相关设置
          type: 'value',//y轴数据类型为连续的数据
          min: 0,//y轴上的刻度最小值
          // max: 10000,//y轴上的刻度最大值
          splitNumber: 6,//y轴上的刻度段数
          splitLine: {//y轴上的y轴线条相关设置
            show: false,
            lineStyle: {
              color: '#233e64'
            }
          },
          axisLine: {//y轴的相关设置
            show: true,
            lineStyle: {
              color: '#233e64' //y轴颜色
            },
          },
          axisLabel: {//y轴的标签相关设置
            textStyle: {
              color: '#999999',
            },
            margin: 3,
            formatter: function (value, index) {
              if (value >= 10000 && value < 10000000) {
                value = value / 10000 + "万";
              } else if (value >= 10000000) {
                value = value / 10000000 + "千万";
              }
              return value;
            }
          }
        }],
        series: [{
          name: '消费趋势分析',
          type: 'line',//统计图类型为折线图
          smooth: false, //是否平滑曲线显示
          symbol: 'circle',
          symbolSize: 6,//数据点的大小，[0,0]//b表示宽度和高度
          lineStyle: {//线条的相关设置
            normal: {
              color: "#6C1215"   // 线条颜色
            },
          },
          // 背景色渐变色
          areaStyle: {
            // color: '3deaff',
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0.3, color: 'rgba(255,0,0,0.24)' },
              { offset: 0.6, color: 'rgba(255,0,0,0.18)' },
              { offset: 1, color: 'rgba(255,0,0,0)' }
            ]),
            opacity: 0.5,
            // origin: "start"
          },
          data: data.y
        }]
      })
    },
    getCommission() {
      var that = this
      var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
          that.$axios.post('mine/userincome').then(res => {
            resolve(res.data.data);
          })
        }, 2000);
      });
      return p;
    }
  }
}
</script>

<style lang="css" scoped>
.d-bg {
  background: #efeeee;
  width: 100%;
  height: 150px;
  position: absolute;
  z-index: -99;
  top: 0;
  left: 0;
}
#myChart {
  height: 150px;
}
.suwis-com-echarts {
  display: flex;
  margin: 15px 15px 0 15px;
}
.suwis-com-echarts > div {
  overflow: hidden;
  flex: 1;
  background: #fff;
  box-shadow: 0 6px 12px rgba(255, 63, 69, 0.17);
  -webkit-box-shadow: 0 6px 12px rgba(255, 63, 69, 0.17);
  -moz-box-shadow: 0 6px 12px rgba(255, 63, 69, 0.17);
  box-shadow: 0 6px 12px rgba(255, 63, 69, 0.17);
}
.suwis-com {
  display: flex;
  margin-top: 10px;
}
.suwis-com > div {
  flex: 1;
}
</style>
