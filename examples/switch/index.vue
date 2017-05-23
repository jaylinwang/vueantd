<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>value</h2>
  <value></value>
  <h2>display</h2>
  <display></display>
</div>
</template>

<script>
import basic from './basic.vue'
import value from './value.vue'
import display from './display.vue'

export default {
  components: {
    basic, value, display
  }
}
</script>
