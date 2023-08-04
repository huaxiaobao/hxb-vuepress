const navigations = require('./config/navigateConfig')
const sideBarConfig = require('./config/sideBarConfig')
module.exports = {
  // base:'/hxb-vuepress/',
  title: "花小宝-vuepress",
  description: "Just playing around",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#  ' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/bg.jpg' }],
    ['link', { rel: 'mask-icon', href: '/icons/bg.jpg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/bg.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#409eff' }]
  ],
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: navigations,
    sidebar: sideBarConfig,
    lastUpdated: "更新时间",
  },
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require("moment");
          moment.locale("zh-cn");
          return moment(timestamp).format("LL");
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh",
        },
      },
    ],
  ],
};
