# Promise

## 源码实现
``` js
export class _Promise {
  #stateMap = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
  }
  #state = this.#stateMap.PENDING
  #result = undefined
  #handlers = []

  constructor(executor) {
    const resolve = (data) => {
      if (this.#state !== this.#stateMap.PENDING) return
      this.#result = data
      this.#state = this.#stateMap.FULFILLED
      this.#run()
    }
    const reject = (reason) => {
      if (this.#state !== this.#stateMap.PENDING) return
      this.#result = reason
      this.#state = this.#stateMap.REJECTED
      this.#run()
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  #runOne(callback, resolve, reject) {
    const isFulfilled = this.#state === this.#stateMap.FULFILLED
    if (typeof callback !== 'function') {
      isFulfilled ? resolve(this.#result) : reject(this.#result)
      return
    }

    try {
      const data = callback(this.#result)
      isFulfilled ? resolve(data) : reject(data)
    } catch(err) {
      reject(err)
    }
  }
  #run() {
    if (this.#state === this.#stateMap.PENDING) return
    while (this.#handlers.length) {
      const { onFulfilled, onRejected, resolve, reject } = this.#handlers.shift()
      if (this.#state === this.#stateMap.FULFILLED) {
        this.#runOne(onFulfilled, resolve, reject)
      } else {
        this.#runOne(onRejected, resolve, reject)
      }
    }
  }
  then(onFulfilled, onRejected) {
    return new _Promise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject
      })
      this.#run()
    })
  }
}
```

## async/await

### 1. async函数

`async`函数是ES2017引入的一种异步编程解决方案，它返回一个Promise对象。在`async`函数内部，可以使用`await`关键字来等待一个Promise对象的结果。

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```

在上面的例子中，`fetchData`函数是一个`async`函数，它使用`await`关键字来等待`fetch`和`response.json()`的结果。

### 2. await关键字

`await`关键字用于等待一个Promise对象的结果。它可以放在`async`函数内部，也可以放在`Promise`的`then()`方法中。

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => {
  console.log(data);
});
```

在上面的例子中，`await`关键字放在`fetchData`函数内部，等待`fetch`和`response.json()`的结果。然后，使用`then()`方法来处理结果。

### 3. 错误处理

`async/await`的错误处理可以使用`try/catch`语句。

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

在上面的例子中，如果`fetch`或`response.json()`发生错误，`catch`语句会捕获错误并打印出来。

### 4. 并行执行

`async/await`可以并行执行多个异步操作，并等待所有操作完成。

```javascript
async function fetchData() {
  const [data1, data2] = await Promise.all([
    fetch('https://api.example.com/data1').then(response => response.json()),
    fetch('https://api.example.com/data2').then(response => response.json())
  ]);
  return [data1, data2];
}
```

在上面的例子中，`Promise.all()`方法并行执行两个异步操作，并等待所有操作完成。然后，使用`await`关键字来等待结果。