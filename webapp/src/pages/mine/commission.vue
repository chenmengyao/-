<template lang="html">
  <div>
    <div class="suwis-com-echarts">
        <div>
            <div id="myChart"></div>
        </div>
    </div>
    <div class="suwis-com">
       <div>
           <div>
           <div style="float:left">
              <div style="float:left">fdfdf</div>
              <div style="float:left">fdfdf</div>
           </div>
           <div style="float:right">
               8989898
           </div>
       </div>
       </div>
    </div>
  </div>
</template>

<script>
 export default {
    data(){
      return {}
    }, 
     mounted(){
        this.myChart() //函数调用
     },
     methods:{
        // 左上角柱状图
        myChart(){
          let myChart= this.$echarts.init(document.getElementById('myChart'));
          myChart.setOption({
            // backgroundColor:'#050d19',
            title:{
              textStyle:{
                color:"#2BFDA3",//在这里插入图片描述
              },
              left:"left",
            },
            tooltip: {//鼠标悬浮弹出提示框
              trigger:'axis', //提示框弹出的触发时间，折线图和柱状图为axis
              formatter:"{a} <br/>{b} : {c} "//提示框提示的信息，{a}series内的名字，{b}为块状的名字，{c}为数值
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
                axisTick: { show: true,},//刻度点数轴
                data: ['01', '02', '03', '04','05','06','07','08','09','10','11','12'],
            }],
            yAxis: [{//y轴的相关设置
              type: 'value',//y轴数据类型为连续的数据
              min: 0,//y轴上的刻度最小值
              max:10000,//y轴上的刻度最大值
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
                }
            }],
            series: [{
              name: '消费趋势分析',
              type: 'line',//统计图类型为折线图
              smooth: false, //是否平滑曲线显示
              symbol: 'circle',
              symbolSize:6,//数据点的大小，[0,0]//b表示宽度和高度
              lineStyle: {//线条的相关设置
                normal: {
                  color: "#6C1215"   // 线条颜色
                },
              },
              // 背景色渐变色
            areaStyle: {
              // color: '3deaff',
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {offset: 0.3, color: 'rgba(255,0,0,0.24)'},
                  {offset: 0.6, color: 'rgba(255,0,0,0.18)'},
                   {offset: 1, color: 'rgba(255,0,0,0)'}
              ]),
              opacity: 0.5,
              // origin: "start"
            },
               data: [4000, 2000, 4000, 4000, 6000, 4000,4000, 2000, 6000, 1000, 2000, 4000]
            }]
          })
        },
       }
  }
</script>

<style lang="css">
#myChart{
  height: 150px;
  width: 100%
}
.suwis-com-echarts{
    display: flex;
    margin: 0 15px;
}
.suwis-com-echarts>div{
    flex:1;
    background: fff;
    box-shadow:0 6px 12px rgba(255, 63, 69, .17);  
    -webkit-box-shadow:0 6px 12px rgba(255, 63, 69, .17);  
   -moz-box-shadow:0 6px 12px rgba(255, 63, 69, .17);  
    box-shadow:0 6px 12px rgba(255, 63, 69, .17); 
}
.suwis-com{
   display: flex;  
   padding: 0 15px;
   margin-top: 5px;
}
.suwis-com>div{
    flex:1;
}
</style>
