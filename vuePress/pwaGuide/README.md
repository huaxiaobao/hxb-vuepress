---
title: PWA 离线缓存
---
## PWA 插件

::: tip  什么是 PWA
PWA 可以通过一个代码库在多个平台和设备上运行。它也像一个特定平台的应用程序一样，可以安装在设备上，可以离线和在后台运行，并且可以与设备和其他已安装的应用程序集成。
:::

## 安装
```js
yarn add -D @vuepress/plugin-pwa
```

## 使用
```js
module.exports = {
  plugins: ['@vuepress/pwa']
}
```

## 兼容处理

:::tip
为了让网站完全地兼容 PWA，你需要:
1. .vuepress/public 提供 Manifest 和 icons
在 .vuepress/public 下 新建 manifest.json 文件夹和 icons 文件夹，并在 icons 文件夹下放几张图片
2. 修改 ` config.js` 文件

:::

`manifest.json` 文件 内容 （如果图片名字不一样，记得修改）

<<< @/.vuepress/public/manifest.json

`config.js`文件修改内容 （记得修改图片的路径）

```js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }], //配置浏览器标签栏图标
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
          message: "有新的内容更新！",
          buttonText: "刷新",
      }
  }],
}
```

接下来将 代码提交到 gitbub 仓库中，然后发布到 github.io 中，发布完成之后，先进入到网址中，看看我们发布的代码之后，页面有没有刷新，然而并没有，还是之前的样子，稍等片刻，右下角会出现一个刷新的按钮，点击刷新，就可以看到最新的内容啦！
这就是PWA,离线缓存，在我们发布之后，会自动弹出刷新按钮，然后就会更新网站内容！