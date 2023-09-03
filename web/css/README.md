---
title: css
sidebar: auto
---

废话不多说，原始的 css  随着大型的项目样式的增多，已经不在满足项目的需求了，因此慢慢被进行优化，后来出现了 less sass stylus 等样式插件，有了插件，就大大的简化了写样式的烦恼，但是万变不离其宗，最终都是回归到原始的 css,我们都是站在前人的肩膀上！
## sass 
::: warning
less 和 stylus 用的少，因此着重介绍 sass

[sass官网](https://www.sass.hk/)
:::

sass 是用编写样式的一种方式，通过灵活的语法和便捷的书写方式，获得青睐！

## sass 安装 

```js
pnpm add -D sass   // 看自己喜欢使用哪种包管理器 
```

配置: 我们用脚手架创建的项目,已经内置了一些解析 css的 loader,如 vue3 ,vue2,当然,如果你想自己手动配置的化,在配置文件中配置如下代码:

::: warning 注意
在配置之前,需要安装下 sass-loader   style-loader
`npm install sass-loader style-loader -D`
:::

```js
module.exports = {
  module:{
    rules:[
      {
        test:/\.s[ac]ss/i,
        use:[
          'style-loader',
          'sass-loader'
        ]
      }
    ]
  }
}


```


## sass 语法详解
::: tip
基础语法官网有,这里不再做详细的赘述  [sass  官网地址](https://www.sass.hk/guide/)
:::

## sass 基本类型
- string
- number
-  数组 (Lists)
- 布尔型
- 空值
-  Maps
 
 ## 数组的定义:
  这里主要提及一个 list<数组> 

  现在定义两个数组: `(1,2,3)` `(1 2 3,4 5 6)` ,数组元素之间用 `,` 进行分割
 - 数组   `(1,2,3)` : 表示一个数组中有 1,2,3 这三个元素
 - 数组 `(1 2 3,4 5 6)` : 表示 一个数组中有两个元素, 元素1: ` 1 2 3`,元素2: `4 5 6`,  用 js 的话来说,就是 数组的嵌套  `[[1,2,3],[4,5,6]]`

## sass 内置模块
sass 为了更加方便使用,内置了一些模块,方便我们使用.

:::tip 
这些模块其实就相当于 js 的一些内置的小函数,比如  string.slice()

具体有哪一些方法，自己百度搜索，不做详细介绍
:::

string 模块
引入：
```scss
@use 'sass:string';

//使用 在需要用的地方直接写就好了 
string.slice(xxx,xxx )

```

color  模块
color 模块方便我们对色彩做一些调整
引入
```scss
@use 'sass:color';

//使用
color.ie-hex-str($color), 4)
```

## 函数 function 使用
为了实现某一功能，我们需要用到函数
 函数自定义：   
 关键词： `@function`--表明是个函数， `@return`---函数返回值（必须有）
 ```scss
@function grid-width($n) {
  @return $n * 10;
}

 ```


## 条件语句 if
关键词: `@if`,也可以和 `@else if`以及 `@else` 使用

```scss
p {
  @if 1 + 1 == 2 { border: 1px solid; }
  @if 5 < 3 { border: 2px dotted; }
  @if null  { border: 3px double; }
}

```

```scss
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}

```

## 循环语句 for 和 each
`@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：`@for $var from <start> through <end>`，或者 `@for $var from <start> to <end>`，区别在于 `through` 与 `to` 的含义：当使用 `through` 时，条件范围包含 `<start>` 与 `<end>` 的值，而使用 to 时条件范围只包含 `<start>` 的值不包含 `<end>` 的值。另外，`$var` 可以是任何变量，比如 `$i；<start> 和 <end>` 必须是整数值。

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

```

`@each` 指令的格式是 ` $var in <list>, $var` 可以是任何变量名，比如 `$length` 或者 `$name`，而 `<list>` 是一连串的值，也就是值列表。

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

## 混入 @mixin 、 @include 、 @content 
混合指令（Mixin）用于定义可重复使用的样式，避免了使用无语意的 class，比如 `.float-left`。混合指令可以包含所有的 CSS 规则，绝大部分 Sass 规则，甚至通过参数功能引入变量，输出多样化的样式。

#### 定义混合指令 @mixin:

混合指令的用法是在 @mixin 后添加名称与样式，比如名为 large-text 的混合通过下面的代码定义：
```scss
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}
```

#### 引用混合样式 @include
使用 @include 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）

```scss
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```

#### @content 使用
@content 配合 mixins 进行定义

在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 @content 标志的地方
```scss
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}

```

输出：
```scss
* html #logo {
  background-image: url(/logo.gif);
}
```

:::warning 注意
 当 `@content` 在指令中出现过多次或者出现在循环中时，额外的代码将被导入到每一个地方。
  换句话，在你每调用一次 mixin时， 就会被引入一次，如果写了多余的代码，那么这些多余的代码就会被多次导入。因此要注意使用场景。
:::

## 未完待续。。。。。。