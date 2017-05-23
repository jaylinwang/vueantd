<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>value</h2>
  <value></value>
  <h2>display</h2>
  <display></display>
  <h2>disabled</h2>
  <disabled></disabled>
  <h2>state</h2>
  <state></state>
</div>
</template>

<script>
import basic from './basic.vue'
import value from './value.vue'
import display from './display.vue'
import disabled from './disabled.vue'
import state from './state.vue'

export default {
  components: {
    basic, value, display, disabled, state
  }
}
</script>
