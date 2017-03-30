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
    <v-button size="normal" loading>Loading</v-button>
    <v-button type="danger" size="small" loading>Loading</v-button>
  </p>
  <p>
  <v-button :loading="loading" @click="toggleLoading">
    click toggle loading
  </v-button>
  </p>
</template>
```
:::


# 按钮组

:::demo 按钮组:: 设置`shape`定义按钮形状
```html
<template>
<p>
  <v-button-group>
    <v-button type="primary">
       Left
    </v-button>
    <v-button type="primary">
       Right
    </v-button>
  </v-button-group>
  <v-button-group>
    <v-button type="primary">
      Left
    </v-button>
    <v-button type="primary">
       Center
    </v-button>
    <v-button type="primary" disabled>
       Right
    </v-button>
  </v-button-group>
</p>
<p>
  <v-button-group>
    <v-button>
       Left
    </v-button>
    <v-button>
       Right
    </v-button>
  </v-button-group>
  <v-button-group>
    <v-button>
      Left
    </v-button>
    <v-button disabled>
       Center
    </v-button>
    <v-button>
       Right
    </v-button>
  </v-button-group>
</p>
<p>
  <v-button-group>
    <v-button type="dashed">
       Left
    </v-button>
    <v-button type="dashed">
       Right
    </v-button>
  </v-button-group>
  <v-button-group>
    <v-button type="dashed">
      Left
    </v-button>
    <v-button type="dashed">
       Center
    </v-button>
    <v-button type="dashed">
       Right
    </v-button>
  </v-button-group>
</p>
</template>
```
:::

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    toggleLoading(){
      console.log('ok');
      this.loading = !this.loading;
    }
  },
}
</script>
