// commitlint.config.cjs

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 构造工具、外部依赖（webpack、npm）
        'chore', // 不涉及 src、test 的其他修改（构建过程或辅助工具的变更）
        'ci', // 修改项目继续集成流程（Travis，Jenkins，GitLab CI，Circle等）
        'docs', // 文档
        'feat', // 新增功能
        'fix', // bug 修复
        'perf', // 性能优化
        'refactor', // 重构
        'revert', // 回退
        'style', // 代码风格（不影响代码含义）
        'test', // 测试
      ],
    ],
  },
}
