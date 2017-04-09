# 输入框 Input

:::demo 基本使用::
```html
<template>
<v-row>
  <v-col :span="24">
    <v-input placeholder="Basic input"></v-input>
  </v-col>
</v-row>
</template>
```
:::

:::demo 尺寸:: 通过`size`修改尺寸
```html
<template>
<v-row :gutter="10">
  <v-col :span="6">
    <v-input size="small" placeholder="Small size input"></v-input>
  </v-col>
  <v-col :span="6">
    <v-input placeholder="Basic size input"></v-input>
  </v-col>
  <v-col :span="6">
    <v-input size="large" placeholder="Large size input"></v-input>
  </v-col>
</v-row>
</template>
```
:::
