<script setup lang="ts">
const staffData = ref({
  stateAlarm: false,
  fatigueAlarm: false,
  focusAlarm: false,
  hrAlarm: false,
  tempAlarm: false,
})
</script>

<template>
  <bv-border-box name="border12">
    <div class="human-container">
      <div class="content">
        <!-- 实时信息 -->
        <div class="title">
          <span class="number">3</span> 个体实时信息: 昏厥
        </div>
      </div>

      <div class="person-img">
        <img src="@/assets/4.png" alt="">
        <div class="monitor-point lucidity-rate">
          <div class="point" />
          <div class="line" />
          <div class="indicator" :class="{ 'alarm-active': staffData.stateAlarm }">
            <span class="label">清醒</span>
            <span class="value">89 </span>
          </div>
        </div>
        <!-- 疲劳度指标点 -->
        <div class="monitor-point fatigue-rate">
          <div class="point" />
          <div class="line" />
          <div class="indicator" :class="{ 'alarm-active': staffData.fatigueAlarm }">
            <span class="label">疲劳</span>
            <span class="value">90</span>
          </div>
        </div>
        <!-- 专注度指标点 -->
        <div class="monitor-point focus-rate">
          <div class="point" />
          <div class="line" />
          <div class="indicator" :class="{ 'alarm-active': staffData.focusAlarm }">
            <span class="label">专注</span>
            <span class="value">23</span>
          </div>
        </div>
        <!-- 心率指标点 -->
        <div class="monitor-point heart-rate">
          <div class="point" />
          <div class="line" />
          <div class="indicator" :class="{ 'alarm-active': staffData.hrAlarm }">
            <span class="label">心率</span>
            <span class="value">98bpm</span>
          </div>
        </div>

        <!-- 血压指标点 -->
        <div
          class="monitor-point blood-pressure"
        >
          <div class="point" />
          <div class="line" />
          <div class="indicator">
            <span class="label">血压<br></span>
            <span class="value">{{ 129 - 89 }} </span>
          </div>
        </div>

        <!-- 额温指标点 -->
        <div class="monitor-point temperature">
          <div class="point" />
          <div class="line" />
          <div class="indicator" :class="{ 'alarm-active': staffData.tempAlarm }">
            <span class="label">额温</span>
            <span class="value">
              -
              <!-- {{ staffData.temp ? (staffData.temp / 10).toFixed(1) : '' || '--' }}°C -->
            </span>
          </div>
        </div>
      </div>
    </div>
  </bv-border-box>
</template>

<style scoped lang="less">
  @keyframes alarm-flash {
    0% {
      border-color: rgb(255 0 0 / 50%);
      background: rgb(255 0 0 / 10%);
    }

    50% {
      border-color: rgb(255 0 0 / 80%);
      background: rgb(255 0 0 / 20%);
    }

    100% {
      border-color: rgb(255 0 0 / 50%);
      background: rgb(255 0 0 / 10%);
    }
  }

  .human-container {
    padding: 10px;

    .content {
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
    }

    .person-img {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 400px;
      opacity: 1;
      background-image: url('@/assets/44.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      img {
        position: relative;
        width: 100%;
        height: 400px;
        animation: mask-move 3s infinite linear;
        object-fit: contain;
        mask-image: linear-gradient(
          to top,
          #000 0,
          rgb(255 255 255 / 0%) 16%,
          rgb(255 255 255 / 0%) 22%,
          #000 24%
        );
        mask-size: 250% 250%;
        mask-position: 0% 0%;
      }

      .monitor-point {
        position: absolute;

        .point {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #0ff;
          box-shadow: 0 0 10px #0ff;
        }

        .line {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 90px;
          height: 1px;
          background: linear-gradient(90deg, #0ff, rgb(0 255 255 / 30%));
        }

        .indicator {
          position: absolute;
          width: 100px;
          padding: 4px 8px;
          border: 3px solid rgb(0 255 255 / 30%);
          border-radius: 4px;
          background: rgb(0 255 255 / 10%);

          .label {
            margin-right: 8px;
            color: #0ff;
            font-size: 14px;
          }

          .value {
            color: #fff;
            font-size: 16px;
            font-weight: bold;
          }

          &.alarm-active {
            animation: alarm-flash 1s infinite;
            border-color: rgb(255 0 0 / 50%);
            background: rgb(255 0 0 / 10%);

            .label,
            .value {
              color: #ff6b6b;
            }
          }
        }
      }

      .lucidity-rate {
        top: 10%;
        left: 45%;

        .line {
          transform: rotate(180deg);
          transform-origin: left;
        }

        .indicator {
          top: -10px;
          left: -150px;
        }
      }
      // 心率位置
      .heart-rate {
        top: 40%;
        left: 55%;

        .line {
          transform: rotate(-45deg);
          transform-origin: left;
        }

        .indicator {
          top: -90px;
          left: 70px;
          width: 100px;
        }
      }
      // 血压位置
      .blood-pressure {
        top: 50%;
        right: 32%;

        .line {
          transform: rotate(45deg);
          transform-origin: left;
        }

        .indicator {
          top: 25px;
          left: 60px;
        }
      }

      .temperature {
        top: 6%;
        left: 50%;

        .line {
          transform: rotate(-10deg);
          transform-origin: left;
        }

        .indicator {
          top: -40px;
          left: 100px;
        }
      }

      .focus-rate {
        top: 20%;
        left: 46%;

        .line {
          transform: rotate(170deg);
          transform-origin: left;
        }

        .indicator {
          top: 10px;
          left: -150px;
        }
      }
      // 额温位置
      .fatigue-rate {
        top: 48%;
        left: 35%;

        .line {
          transform: rotate(160deg);
          transform-origin: left;
        }

        .indicator {
          top: 5px;
          left: -150px;
        }
      }
    }

    .lucidity-chart {
      width: 100%;
      height: 260px;
      border: 1px solid #00f2f1;
    }
  }

  @keyframes mask-move {
    from {
      mask-position: 0 0;
    }

    to {
      mask-position: 0 120%;
    }
  }
</style>
