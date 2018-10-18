<template>
  <div class="myMap" id="myMap" :style="deviceHeight"></div>
</template>

<script>
import BMap from 'BMap'
// import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
export default {
  computed: {
    deviceHeight () {
      return `height: ${document.documentElement.clientHeight}px;`
    }
  },
  mounted () {
    this.baiduMap()
  },
  methods: {
    baiduMap () {
      var map = new BMap.Map('myMap')
      var point = new BMap.Point(112.470607, 34.640458)
      map.centerAndZoom(point, 5)
      map.addControl(new BMap.NavigationControl())// 添加缩放控件
      map.enableScrollWheelZoom(true)// 开启鼠标滚轮缩放
      function addLabel (point, content, index) { // 创建标记对象
        let marker = new BMap.Marker(point)// 创建标注
        map.addOverlay(marker)// 将标注添加到地图中
        // 创建标注对象并添加到地图
        var label = new BMap.Label(content, {
          offset: new BMap.Size(0, -40 + (index - 1) * -20),
          position: point,
          enableMassClear: true
        })
        map.addOverlay(label)
      }
      var point2 = new BMap.Point(116.296724, 40.150168)
      addLabel(point, '信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032', 1)
      addLabel(point, '信息工程学院学生党支部 支部书记：杨鑫 电话：0396-2853187', 2)
      addLabel(point2, '信息工程学院学生流动党支部 支部书记：高洋 电话：13526395586', 1)
    }
  }
}
</script>

<style scoped>
  .myMap{
    /*padding-top: .9rem;*/
  }
</style>
