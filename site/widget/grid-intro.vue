<template>
<div class="grid-intro">
  <div class="row-container">
    <v-row class="row">
      <v-col
        class="col"
        v-for="n in 24"
        :key="n"
        :span="1"></v-col>
    </v-row>
    <ul class="row-scale">
      <li style="width:100%">100%</li>
    </ul>
  </div>
  <div class="row-container">
    <v-row class="row">
      <v-col
        class="col"
        v-for="n in 24"
        :key="n"
        :span="1"></v-col>
    </v-row>
    <ul class="row-scale">
      <li style="width:25%">25%</li>
      <li style="width:25%">25%</li>
      <li style="width:25%">25%</li>
      <li style="width:25%">25%</li>
    </ul>
  </div>
  <div class="row-container">
    <v-row class="row">
      <v-col
        class="col"
        v-for="n in 24"
        :key="n"
        :span="1"></v-col>
    </v-row>
    <ul class="row-scale">
      <li style="width:50%">50%</li>
      <li style="width:50%">50%</li>
    </ul>
  </div>
  <div class="row-container">
    <v-row class="row">
      <v-col
        class="col"
        v-for="n in 24"
        :key="n"
        :span="1"></v-col>
    </v-row>
    <ul class="row-scale">
      <li style="width:66.6%">66.6%</li>
      <li style="width:33.3%">33.3%</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

}
</script>
