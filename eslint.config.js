import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: false,

  // 性能优化配置
  typescript: {
    tsconfigPath: 'tsconfig.json',
    // 关闭类型检查规则以提升性能
    overrides: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // 忽略不需要检查的文件
  ignores: [
    '.husky',
    'dist',
    'node_modules',
    '*.d.ts',
    'public',
    '.vscode',
    '.idea',
    'coverage',
    '*.min.js',
    'pnpm-lock.yaml',
    'package-lock.json',
    '*.log',
  ],
})
