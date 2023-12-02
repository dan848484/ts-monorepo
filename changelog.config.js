module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'feat',
    'fix',
    'test',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
    'chore',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    chore: {
      description: '何かしらの変更',
      emoji: '☕️',
      value: 'chore',
    },
    ci: {
      description: 'CIに関する変更',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントの変更',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '機能の追加',
      emoji: '🎸',
      value: 'feat',
    },
    feat: {
      description: '新規追加',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'パフォーマンス改善',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'マークアップ、 フォーマット, コードの修正',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'テストコードの変更',
      emoji: '💍',
      value: 'test',
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  },
};