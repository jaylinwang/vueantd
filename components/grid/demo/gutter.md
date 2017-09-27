### 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `v-row` 的 gutter 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。(n 是自然数)

::: demo
``` html
<template>
<div>
  <v-row class="row" :gutter="10">
    <v-col class="col" :span="6">
      <div class="content">col-6</div>
    </v-col>
    <v-col class="col" :span="6">
      <div class="content">col-6</div>
    </v-col>
    <v-col class="col" :span="6">
      <div class="content">col-6</div>
    </v-col>
    <v-col class="col" :span="6">
      <div class="content">col-6</div>
    </v-col>
  </v-row>
  <v-row class="row" :gutter="100">
    <v-col class="col" :span="6">
      <div class="content">col-6</div>
    </v-col>
    <v-col class="col" :span="6">
      <div class="content">col-6</div>
    </v-col>
    <v-col class="col" :span="6">
      <div class="content">col-6</div>
    </v-col>
    <v-col class="col" :span="6">
      <div class="content">col-6</div>
    </v-col>
  </v-row>
</div>
</template>


<style scope>
  .content {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #108ee6;
  }
  .row{
    margin-bottom: 15px;
  }
</style>
```
:::
