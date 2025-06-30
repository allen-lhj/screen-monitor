import dayjs from 'dayjs'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import 'dayjs/locale/zh-cn' // 导入中文语言包

/**
 * 时间显示管理 Hook
 * 负责实时更新和格式化时间显示
 */
export function useTimeDisplay() {
  dayjs.locale('zh-cn')

  // 响应式时间数据
  const time = ref('')
  const hour = ref('')

  // 定时器引用
  const timer = ref<ReturnType<typeof setInterval> | null>(null)

  /**
   * 更新时间显示
   */
  const updateTime = () => {
    time.value = dayjs().format('YYYY年MM月DD日 dddd A')
    hour.value = dayjs().format('HH:mm')
  }

  /**
   * 启动时间更新定时器
   */
  const startTimer = () => {
    updateTime() // 立即更新一次
    timer.value = setInterval(updateTime, 1000)
  }

  /**
   * 停止时间更新定时器
   */
  const stopTimer = () => {
    if (timer.value) {
      clearInterval(timer.value)
      timer.value = null
    }
  }

  // 组件挂载时启动定时器
  onMounted(() => {
    startTimer()
  })

  // 组件卸载时清理定时器
  onBeforeUnmount(() => {
    stopTimer()
  })

  return {
    time,
    hour,
    updateTime,
    startTimer,
    stopTimer,
  }
}
