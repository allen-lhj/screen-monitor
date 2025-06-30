<script setup lang="ts">
import { computed } from 'vue'
import Avatar from '@/assets/images/dashboard/default_avatar.png'

interface StaffInfo {
  name: string
  age: number
  dept: string
  team: string
  phone: string
  duty: string
  imei: string
  birthday: string
  emp_no: string
}

const staffInfo = ref<StaffInfo>(
  {
    name: '张瑞',
    age: 34,
    dept: '项目',
    team: '班组',
    phone: '13800138000',
    duty: '工种',
    imei: '1234567890',
    birthday: '1990-01-01',
    emp_no: '1234567890',
  },
)

const infoList = computed(() => [
  { label: '姓名', value: staffInfo.value.name },
  { label: '项目', value: staffInfo.value.dept },
  { label: '班组', value: staffInfo.value.team || '-' },
  { label: '手机', value: staffInfo.value.phone || '-' },
  { label: '年龄', value: staffInfo.value.age },
  { label: '工种', value: staffInfo.value.duty },
  { label: '工号', value: staffInfo.value.emp_no || '-' },
  { label: '设备', value: staffInfo.value.imei || '-' },
])
</script>

<template>
  <bv-border-box name="border8">
    <div class="staff-basic-info">
      <div class="title">
        <span class="number">1</span>基本信息
      </div>
      <div class="info-content">
        <div class="list">
          <div v-for="(item, index) in infoList" :key="index" class="list-item">
            <span>{{ item.label }}:</span>
            <span
              :class="{ 'imei-text': item.label === '设备' }"
              :title="item.value as string"
            >{{ item.value }}</span>
          </div>
        </div>
        <div class="avatar">
          <!-- <img :src="staffInfo.avatar || Avatar" alt="头像"> -->
        </div>
      </div>
    </div>
  </bv-border-box>
</template>

<style scoped lang="less">
.staff-basic-info {
  width: 100%;
  height: 260px;
  padding: 10px;

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

  .info-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .list {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 15px; // Added gap between items
      width: 70%; // Adjusted width
      color: #fff;

      .list-item {
        display: flex;
        width: calc(50% - 8px); // Adjusted for gap
        gap: 8px;

        .imei-text {
          max-width: 100px; // 限制最大宽度
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:hover {
            color: #fff;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }

    .avatar {
      width: 150px; // Fixed width
      height: 200px;
      overflow: hidden;
      border-radius: 8px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
