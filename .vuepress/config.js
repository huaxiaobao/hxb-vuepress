
module.exports = {
  base:'/my-vue-press/',
  title: '花小宝-vuepress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: 'vuePress使用', link: '/about/' },
      { text: '博客', link: 'https://huaxiaobao.top' },
      { text: '语言', link: '/language/' },
    ],
    sidebar: {
      "/about/": [
        'config'
      ],
      "/language/": [
        "chinese",
        "english"
      ],
      "/":[""]
    },
    lastUpdated:'更新时间'
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).format('LL')
        }
      }
    ]
  ]
}