---
title: vueprss 初体验
---
<!-- ## yarn format
下面列出了一下常用的 formart 的 一些属性，你先不用知道他 要干什么，了解一下就可以了，这能帮助你 在接下来的 配置中不那么 突兀。 -->

好啦，我们正式进入主题了，vuepress 来啦，这一节将带你搭建一个基本的vuepress 文档网站，动起手来！
::: warning  vuepress 前提条件
VuePress 需要 Node.js (opens new window)>= 8.6
:::

1、创建文件夹：比如 `myfirst-vuepress`

2、进入项目根目录下面，然后打开编辑器，在客户端中初始化项目文件<br>
```js
 yarn init-y //npm init -y 
 //项目全程用yarn ，建议用 yarn ,没有安装yarn 的，安装一下即可使用
```

::: tip  初始化完成之后，我们会看到一个 package.json 文件
<br>
:::

3、安装 vuePress 依赖
```js
yarn add -D vuepress // npm install -D vuepress
```


4、创建你的第一篇文档

在项目根目录下面创建一个 `README.md `文件,并写下你喜欢的内容
(路径：myfirst-vuepress/README.md)

```md
## hi, 欢迎来到 vuepress
```
5、 在 `package.json` 中添加一些 `scripts`

```js
{
  "name": "myfirst-vuepress",
  "scripts": {
    "docs:dev": "vuepress dev",
    "docs:build": "vuepress build"
  },
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

6、在本地启动服务器
```js
yarn docs:dev // npm run docs:dev
```

7、手动在浏览器上面打开这个网址 `http://localhost:8080/`


恭喜你，vuepress 已经初步搭建完毕了，你可以在浏览器中看到你的 vuepress 界面啦！



