---
title: 初始化项目
---

## 目录结构

```js

hosp-ui
├───── docs (组件文档目录 vuepress)
├───── play (组件测试目录 用来进行组件测试)
├───── packages (组件开发目录)
├─────...其他配置文件
└───── package.json

```

## packages 目录

这是 `packages` 目录下大体的目录,可以根据需要视情况添加修改  

```js
hosp-ui
└───── packages
       ├── component (组件开发)
       ├── utils (存放公共函数)
       ├── constants (存放一些全局固定的变量)
       ├── theme-chalk (组件样式集合)
       ├── ..........
```
#### packages--->component 开发目录详解    ├──  │   └────   ─
 这里 以开发一个 button 组件为例,来描述目录情况
``` json
component
 └───── button
        ├── __tests__
        │   └────button.test.tsx (用来进行单元测试)
        │
        ├── src
        │   ├── button.vue (button 组件开发)
        │   ├── button.ts  （button props,emit 等属性定义）
        │   ├── instance.ts
        │   ├── 其他文件，按需添加修改
        │   
        │
        ├── style  (这两个是组件单独引入的样式，后面会讲解)
        │   ├──── css.ts   
        │   └──── index.ts  
        │ 
        │ 
        └────index.ts （定义组件的导出）
        
```



