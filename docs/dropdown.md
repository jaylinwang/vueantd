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
    <v-icon type="down" style="margin-left:5px"></v-icon>
  </v-button>
  <v-dropdown-menu slot="dropdown">
    <v-dropdown-item>1st menu item</v-dropdown-item>
    <v-dropdown-item>2cd menu item</v-dropdown-item>
    <v-dropdown-item>3rd menu item</v-dropdown-item>
  </v-dropdown-menu>
</v-dropdown>
<v-dropdown
  type="splitButton">
  分离的下拉菜单
  <v-dropdown-menu slot="dropdown">
    <v-dropdown-item>1st menu item</v-dropdown-item>
    <v-dropdown-item>2cd menu item</v-dropdown-item>
    <v-dropdown-item>3rd menu item</v-dropdown-item>
  </v-dropdown-menu>
</v-dropdown>
</template>
```
:::

:::demo 不同方向的按钮::
```html
<template>
<p>
  <v-dropdown  placement="bottomRight">
    <v-button>
      dropdown bottom right
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown  placement="bottomCenter">
    <v-button>
      dropdown bottom center
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown placement="bottomLeft">
    <v-button>
      dropdown bottom left
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
</p>
<p>
  <v-dropdown placement="topLeft">
    <v-button>
      dropdown top left
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown placement="topCenter">
    <v-button>
      dropdown top center
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown placement="topRight">
    <v-button>
      dropdown top right
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
</p>
</template>
```
:::


:::demo 触发方式::
```html
<template>
<v-dropdown trigger="click">
  <v-button>
    下拉菜单
    <v-icon type="down" style="margin-left:5px"></v-icon>
  </v-button>
  <v-dropdown-menu slot="dropdown">
    <v-dropdown-item>1st menu item</v-dropdown-item>
    <v-dropdown-item>2cd menu item</v-dropdown-item>
    <v-dropdown-item>3rd menu item</v-dropdown-item>
  </v-dropdown-menu>
</v-dropdown>
<v-dropdown
  type="splitButton"
  trigger="click">
  分离的下拉菜单
  <v-dropdown-menu slot="dropdown">
    <v-dropdown-item>1st menu item</v-dropdown-item>
    <v-dropdown-item>2cd menu item</v-dropdown-item>
    <v-dropdown-item>3rd menu item</v-dropdown-item>
  </v-dropdown-menu>
</v-dropdown>
</template>
```
:::
