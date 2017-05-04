# 下拉菜单

:::demo 基本使用::
```html
<template>
<v-dropdown>
  <a type="javascript:void(0)">
    下拉菜单
    <v-icon type="down"></v-icon>
  </a>
  <v-dropdown-menu slot="dropdown">
    <v-dropdown-item>1st menu item</v-dropdown-item>
    <v-dropdown-item>2cd menu item</v-dropdown-item>
    <v-dropdown-item>3rd menu item</v-dropdown-item>
  </v-dropdown-menu>
</v-dropdown>
</template>
```
:::

:::demo 带下拉框的按钮::
```html
<template>
<v-dropdown>
  <v-button>
    下拉菜单
    <v-icon type="down"></v-icon>
  </v-button>
  <v-dropdown-menu slot="dropdown">
    <v-dropdown-item>1st menu item</v-dropdown-item>
    <v-dropdown-item>2cd menu item</v-dropdown-item>
    <v-dropdown-item>3rd menu item</v-dropdown-item>
  </v-dropdown-menu>
</v-dropdown>
</template>
```
:::
