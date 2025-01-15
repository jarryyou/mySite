# 防抖与节流

## 源码实现
``` js
// 防抖函数 n秒内再触发重置执行器，重新计时n秒后执行
export function _debounce(fn, delay) {
	let timer = null
	return function () {
		clearTimeout(timer)
		let context = this
		timer = setTimeout(() => {
			fn.apply(context, arguments)
		}, delay)
	}
}

// 节流函数 第一次点击之后n秒后触发一次，在此期间点击不会再次触发，n秒后再次点击则再过n秒触发一次
export function _throttle(fn, delay) {
	let timer = null
	return function () {
		if (timer) {
			return
		}
		let context = this
		timer = setTimeout(() => {
			fn.apply(context, arguments)
			timer = null
		}, delay)
	}
}
```
## 使用场景
- 防抖：搜索框输入，按钮点击，窗口大小改变
- 节流：滚动，窗口大小改变，鼠标移动