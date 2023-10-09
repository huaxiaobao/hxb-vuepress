---
title: 了解socket.io
---

## socket.io

介绍 
::: tip 
Socket.IO 是一个库，可以在客户端和服务器之间实现 低延迟, 双向 和 基于事件的 通信。

[socket.io 官网](https://socket.io/zh-CN/docs/v4/)
:::

## 入门
接下来，跟随示例，来进行 socket.io 初体验

#### 1、首先搭建 node 后台

创建文件夹 `mySocketIoTest` ,并在根目录下面初始化 package.json 文件
  `yarn init -y`

#### 2、组织项目文件夹目录
在  `mySocketIoTest` 目录下，index.js 文件  

#### 3、安装好项目依赖
 分别为 `express`   `socket.io`
 
 命令： `yarn add  express socket.io`

#### 4、在 index.js 文件夹中编写如下代码
```js

// 创建一个 http 服务
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//引入 socket.io
const { Server } = require("socket.io");
const io = new Server(server);

//访问端口 3000 的时候，返回 index.html 文件
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//socket 前后端连接监听
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

//监听 3000 端口
server.listen(3000, () => {
  console.log('listening on *:3000');
});

```

####  5、在根目录下 创建 html 文件
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
      body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }

      #form { background: rgba(0, 0, 0, 0.15); padding: 0.25rem; position: fixed; bottom: 0; left: 0; right: 0; display: flex; height: 3rem; box-sizing: border-box; backdrop-filter: blur(10px); }
      #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
      #input:focus { outline: none; }
      #form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; }

      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages > li { padding: 0.5rem 1rem; }
      #messages > li:nth-child(odd) { background: #efefef; }
    </style>
  </head>
  <body>
    <ul id="messages"></ul>
    <form id="form" action="">
      <input id="input" autocomplete="off" /><button>Send</button>
    </form>
  </body>
</html>

<script src="./node_modules/socket.io/client-dist/socket.io.js"></script>
<script>
  var socket = io();

  var form = document.getElementById('form');
  var input = document.getElementById('input');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      //前后端通信
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });

  //监听后端 发送的事件
   socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
</script>
```


#### 6、运行项目
打开终端，运行 `node index.js`

::: tip 案例小总结

首先我们搭建了一个后台的服务，引入了 socket.io ,并开放了一个 3000 的端口，对 socket.io 的连接进行一个监听，在监听的过程中，我们注册了一个 chart message 事件，通过这个事件来处理前端发过来的信息，其次，当我们访问 端口 3000 的时候，我们返回 index.html 文件。

打开 界面之后，我们的 index.html 会自动给后台发送一个 连接请求，后台监听之后，给前台发送消息内容，前端接收到信息，创建 li标签,并展示在界面上！

前后端通信原理：

前后端在建立连接之后就可以通信了，他们的通信原理是这样子的： 

通过  emit 进行发送，通过 on 进行事件接收，和 vue 的 父子组件之间的通信类似

:::

## 客户端和服务器连接

## 客户端和服务器之间的通信


## 房间


## 断开连接


## vuex 的应用


## 各种 api 介绍