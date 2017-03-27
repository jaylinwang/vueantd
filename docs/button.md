# 按钮

:::demo 按钮类型:: 通过`:type`
```html
<template>
  <v-button type="primary">Primary</v-button>
  <v-button>Default</v-button>
  <v-button type="dashed">Dashed</v-button>
  <v-button type="danger">Danger</v-button>
</template>
```
:::


:::demo 按钮尺寸:: 通过`:type`
```html
<template>
  <v-button type="primary" size="small">small</v-button>
  <v-button type="primary" size="normal">normal</v-button>
  <v-button type="primary" size="large">large</v-button>
  <v-button size="small">small</v-button>
  <v-button>normal</v-button>
  <v-button size="large">large</v-button>
</template>
```
:::

:::demo 不可用状态:: 设置`disabled`表示按钮禁用
```html
<template>
  <p>
    <v-button>Default</v-button>
    <v-button disabled>Default(disabled)</v-button>
  </p>
  <p>
    <v-button type="primary">Primary</v-button>
    <v-button type="primary" disabled>Primary(disabled)</v-button>
  </p>
  <p>
    <v-button type="dashed">Dashed</v-button>
    <v-button type="dashed" disabled>Dashed(disabled)</v-button>
  </p>
  <p>
    <v-button type="danger">Danger</v-button>
    <v-button type="danger" disabled>Danger(disabled)</v-button>
  </p>
</template>
```
:::

:::demo 按钮形状:: 设置`shape`定义按钮形状
```html
<template>
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
</template>
```
:::

:::demo 按钮形状:: 设置`shape`定义按钮形状
```html
<template>
  <p>
    <v-button type="primary" size="large" loading>Loading</v-button>
    <v-button type="primary" size="normal" loading>Loading</v-button>
    <v-button type="primary" size="small" loading>Loading</v-button>
  </p>
</template>
```
:::
