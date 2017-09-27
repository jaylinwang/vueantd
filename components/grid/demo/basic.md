### 基础栅格

使用单一的一组 `v-row` 和 `v-col` 栅格组件，就可以创建一个基本的栅格系统，所有列（`v-col`）必须放在行 (`v-row`) 内。

::: demo
``` html
<template>
<div>
  <v-row class="row">
    <v-col class="col" :span="24">
      <div class="content">col-24</div>
    </v-col>
  </v-row>
  <v-row class="row">
    <v-col class="col" :span="12">
      <div class="content">col-12</div>
    </v-col>
    <v-col class="col" :span="12">
      <div class="content">col-12</div>
    </v-col>
  </v-row>
  <v-row class="row">
    <v-col class="col" :span="8">
      <div class="content">col-8</div>
    </v-col>
    <v-col class="col" :span="8">
      <div class="content">col-8</div>
    </v-col>
    <v-col class="col" :span="8">
      <div class="content">col-8</div>
    </v-col>
  </v-row>
  <v-row class="row">
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
  width:100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background-color: #108ee6;
}
.row{
  margin-bottom: 16px;
}
.col:nth-child(2n) .content{
  background: #47AFFF;
}
</style>
```
:::
