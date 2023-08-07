---
title: vuepress 使用
---
哈哈，恭喜你终于找到了 vuepress 的组织了，接下来跟随我的脚步来一起玩转 vuepress 吧！


 
 ## 俗话说，工欲善其事必先利其器
接下来介绍下这几个利器网站：
### markdown
  markdown 语法贯穿我们整个项目，所以了解它的使用十分必要！   
  它的常用语法不多，可以边学边用

::: tip  
[markdown 网址](https://markdown.com.cn/)<br>

:::

### front matter 
这是专门为 markdown 做一些配置的一种语法格式,需要积累 

基本规则：   
- front matter 必须是 markdown 文件中的第一部分   
- 并且必须采用在三点划线之间书写的有效的 YAML
- 在写属性的时候，冒号后面必须空一格<br>
举例：

```md
---
title: Blogging with VuePress
lang: zh-CN
---
```

常见的配置：
```js
title:  文档标题

```
