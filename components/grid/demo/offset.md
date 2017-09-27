### 列偏移

使用 `offset` 可以将列向右侧偏。例如，`:offset="4"` 将元素向右侧偏移了 4 个列的宽度。

::: demo
``` html
<template>
  <div>
    <v-row class="row">
      <v-col
        class="col"
        :span="6">
        <div class="content">col-6</div>
      </v-col>
    </v-row>
    <v-row class="row">
      <v-col
        class="col"
        :span="6"
        :offset="18">
        <div class="content">col-6 col-offset-18</div>
      </v-col>
    </v-row>
    <v-row class="row">
      <v-col
        class="col"
        :span="6"
        :offset="6">
        <div class="content">col-6 col-offset-6</div>
      </v-col>
      <v-col
        class="col"
        :span="6"
        :offset="6">
        <div class="content">col-6 col-offset-6</div>
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
    margin-bottom: 16px;
  }
</style>
```
:::
