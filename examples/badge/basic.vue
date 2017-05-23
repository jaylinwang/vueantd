<template>
<div>
  <v-badge
    :count="5">
    <div class="head-block"></div>
  </v-badge>
  <v-badge
    :count="0">
    <div class="head-block"></div>
  </v-badge>
  <v-badge
    :count="0"
    showZero>
    <div class="head-block"></div>
  </v-badge>
  <v-badge
    dot>
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
