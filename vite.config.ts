import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      // 自动导入 Vue 相关函数，如 ref, reactive, toRef 等
      imports: ['vue', 'vue-router'],
      // 自动导入 Element Plus 相关函数
      resolvers: [],
      // 生成类型声明文件
      dts: true,
      // 自动导入目录
      dirs: [
        './src/composables',
        './src/utils',
        './src/stores',
      ],
      // 自动导入 vue 组件
      vueTemplate: true,
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
