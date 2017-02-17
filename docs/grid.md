# 布局

:::demo 一般布局:: 通过`:span`
```html
<template>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="24">
      <div class="filler">col-24</div>
    </v-col>
  </v-row>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="12">
      <div class="filler">col-12</div>
    </v-col>
    <v-col class="demo-col" :span="12">
      <div class="filler">col-12</div>
    </v-col>
  </v-row>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="8">
      <div class="filler">col-8</div>
    </v-col>
    <v-col class="demo-col" :span="8">
      <div class="filler">col-8</div>
    </v-col>
    <v-col class="demo-col" :span="8">
      <div class="filler">col-8</div>
    </v-col>
  </v-row>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
  </v-row>
</template>
<style>
  .filler {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #108ee6;
  }

  .demo-row:not(:last-child) {
    margin-bottom: 15px;
  }

  .demo-col:nth-child(2n) .filler {
    background: #47AFFF;
  }

</style>
```
:::

:::demo 栅格间隔::row
```html
<template>
  <v-row class="demo-row" :gutter="10">
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
  </v-row>
  <v-row class="demo-row" :gutter="100">
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
  </v-row>
</template>
<style>
  .filler {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #108ee6;
  }
  .demo-row:not(:last-child) {
    margin-bottom: 15px;
  }

</style>
```
:::

:::demo offset:: offset
```html
<template>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="6">
      <div class="filler">col-6</div>
    </v-col>
  </v-row>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="6" :offset="18">
      <div class="filler">col-6 col-offset-18</div>
    </v-col>
  </v-row>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="6" :offset="6">
      <div class="filler">col-6 col-offset-6</div>
    </v-col>
    <v-col class="demo-col" :span="6" :offset="6">
      <div class="filler">col-6 col-offset-6</div>
    </v-col>
  </v-row>
</template>
<style>
  .filler {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #108ee6;
  }
  .demo-row:not(:last-child) {
    margin-bottom: 15px;
  }
</style>

```
:::

:::demo 绝对布局:: push/pull
```html
<template>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="6" :pull="12">
      <div class="filler">box1 col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">box2 col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6" :pull="18">
      <div class="filler">box3 col-6</div>
    </v-col>
  </v-row>
  <v-row class="demo-row">
    <v-col class="demo-col" :span="6">
      <div class="filler">box1 col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6">
      <div class="filler">box2 col-6</div>
    </v-col>
    <v-col class="demo-col" :span="6" :push="18">
      <div class="filler">box3 col-6</div>
    </v-col>
  </v-row>
</template>
<style>
  .filler {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #108ee6;
  }

  .demo-row:not(:last-child) {
    margin-bottom: 15px;
  }

</style>

```
:::

:::demo media query:: 响应式
```html
<template>
  <v-row class="demo-row">
    <v-col class="demo-col" :md="8">
      <div class="filler">col-8</div>
    </v-col>
    <v-col class="demo-col" :md="8">
      <div class="filler">col-8</div>
    </v-col>
    <v-col class="demo-col" :md="8">
      <div class="filler">col-8</div>
    </v-col>
  </v-row>
  <v-row class="demo-row">
    <v-col class="demo-col" :md="{span:8,offset:8}">
      <div class="filler">col-8</div>
    </v-col>
    <v-col class="demo-col" :md="8">
      <div class="filler">col-8</div>
    </v-col>
  </v-row>
</template>
<style>
  .filler {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #108ee6;
  }

  .demo-row:not(:last-child) {
    margin-bottom: 15px;
  }

</style>

```
:::

<style>
.filler {
  width:100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background-color: #108ee6;
}
.demo-row:not(:last-child){
  margin-bottom: 15px;
}
.demo-col:nth-child(2n) .filler{
  background: #47AFFF;
}
</style>

