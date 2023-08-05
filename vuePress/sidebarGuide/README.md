---
title: 侧边栏配置
sidebarDepth: 3
---

::: tip  <h2>侧边栏</h2>
想要使 侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar



##                       
:::

## 基本配置

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}

```


## 侧边栏分组 

::: warning  侧边栏分组
 这种配置方式适合 侧边栏需要分组展示的情况    
:::

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
```

## 多个侧边栏

::: warning  最灵活的配置方式
如果你需要为不同的界面展示不同的侧边栏，那么这种配置方式为首选
:::

第一步：在进行这种配置前，最好组织下你的目录结构


```js
.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar/
   ├─ README.md
   ├─ three.md
   └─ four.md
```

第二步：以对象的形式配置侧边栏
::: danger 警告
在配置的时候，要注意配置顺序，父路径要配置在子路径后面，VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。

比如： '/foo/bar' 要配置在 '/foo/' 之前。
:::

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
```

## 自动生成侧边栏
如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏，你可以通过 YAML front matter 来实现：
``` js
---
sidebar: auto
---
```

你也可以通过配置来在所有页面中启用它：
``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: 'auto'
  }
}

```

在 多语言 模式下, 你也可以将其应用到某一特定的语言下：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
     '/zh/': {
       sidebar: 'auto'
     }
  }
}
```

## 禁用侧边栏

你可以通过 YAML front matter 来禁用指定页面的侧边栏：
``` js
---
sidebar: false
---
```