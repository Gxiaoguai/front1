<template>
  <div class="color-line">
    <div :id="id" class="wrapper"></div>
  </div>
</template>
<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
  export default {
    name: 'color-line',
    props: {
      id: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: ''
      },
      optionData: {
        type: Array,
        default: function() {
          return [50, 75, 60, 90, 80, 40, 90]
        }
      },
      width: {
        type: String,
        default: '100px'
      },
      height: {
        type: String,
        default: '80px'
      }
    },
    methods: {
      drawPie(id) {
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          grid: {
            left: 0,//图表距离边框的距离
            right: 0,
            bottom: 0,
            top: 0
          },
          xAxis: {
              type: 'category'
            // show: false,
//              boundaryGap: false,
//              data: ['12-01','12-02','12-03','12-04','12-05','12-05','12-06','12-07','12-08','12-09','12-10','12-11','12-12','12-13'],
              //坐标轴颜色
//              axisLine:{
//                  lineStyle:{
//                      color:'red'
//                  }
//              },
              //x轴文字旋转
//              axisLabel:{
//                  rotate:30,
//                  interval:0
//              },
          },
          yAxis: {
            // type: 'value',
            show: false
          },
          series: [{
            data: this.optionData,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: this.color
                }
              }
            }
          }]
        })
      }
    },
    mounted() {
      document.getElementById(this.id).style.width = this.width
      document.getElementById(this.id).style.height = this.height
      this.$nextTick(function() {
        this.drawPie(this.id)
      })
    }
  }
</script>
<style scoped lang="stylus">
  .color-line
    .wrapper
      margin 0 auto
</style>
