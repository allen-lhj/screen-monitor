<script setup lang="ts">
onMounted(() => {
  const map = new BMapGL.Map('container') // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12) // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom() // 开启鼠标滚轮缩放
  map.setMapStyleV2({ styleJson: window.styleJson2 })
})
</script>

<template>
  <bv-border-box name="border12">
    <div class="map-container">
      <div class="title">
        <span class="number">4</span>实时地图 | 轨迹回放
      </div>
      <div class="map-content">
        <div id="container" />
      </div>
    </div>
  </bv-border-box>
</template>

<style scoped lang="less">
.map-container {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 10px;
        font-family: "微软雅黑";
    .title {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        color: rgb(189 214 237);
        font-size: 20px;

        .number {
        margin-right: 5px;
        padding: 2px 8px;
        border-radius: 4px;
        background: #1890ff;
        color: #000;
        font-size: 1.2rem;
        }
    }
        .map-content {
            width: 100%;
            height: 100%;

            #container {
                width: 100%;
                height: 620px;
            }
        }

}
</style>
