module.exports = {
  title: '厕纸工坊',
  description: '记录生活，记录成长',
  head: [
    [
      'meta', { name: 'keywords', content: '哈哈，嘿嘿' },
    ],
    [
      'link', { rel: 'icon', href: '/logo.png' },
    ],
  ],
  themeConfig: {
    sidebar: 'auto',
  },
  dest: 'dist',
  plugins: [ '@vuepress/back-to-top' ],
};