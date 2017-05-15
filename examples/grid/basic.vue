<script>
export default {

}
</script>

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

<template>
<div>
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
</div>
</template>
