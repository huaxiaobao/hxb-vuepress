---
title: 引入组件库
---
## 引入 第三方组件或者插件  

::: tip  elemnt-ui
以引入 element-ui 为例,来演示如何引入第三方组件
:::

第一步： 安装 element-ui 组件库

```js
yarn add element-ui //或者  npm install element-ui 
```


第二步：在 .vuepress 目录下面创建 `enhanceApp.js` 文件,并编写如下代码

<<< @/.vuepress/enhanceApp.js

::: danger 注意：
有可能在使用的过程中会报错，因为 element-ui 的 core.js 库和 vuePress 的 core.js 库 有冲突，所以，我们需要重新安装一下这个库 `npm install core-js@2.x` 才能正常使用。
:::


第三步: 在任意的`markdown`文件中引入 elemnt-ui 的组件库就 ok 啦！   
<el-button type='primary' style="display:flex;margin:32px auto 0;"> element-ui (演示按钮)</el-button>

```js
<el-button type='primary' style="margin-top:32px"> element-ui(演示按钮)</el-button>
```


## 关于 enhanceApp.js 文件
:::tip
官网概述： 由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 .vuepress/enhanceApp.js 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。enhanceApp.js 应该 export default 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：

换句话：
我们通过这个文件来操作 vue,包括 引入一些 我们需要的组件库，插件，以及处理路由等事情。
下面这个默认的函数 给我们暴露了 Vue 实例，以及 vue-router 等信息，供我们操作，写法类似于 我们 在 vue 项目中，main.js 里面 引入各种插件等；
:::

```js
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
}
```




