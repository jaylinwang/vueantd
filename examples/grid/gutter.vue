<script>
export default {

}
</script>

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

<template>
<div>
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
</div>
</template>
