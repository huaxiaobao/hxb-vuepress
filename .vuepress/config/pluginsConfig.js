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
]


module.exports = pluginsConfig