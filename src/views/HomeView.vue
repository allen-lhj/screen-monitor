<script setup lang="ts">
import { useDrawEffect } from '@/hook/useDraw'
import { useTimeDisplay } from '@/hook/useTimeDisplay'

const { time, hour } = useTimeDisplay()

const { appRef, windowDraw, calcRate, unWindowDraw } = useDrawEffect()

onMounted(() => {
  const screen = document.querySelector('.detail-dashboard-container')
    ?.parentElement as HTMLElement
  screen.style.backgroundColor = '#000'
  windowDraw()
  calcRate()
})

onUnmounted(() => {
  unWindowDraw()
})
</script>

<template>
  <div ref="appRef" class="detail-dashboard-container">
    <!-- content -->
    <div class="dashboard-content">
      <div class="header">
        <div class="title-box">
          个人监控系统
        </div>
        <div class="time text-white">
          {{ time }}
          <span class="text-lg font-bold ml-2">{{ hour }}</span>
        </div>
      </div>
      <div class="detail-content">
        <div class="left-section">
          <div class="basic-info" />
          <div class="seven-data" />
        </div>
      </div>
    </div>
    <div class="center-section" />
    <div class="right-section">
      <div class="map-section" />
      <div class="alarm-section" />
    </div>
  </div>
</template>

<style scoped lang="less">
  .detail-dashboard-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1920px; // 设计稿基准宽度
    height: 1080px; // 设计稿基准高度
    transform-origin: left top;
    transition: all 0.3s;
    font-family: Arial, 'Microsoft YaHei', '黑体', '宋体', sans-serif;
    .dashboard-content {
      display: flex;
      position: relative;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 0;

      .header {
        display: flex;
        flex-direction: column;
        color: white;
        text-align: center;

        .title-box {
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 36px;
          font-weight: bold;
        }

        .title-box::before,
        .title-box::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 14px;
          height: 12px;
          transform: translateY(-50%);
        }
      }

      .detail-content {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        background-image: url('../assets/bg.png');
        background-position: center center;
        background-size: cover;

        .left-section {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 500px;

          .basic-info {
            height: 260px;
          }

          .seven-data {
            flex: 1;
          }
        }

        .center-section {
          width: 550px;
        }

        .right-section {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;

          .map-section {
            flex: 2;
          }

          .alarm-section {
            height: 320px;
          }
        }
      }
    }
  }
</style>
