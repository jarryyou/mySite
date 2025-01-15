# worker
worker是js的子线程，用于执行一些耗时的操作，不会阻塞主线程，从而提高页面的性能。

## worker的使用
1. 创建worker
```javascript
const worker = new Worker('worker.js');
```
2. 向worker发送消息
```javascript
worker.postMessage(data);
```
3. 监听worker的消息
```javascript
worker.onmessage = function(event) {
  const data = event.data;
  // 处理消息
};
```
4. 关闭worker
```javascript
worker.terminate();
```

## worker的通信