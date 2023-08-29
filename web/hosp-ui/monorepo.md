---
title: 搭建 monorepo
---

## 认识 monorepo

Monorepo 是一种项目代码管理方式，指单个仓库中管理多个项目，有助于简化代码共享、版本控制、构建和部署等方面的复杂性，并提供更好的可重用性和协作性。

## 使用场景

在一些集成的项目里面，为了统一项目，可能会对 使用工具版本等做一个统一的控制，以及抽取一些公用的方法等，这个时候就需要对各个子项目做一个统筹，这个时候就可以用到它了。

## monorepo 配置

在集成的根目录文件夹下面，我们首先会初始化一个 `package.json` 文件，这个文件通常用来规定一些 工具的版本，以及配置哪些子项目需要进行统一管理。

首先我们初始化一个 package.json 文件：

```json
{
  "name": "demo-ui",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

项目文件夹结构：

```js
-demo-ui 
  |---cli 
  |---packages 
  |---example 
  |---package.json;
```

比如我们想同统一一下 `cli` `packages` `example` 这三个子项目的 vue 版本，接下来我们如何配置呢？

第一步： 在项目根目录下面建一个 `pnpm-workspace.yaml` 文件

文件内容：

```yaml
packages:
  #定义哪些子项目需要进行统一管理，就配置子项目的文件夹名字  /* --代表这个目录下的所有文件都需要统一
  - packages/*
  - cli
  - docs
  - example
  # 这个是排除不需要管理的文件
  - "!**/test/**"
```

第二步： 在 根目录的 `package.json` 文件中新增配置 `workspaces`

```json
"workspaces": [
    "packages/*",
    "cli",
    "docs",
    "example"
  ]
```

::: tip
到这里，基本配置就已经完成了！
:::




## 在子项目中的使用方法
