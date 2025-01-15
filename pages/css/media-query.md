# CSS Media Query

## 1. 基本语法

Media Query的基本语法如下：

```css
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```

- `not`：排除某种媒体类型。
- `only`：指定某种媒体类型。
- `mediatype`：媒体类型，如`screen`、`print`等。
- `expressions`：媒体特性，如`width`、`height`、`resolution`等。

## 2. 媒体类型

媒体类型用于指定Media Query应用于哪种设备或环境。常见的媒体类型有：

- `all`：适用于所有设备。
- `print`：适用于打印机和打印预览。
- `screen`：适用于计算机屏幕、平板电脑、智能手机等。

## 3. 媒体特性

媒体特性用于指定Media Query的条件。常见的媒体特性有：

- `width`：视口宽度。
- `height`：视口高度。
- `resolution`：分辨率。
- `orientation`：设备方向，`portrait`表示竖屏，`landscape`表示横屏。
- `color`：颜色能力。
- `color-index`：颜色索引。
- `aspect-ratio`：宽高比。
- `device-aspect-ratio`：设备宽高比。
- `device-width`：设备宽度。
- `device-height`：设备高度。
- `grid`：是否支持网格布局。

## 4. Media Query的实例

### 4.1 根据屏幕宽度应用不同的样式

```css
/* 当屏幕宽度小于600px时 */
@media screen and (max-width: 600px) {
  body {
    background-color: #f00;
  }
}

/* 当屏幕宽度大于等于600px时 */
@media screen and (min-width: 600px) {
  body {
    background-color: #00f;
  }
}
```

### 4.2 根据设备方向应用不同的样式

```css
/* 当设备方向为竖屏时 */
@media screen and (orientation: portrait) {
  body {
    background-color: #f00;
  }
}

/* 当设备方向为横屏时 */
@media screen and (orientation: landscape) {
  body {
    background-color: #00f;
  }
}
```