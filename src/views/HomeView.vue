<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

// 这些 Vue API 现在可以自动导入，无需手动 import
const count = ref(0)
const message = reactive({ text: 'Hello Auto Import!' })
const router = useRouter()

function increment() {
  count.value++
}

function navigateToAbout() {
  router.push('/about')
}
</script>

<template>
  <main>
    <div style="margin-bottom: 2rem;">
      <h2>{{ message.text }}</h2>
      <p>计数器: {{ count }}</p>
      <button style="margin-right: 1rem;" @click="increment">
        增加
      </button>
      <button @click="navigateToAbout">
        前往关于页面
      </button>
    </div>
    <TheWelcome />
  </main>
</template>
