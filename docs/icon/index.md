# Icon 图标

语义化的矢量图形。

## 图标命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）；
- 命名顺序：`[图标名]-[形状?]-[描线?]-[方向?]`。

> _`?` 为可选_

## 如何使用

使用 `<v-icon></v-icon>` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```html
<v-icon type="loading" spin></v-icon>
```

## 图标列表

> 点击图标复制代码

### 方向类图标

<IconSet group-name="direction"></IconSet>

### 提示建议性图标

<IconSet group-name="suggestion"></IconSet>


### 网站通用图标

<IconSet group-name="other"></IconSet>

### 品牌标识图标

<IconSet group-name="logo"></IconSet>

### 旋转图标

<v-icon type="loading" spin></v-icon>

## API

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| type | 图标类型 | String | - |
| spin | 是否有旋转动画 | Boolean | false |

<script>
  import IconSet from 'site/widget/icon-set.vue'
  export default {
    components: {
      IconSet
    }
  }
</script>

