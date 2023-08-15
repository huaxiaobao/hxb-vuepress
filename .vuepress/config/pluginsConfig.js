


const pluginsConfig = [
  [
    "vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制代码",
      tip: {
        content: "复制成功",
      },
    },
  ],

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
        message: "有新的内容更新！",
        buttonText: "刷新",
      },
    },
  ],

  [
    "@vuepress-reco/vuepress-plugin-bgm-player",
    {
      audios: [
        // 本地文件示例
        {
          name: "光辉岁月",
          artist: "Beyond",
          url: "http://m801.music.126.net/20230815180701/7207db87a612bd75b69cef1082e59061/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096524174/9037/ea6c/bf14/71a02676793c7cff35ad166c60177b78.m4a"
          ,
          cover:
            "https://p2.music.126.net/zZtUDuWk6qIe3ezMt4UMjg==/109951165796417308.jpg?param=130y130",
        },
        // 网络文件示例
        {
          name: "骄傲的少年",
          artist: "骄傲的少年",
          url: "http://m801.music.126.net/20230815180819/68c90db535c538cd3b98399061768bbf/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481812061/a525/aa48/2610/2269ad9d695bd781f7c2e9974d28ee3a.m4a",
          cover:
            "http://p2.music.126.net/Brn39jwEDNPVV6pNWcv_rA==/1391981724588577.jpg?param=130y130",
        },
        {
          name: "为你写诗",
          artist: "花小宝",
          url: "http://m701.music.126.net/20230812234938/131a422bbfeb09b6700b3398507f9b91/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28557498844/1756/a66c/593a/68c2bccc24e83360aaf23220b136ebde.m4a",
          cover:
            "https://p2.music.126.net/RTJNnHkBr8fJhCvczPnZnw==/109951167188505394.jpg?param=130y130",
        },
      ],
    },
  ],
  [
    "@vuepress/active-header-links",
    {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor",
    },
  ],
  [
    "vuepress-plugin-code-copy",
    {
      align: "bottom",
      color: "#409eff",
      successText: "复制成功",
    },
  ],
  // ['vuepress-plugin-rocket'],
  [
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: ["shizuku", "z16"],
      modelStyle: { right: "90px", bottom: "-20px", opacity: "0.9" },
    },
  ],

  [
    '@codeciting/echarts',
    {
      echarts: {
        // 引入本地的 ECharts 文件
        path: require('echarts'), 
      }
    }
  ],
  ['@vuepress/nprogress'], //进度条展示
  [ '@vuepress/medium-zoom',{
    selector: '.page :not(a) > img',
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    options: {
      margin: 16
    }
  }] ,//   图片放大器

];

module.exports = pluginsConfig;
