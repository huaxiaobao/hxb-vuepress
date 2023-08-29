/**
 * navgation link 配置：
 * text: 菜单名字
 * link 页面地址
 * target 打开连接的方式,
 * 导航嵌套
 * item  --- 在父标签中增加 item ，属性即可（看示例）
 *
 */
const navigation = [
  { text: "主页", link: "/" },
  { text: "vuePress使用", link: "/vuePress/" },
  {
    text: "前端",
    items: [
      { text: "javascript", link: "/web/javascript/" },
      { text: "css", link: "/web/css/" },
      { text: "vue", link: "/web/vue/" },
      { text: "element-ui", link: "/web/element-ui/" },
      { text: "echarts", link: "/web/echarts/" },
      { text: "webpack", link: "/web/webpack/" },
      { text: "nodejs", link: "/web/nodejs/" },
      { text: "前端部署那些事", link: "/web/webDescription/" },
      { text: "前端有趣的插件", link: "/web/plugins/" },
      { text: " 前端组件库开发", link: "/web/hosp-ui/" }
    ],
  },
  {
    text: "花花日记",
    items: [
      { text: "罗老师金典名言", link: "/" },
      { text: "走心文案", link: "/dayRecord/heart/" },
    ],
  },
  { text: "博客", link: "https://huaxiaobao.top" },
  { text: "语言", link: "/language/" },
];

module.exports = navigation;
