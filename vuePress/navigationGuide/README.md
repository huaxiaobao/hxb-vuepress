---
title: 导航栏配置
sidebarDepth: 3
---

::: tip <h2>导航栏</h2>
导航栏可能包含你的页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，它们均取决于你的配置。
:::

## 导航栏 logo

```js



```


## 导航栏搜索框
```js



```


## 导航栏链接配置

在 .vuepress/config.js 文件夹下面配置导航栏的信息。

属性：  
`text`---- 导航栏的文字   
`link`---- 导航栏连接地址（当填写网址时，会自动变为外部链接）   
`target`--- 跳转页面的打开方式，类似 a 标签的target属性， _blank 新的窗口打开，默认在当前页面打开   
`rel` ---- 暂时未知，没有使用过  

```js

// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'Guide', link: '/guide/', target:'_blank' }
    ]
  }

```



## 导航栏链接嵌套
类似多级菜单的嵌套，在父级菜单中 添加 items 属性 即可（具体配置如下图）

当你提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}
```
## 导航栏禁用
