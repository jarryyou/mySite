# 部分源码实现
``` js
export let _instanceof = function (left, right) {
	let proto = Object.getPrototypeOf(left)
	while (true) {
		if (proto === null) return false
		if (proto === right.prototype) return true
		proto = Object.getPrototypeOf(proto)
	}
}

// console.log(_instanceof(c, Array)) // true

export let _new = function (fn, ...args) {
	let obj = Object.create(fn.prototype)
	let res = fn.apply(obj, args)
	return res instanceof Object ? res : obj
}

export let _call = (fn, obj, ...args) => {
	obj = obj || {}
	let key = Symbol(fn)
	obj[key] = fn
	let res = obj[key](...args)
	delete obj[key]
	return res
}

export let _apply = (fn, obj, args) => {
	obj = obj || {}
	let key = Symbol(fn)
	obj[key] = fn
	let res = obj[key](...args)
	delete obj[key]
	return res
}

let arr = [0, 1, 2, 3, 4, 5]

// console.log(Math.max.call(null, ...arr))

// console.log(_apply(Math.max, null, arr))
```