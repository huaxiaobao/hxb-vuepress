---
title: 引入 vue 组件
---

## 组件引入


::: tip 文件目录结构
`component` --- 所有在markdown 中引入的 vue 文件，都必须在放在这个文件夹下面

:::


```js
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

首先，在 component 文件夹中 创建 vue 文件，例如 `test.vue `
::: tip  以下是引入组件的展示

<test/>

:::

<<< @/.vuepress/components/test.vue 

在 markdown 中引入

:::warning
如果你正在使用，或者需要展示一个对于 SSR 不怎么友好的组件（比如包含了自定义指令），你可以将它们包裹在内置的 `<ClientOnly>` 组件中：
:::

```js
<test/>

//或者

<ClientOnly> <test/></ClientOnly>

```

好啦，恭喜你，已经学会了 怎样引入 vue 文件组件。 