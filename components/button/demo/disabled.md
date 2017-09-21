### 不可用状态

添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

::: demo

```html
<template>
  <div id="demo">
    <p>
      <v-button type="primary">Primary</v-button>
      <v-button>Default</v-button>
      <v-button type="dashed">Dashed</v-button>
      <v-button type="danger">Danger</v-button>
    </p>
    <p>
      <v-button type="primary" disabled>Primary</v-button>
      <v-button disabled>Default</v-button>
      <v-button type="dashed" disabled>Dashed</v-button>
      <v-button type="danger" disabled>Danger</v-button>
    </p>
  </div>
</template>
```
:::
