### 列排序

通过使用 `push` 和 `pull` 类就可以很容易的改变列的顺序。

::: demo
``` html
<template>
<div>
  <v-row class="row">
    <v-col
      class="col"
      :span="6"
      :pull="12">
      <div class="content">box1 col-6</div>
    </v-col>
    <v-col
      class="col"
      :span="6">
      <div class="content">box2 col-6</div>
    </v-col>
    <v-col
      class="col"
      :span="6"
      :pull="18">
      <div class="content">box3 col-6</div>
    </v-col>
  </v-row>
  <v-row class="row">
    <v-col
      class="col"
      :span="6">
      <div class="content">box1 col-6</div>
    </v-col>
    <v-col
      class="col"
      :span="6">
      <div class="content">box2 col-6</div>
    </v-col>
    <v-col
      class="col"
      :span="6"
      :push="18">
      <div class="content">box3 col-6</div>
    </v-col>
  </v-row>
</div>
</template>

<style>
  .content {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #108ee6;
  }
  .row{
    margin-bottom: 16px;
  }
</style>
```
:::
