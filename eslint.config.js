import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // 基础配置
    vue: true,
    typescript: true,
    unocss: false,

    // 忽略文件
    ignores: [
      'dist',
      'node_modules',
      'public',
      '*.d.ts',
      '.vscode',
      '.idea',
      'coverage',
      '*.min.js',
      'pnpm-lock.yaml',
      'package-lock.json',
      '*.log',
      '.husky',
      '.eslintrc-auto-import.json',
    ],
  },
  // 自定义规则
  {
    rules: {
      'no-console': 'off',
      'no-debugger': 'warn',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
)
