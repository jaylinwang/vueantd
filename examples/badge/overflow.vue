<template>
<div>
  <v-badge
    :count="99">
    <div class="head-block"></div>
  </v-badge>
  <v-badge
    :count="100">
    <div class="head-block"></div>
  </v-badge>
  <v-badge
    :count="1000"
    :overflowCount="999">
    <div class="head-block"></div>
  </v-badge>
  <v-badge
    :count="10000"
    :overflowCount="9999">
    <div class="head-block"></div>
  </v-badge>
</div>
</template>

<style>
.head-block{
  display: inline-block;
  height: 60px;
  width: 60px;
  background-color: #EFEFEF;
  border-radius: 4px;
}
.v-badge{
  margin-right: 16px;
}
</style>

<script>
export default {

}
</script>
