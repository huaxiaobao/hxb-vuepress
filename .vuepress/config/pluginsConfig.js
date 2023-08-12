const pluginsConfig = [
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
    '@vuepress-reco/vuepress-plugin-bgm-player',{
     audios: [
        // 本地文件示例
        {
          name: '光辉岁月',
          artist: 'Beyond',
          url: 'http://m801.music.126.net/20230812232852/7889663797de749287fbf4a5ea763859/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096524174/9037/ea6c/bf14/71a02676793c7cff35ad166c60177b78.m4a',
          cover: 'https://p2.music.126.net/zZtUDuWk6qIe3ezMt4UMjg==/109951165796417308.jpg?param=130y130'
        },
        // 网络文件示例
        {
          name: '骄傲的少年',
          artist: '骄傲的少年',
          url: 'http://m801.music.126.net/20230812231606/739ba2fcdf29b77330ed0a7da521a1a4/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481812061/a525/aa48/2610/2269ad9d695bd781f7c2e9974d28ee3a.m4a',
          cover: 'http://p2.music.126.net/Brn39jwEDNPVV6pNWcv_rA==/1391981724588577.jpg?param=130y130'
        },
        {
          name: '为你写诗',
          artist: '花小宝',
          url: 'http://m701.music.126.net/20230812234938/131a422bbfeb09b6700b3398507f9b91/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28557498844/1756/a66c/593a/68c2bccc24e83360aaf23220b136ebde.m4a',
          cover: 'https://p2.music.126.net/RTJNnHkBr8fJhCvczPnZnw==/109951167188505394.jpg?param=130y130' 
        }
      ] 
    }
  ]
]


module.exports = pluginsConfig