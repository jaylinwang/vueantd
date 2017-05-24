<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>display</h2>
  <display></display>
  <div class="blank"></div>
</div>
</template>

<style>
.blank{
  height: 1000px;
}
</style>


<script>
import basic from './basic.vue'
import display from './display.vue'

export default {
  components: {
    display, basic
  }
}
</script>
