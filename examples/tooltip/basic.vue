<template>
<div>
  <v-tooltip
    content="这是一个Tooltip信息">
    鼠标进入显示tooltip
  </v-tooltip>
  <div class="test">
    <div class="test-container">
    <v-tooltip
      content="这是一个Tooltip信息"
      placement="right">
      小区域
    </v-tooltip>
    </div>
  </div>
</div>
</template>
<style>
.test{
  position: relative;
  background-color: #ddd;
  width: 60px;
  height: 60px;
}
.test-container{
  position: absolute;
  background-color: #ddd;
  width: 40px;
  height: 40px;
}
</style>

<script>
export default {

}
</script>
