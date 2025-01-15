# WebSocket
WebSocket是一种网络通信协议，它提供了在单个TCP连接上进行全双工通信的能力。WebSocket协议被设计用于在客户端（如浏览器）和服务器之间建立持久连接，以便进行实时数据交换。

## 主要特点
1. **全双工通信**  
WebSocket支持全双工通信，即数据可以在两个方向上同时传输。这与传统的HTTP请求/响应模型不同，HTTP请求/响应模型是单向的，客户端发送请求后，必须等待服务器的响应。
2. **持久连接**  
WebSocket连接一旦建立，就可以保持开放状态，直到客户端或服务器主动关闭连接。这使得WebSocket非常适合需要实时数据交换的应用，如在线聊天、实时游戏、股票交易等。
3. **低延迟**  
由于WebSocket连接是持久的，数据传输不需要每次都建立和关闭连接，从而减少了延迟。
4. **协议升级**  
WebSocket协议通常在HTTP协议的基础上进行升级。客户端和服务器通过HTTP握手过程，协商将连接升级为WebSocket连接。
## 工作原理
WebSocket协议的工作原理基于HTTP协议。当客户端和服务器建立WebSocket连接时，它们首先进行一个HTTP握手过程。客户端发送一个特殊的HTTP请求，请求头部包含Upgrade: websocket字段，表示请求将连接升级为WebSocket连接。服务器收到请求后，如果同意升级连接，会返回一个特殊的HTTP响应，响应头部包含Upgrade: websocket字段。

一旦连接升级为WebSocket连接，客户端和服务器就可以通过WebSocket协议进行全双工通信。数据传输基于帧（Frame）进行，每个帧包含一个头部和一个数据部分。头部包含帧的类型、长度和标志等信息，数据部分包含实际的数据。

# 使用WebSocket

## 客户端（如浏览器）

在客户端，你可以使用JavaScript的`WebSocket` API来创建和管理WebSocket连接。以下是一个简单的示例：

```javascript
// 创建一个WebSocket连接
const socket = new WebSocket('ws://example.com/socket');

// 连接打开时触发
socket.onopen = function(event) {
    console.log('WebSocket连接已打开');
    
    // 发送数据到服务器
    socket.send('Hello Server!');
};

// 接收到服务器消息时触发
socket.onmessage = function(event) {
    console.log('接收到服务器消息：', event.data);
};

// 连接关闭时触发
socket.onclose = function(event) {
    console.log('WebSocket连接已关闭');
};

// 连接发生错误时触发
socket.onerror = function(error) {
    console.error('WebSocket发生错误：', error);
};
```

在这个示例中，我们首先创建了一个指向`ws://example.com/socket`的WebSocket连接。然后，我们定义了几个事件处理函数，用于处理连接的打开、消息接收、关闭和错误。

## 服务器端

在服务器端，你可以使用各种编程语言和框架来处理WebSocket连接。以下是一个使用Node.js和`ws`库的简单示例：

```javascript
const WebSocket = require('ws');

// 创建一个WebSocket服务器
const wss = new WebSocket.Server({ port: 8080 });

// 监听连接事件
wss.on('connection', function(socket) {
    console.log('WebSocket连接已建立');

    // 接收到客户端消息时触发
    socket.on('message', function(message) {
        console.log('接收到客户端消息：', message);

        // 发送数据到客户端
        socket.send('Hello Client!');
    });

    // 连接关闭时触发
    socket.on('close', function() {
        console.log('WebSocket连接已关闭');
    });

    // 连接发生错误时触发
    socket.on('error', function(error) {
        console.error('WebSocket发生错误：', error);
    });
});
```
