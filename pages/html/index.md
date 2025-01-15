# html

## 1.html行内元素、块级元素、行内块元素
### 行内元素 `<a> <span> <b> <i> <img> <br>`
### 块级元素 `<div> <p> <h1> <h2> <h3> <h4> <h5> <h6> <ol> <ul> <li> <dl> <dt> <dd>`

## 2.html doctype
`<!DOCTYPE>` 声明有助于浏览器以兼容模式渲染页面，它应该放在HTML文档的最开头，在`<html>`标签之前。这个声明告诉浏览器文档使用的是哪个HTML版本。

## 3.html`<meta>`标签
HTML中的`<meta>`标签用于提供关于HTML文档的元数据。这些元数据不会显示在页面上，但可以被浏览器、搜索引擎等解析和利用。以下是一些常见的`<meta>`标签属性：

### 1. `charset`
定义文档的字符编码。
```html
<meta charset="UTF-8">
```

### 2. `name`
提供文档相关的元数据名称。
```html
<meta name="description" content="页面描述内容">
<meta name="keywords" content="关键词1, 关键词2">
<meta name="author" content="作者姓名">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 3. `content`
与`name`属性一起使用，提供关于文档的元数据内容。
```html
<meta name="description" content="这是一个示例页面描述。">
```

### 4. `http-equiv`
模拟HTTP头部，用于设置响应头信息。
```html
<meta http-equiv="refresh" content="30">
<meta http-equiv="Cache-Control" content="no-cache">
```

### 5. `property`
用于定义自定义元数据属性，通常与Open Graph协议或Schema.org等元数据标准一起使用。
```html
<meta property="og:title" content="页面标题">
<meta property="og:description" content="页面描述">
<meta property="og:image" content="图片URL">
```

### 6. `scheme`
定义用于解释`content`属性值的方案。
```html
<meta name="ICBM" content="48.858, 2.294" scheme="geo:wgs84">
```

### 7. `media`
用于指定媒体查询，与`<link>`和`<style>`标签一起使用，以提供针对不同设备的样式。
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 8. `pragma`
用于控制页面缓存行为。
```html
<meta http-equiv="pragma" content="no-cache">
```

### 9. `expires`
用于指定页面内容的过期时间。
```html
<meta http-equiv="expires" content="Wed, 21 Oct 2021 07:28:00 GMT">
```

### 10. `refresh`
用于设置页面自动刷新的时间间隔。
```html
<meta http-equiv="refresh" content="5;url=https://www.example.com/">
```

### 11. `set-cookie`
用于通过HTTP响应头部设置cookie。
```html
<meta http-equiv="set-cookie" content="name=value; expires=Wed, 21 Oct 2021 07:28:00 GMT; path=/">
```

### 12. `content-security-policy`
用于实施内容安全策略，以帮助防止跨站脚本攻击（XSS）等安全漏洞。
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.google.com;">
```

### 13. `x-ua-compatible`
用于指定Internet Explorer浏览器的文档模式。
```html
<meta http-equiv="x-ua-compatible" content="IE=edge">
```

## 4.src和href的区别
	src和href都是用来引用外部的资源，它们的区别如下：

- src： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。  
- href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。

## 5.cookie、sessionStorage 和 localStorage 的区别
| | cookie | sessionStorage | localStorage |
|----|----------------------------------|----------------|--------------|
| 由谁初始化 | 客户端或服务器，服务器可以使用 Set-Cookie 请求头| 客户端 | 客户端 |
| 过期时间 | 	手动设置 | 永不过期           | 当前页面窗口关闭 |
| 在当前浏览器会话（browser sessions）中是否保持不变 | 取决于是否设置了过期时间 | 是 | 是 |
| 是否随着每个 HTTP 请求发送给服务器 | 是，Cookies 会通过 Cookie 请求头，自动发送给服务器 | 否 | 否 |
| 容量（每个域名） | 4kb | 5MB | 5MB |
| 访问权限 | 任意窗口 | 任意窗口 | 当前页面窗口 |

