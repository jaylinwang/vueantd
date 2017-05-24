<template>
<div>
<v-backtop :style="{
  bottom: '100px'
}">
  <span class="back-demo">
    <v-icon type="top"></v-icon>
  </span>
</v-backtop>
<p>
  滚动出现
</p>
</div>
</template>

<style>
.back-demo{
  display: inline-block;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #EFEFEF;
  border-radius: 40px;
}
</style>

<script>
export default {

}
</script>
