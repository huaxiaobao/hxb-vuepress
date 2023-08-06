const navigations = require('./config/navigateConfig')
const sideBarConfig = require('./config/sideBarConfig')
const headConfig = require('./config/headConfig')
const pluginsConfig = require('./config/pluginsConfig')


module.exports = {
  // base:'/hxb-vuepress/',
  title: "花小宝",
  description: "Just playing around",
  head: headConfig,
  themeConfig: {
    logo: "/assets/img/avatar.jpg",
    nav: navigations,
    sidebar: sideBarConfig,
    lastUpdated: "更新时间",
    searchMaxSuggestions: 10 , //搜索框单次搜索条数
  },
  plugins: pluginsConfig,
};
