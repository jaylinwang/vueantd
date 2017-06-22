<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>default</h2>
  <defaultValue></defaultValue>
  <h2>horizontal</h2>
  <horizontal></horizontal>
</div>
</template>

<script>
import basic from './basic.vue'
import defaultValue from './default.vue'
import horizontal from './horizontal.vue'

export default {
  components: {
    basic, defaultValue, horizontal
  }
}
</script>
