# 浅拷贝

### 1. Object.assign

### 2. 扩展运算符

### 3. Array.prototype.slice()

### 4. Array.prototype.concat()

### 5. Array.from()  


# 深拷贝

### 1. JSON.parse(JSON.stringify())

### 2. 递归拷贝
```js
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}
```

### 3. structuredClone
```js
const obj = { a: 1, b: { c: 2 } };
const copy = structuredClone(obj);
```