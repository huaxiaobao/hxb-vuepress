---
title: github 部署
---

[[toc]]

## 发布到 github.io
若我们在使用项目的时候，没有关联到 github 仓库,那我们先需要对 github 仓库进行关联
关联完成之后，我们需要做如下操作：

###  修改 `config.js` 文件
:::tip 修改 base 路径
基路径的修改，和你 github 的目录结构有关

 如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 base 默认即是 "`/`"。

如果你打算发布到 ` https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 base 设置为 "`/<REPO>/`"。

换种理解，如果你的仓库名字 my-vupress,你的代码直接放在这个里面，你就不需要修改路径，如果你的代码是放在 my-vuepress 下面的 vuepress 目录，你的 `base` 就要设置成  `/my-vuepress/`
:::

## 新增 `deploy.sh `文件   

:::warning 注意：
1、请注意修改 文件中  `cd docs/.vuepress/dist` 中的 docs，这个 docs 为 根目录的名称

2、修改 ` git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages` 中的 `usename`和 `<REPO>`(项目目录)
:::

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

```

## 新增 package.json 脚本
在 `package.json ` 文件的 `script` 中新增 如下脚本
```json
"deploy": "bash deploy.sh"
```

## github 仓库设置

在github 仓库中，找到 gh-pages 这个分支，然后在 右边的设置按钮填写相关信息，在Website 设置中， Use your GitHub Pages website 打上勾，然后会出来一个网址，记录好这个网址，然后保存！

## 效果

访问 刚刚在github 中得到那个网址，我们整个的 github 部署流程就完成了！