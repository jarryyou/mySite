# Flex布局

## 1. 什么是Flex布局？

Flex布局，即弹性盒子布局，是一种先进的布局模式，旨在提供一种更有效的方式来布局、对齐和分配容器内项目的空间，即使它们的大小未知或是动态变化的。Flex布局非常适合于各种布局需求，包括但不限于：导航栏、侧边栏、网格布局等。

## 2. Flex布局的基本概念

### 2.1 容器和项目

在Flex布局中，容器（container）和项目（items）是两个基本概念。

- 容器：使用`display: flex;`或`display: inline-flex;`的元素被称为Flex容器。
- 项目：Flex容器内的直接子元素被称为Flex项目。

### 2.2 主轴和交叉轴

Flex布局有两个轴：主轴（main axis）和交叉轴（cross axis）。

- 主轴：默认情况下，主轴是水平的，从左到右。
- 交叉轴：垂直于主轴，默认情况下，交叉轴是垂直的，从上到下。

## 3. Flex容器的属性

### 3.1 `display`

设置一个容器为Flex布局。

```css
.container {
  display: flex;
}
```

### 3.2 `flex-direction`

设置主轴的方向。

```css
.container {
  flex-direction: row; /* 默认值，主轴从左到右 */
  flex-direction: row-reverse; /* 主轴从右到左 */
  flex-direction: column; /* 主轴从上到下 */
  flex-direction: column-reverse; /* 主轴从下到上 */
}
```

### 3.3 `justify-content`

设置项目在主轴上的对齐方式。

```css
.container {
  justify-content: flex-start; /* 默认值，左对齐 */
  justify-content: flex-end; /* 右对齐 */
  justify-content: center; /* 居中对齐 */
  justify-content: space-between; /* 两端对齐，项目之间的间隔相等 */
  justify-content: space-around; /* 项目两侧的间隔相等 */
  justify-content: space-evenly; /* 项目之间的间隔相等，两侧的间隔也相等 */
}
```

### 3.4 `align-items`

设置项目在交叉轴上的对齐方式。

```css
.container {
  align-items: flex-start; /* 顶部对齐 */
  align-items: flex-end; /* 底部对齐 */
  align-items: center; /* 垂直居中 */
  align-items: baseline; /* 基线对齐 */
  align-items: stretch; /* 默认值，拉伸项目以填满容器 */
}
```

### 3.5 `align-content`

设置多行项目在交叉轴上的对齐方式。

```css
.container {
  align-content: flex-start; /* 顶部对齐 */
  align-content: flex-end; /* 底部对齐 */
  align-content: center; /* 垂直居中 */
  align-content: space-between; /* 两端对齐，项目之间的间隔相等 */
  align-content: space-around; /* 项目两侧的间隔相等 */
  align-content: space-evenly; /* 项目之间的间隔相等，两侧的间隔也相等 */
  align-content: stretch; /* 默认值，拉伸项目以填满容器 */
}
```

## 4. Flex项目的属性

### 4.1 `order`

设置项目的排列顺序。

```css
.item {
  order: 0; /* 默认值 */
}
```

### 4.2 `flex-grow`

设置项目的放大比例。

```css
.item {
  flex-grow: 0; /* 默认值，不放大 */
}
```

### 4.3 `flex-shrink`

设置项目的缩小比例。

```css
.item {
  flex-shrink: 1; /* 默认值，等比例缩小 */
}
```

### 4.4 `flex-basis`

设置项目在主轴上的初始大小。

```css
.item {
  flex-basis: auto; /* 默认值，项目的本来大小 */
}
```

### 4.5 `align-self`

设置项目在交叉轴上的对齐方式，可以覆盖容器的`align-items`属性。

```css
.item {
  align-self: auto; /* 默认值，继承容器的align-items属性 */
  align-self: flex-start; /* 顶部对齐 */
  align-self: flex-end; /* 底部对齐 */
  align-self: center; /* 垂直居中 */
  align-self: baseline; /* 基线对齐 */
  align-self: stretch; /* 拉伸项目以填满容器 */
}
```

## 5. Flex布局的实例

### 5.1 垂直居中

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;
  align-items: center;
  height: 200px;
  border: 1px solid #000;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #f00;
  margin: 10px;
}
```

### 5.2 网格布局

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 300px;
  border: 1px solid #000;
}

.item {
  width: calc(33.333% - 20px);
  height: 100px;
  background-color: #f00;
  margin: 10px;
}
```
