<template>
<div>
  <v-tooltip
    content="这是一个Tooltip信息">
    鼠标进入显示tooltip
  </v-tooltip>
  <div class="test-container">
  <v-tooltip
    content="这是一个Tooltip信息"
    placement="right">
    小区域
  </v-tooltip>
  </div>
</div>
</template>
<style>
.test-container{
  position: relative;
  background-color: #ddd;
  width: 60px;
  height: 60px;
}
</style>

<script>
export default {

}
</script>
