# 自定义指令v-copy

## 代码实现
```js

import clipboard from 'clipboard';

let _el = document.createElement('div')
const _clipboard = new clipboard(_el)
_clipboard.listenClick(_el);
_clipboard.on('success', (e) => {
  console.log('复制成功')
})
// 自定义指令 v-copy
export const vCopy = {
  mounted(el) {
    let copyBtn = document.createElement('button');
    copyBtn.innerText = '复制';
    copyBtn.className = 'copyBtn';
    el.appendChild(copyBtn);
    copyBtn.onclick = () => {
      console.log(1234567);
      _clipboard.text = () => el.innerText.slice(0, -2);
      _el.click();
    }
  }
};
```

## 使用方式
```js
import { vCopy } from './directives/vCopy'
```
```html
<template>
  <div>
    <p v-copy>点击复制这段文本</p>
  </div>
</template>
```