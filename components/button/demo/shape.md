### 形状按钮

- 当需要在 `v-button` 内嵌入 `v-icon` 时，可以设置 `icon` 属性，或者直接在 `v-icon` 内使用 `v-icon` 组件。
- 如果想控制 `v-icon` 具体的位置，只能直接使用 `v-icon` 组件，而非 icon 属性。
- 使用 `shape` 属性控制按钮形状

::: demo
```html
<template>
<div>
  <p>
    <v-button icon="search" shape="circle"></v-button>
    <v-button icon="search">
      Search
    </v-button>
    <v-button type="primary" icon="search" shape="circle"></v-button>
    <v-button type="primary" icon="search">
      Search
    </v-button>
  </p>
  <p>
    <v-button type="dashed" icon="search" shape="circle"></v-button>
    <v-button type="dashed" icon="search">
      Search
    </v-button>
    <v-button type="danger" icon="search" shape="circle"></v-button>
    <v-button type="danger" icon="search">
      Search
    </v-button>
  </p>
</div>
</template>

```
:::
