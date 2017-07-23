<template>
<div>
  <h3>centerMode</h3>
  <center-mode></center-mode>
  <h3>multiple</h3>
  <multiple></multiple>
   <h3>basic</h3>
  <basic></basic>
</div>
</template>
<script>
import basic from './basic.vue'
import multiple from './multiple.vue'
import centerMode from './center-mode.vue'

export default {
  components: {
    basic, multiple, centerMode
  }
}
</script>
