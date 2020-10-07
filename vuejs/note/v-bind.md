# 绑定 HTML Class

## 对象语法

```html
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
```

```javascript
data: {
  isActive: true,
  hasError: false
}
```

**渲染结果**

```html
    <div class="static active"></div>
```

**当然也可以**

```html
<div class="static" v-bind:class="getClass"></div>
```

```javascript
data: {
  getClass: {
    isActive: true,
    hasError: false
  }
}
```

**或者这样**

```html
<div class="static" v-bind:class="getClass()"></div>
```

```javascript
methods : {
  getClass(){
    return {
    isActive: true,
    hasError: false
    }
  }
}
```

## 数组语法

```html
  <h1 :class="['active','text']"></h1>
```

**渲染结果**

```html
  <h1 class="active text"></h1>
```

# 绑定内联样式style

## 对象语法

**CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case)(用短横线时记得需要加引号)**

```html
  <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```javascript
data: {
  activeColor: 'red',
  fontSize: 30
}
```

**或者直接用对象**

```html
  <div v-bind:style="styleObject"></div>
```

```javascript
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

## 数组语法

**可以用以下方式将几个对象组合起来**

```html
  <div v-bind:style="[baseStyles, overridingStyles]"></div>
```

```javascript
  data: {
    baseStyles: {
      color: 'red'
    },
    overridingStyles: {
      'font-size': '40px'
    }
  }
```

