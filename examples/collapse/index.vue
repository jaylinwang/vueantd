<template>
<div>
  <h3>basic</h3>
  <basic></basic>
  <h3>accordion</h3>
  <accordion></accordion>
  <h3>simple</h3>
  <simple></simple>
</div>
</template>

<script>
import basic from './basic.vue'
import accordion from './accordion.vue'
import simple from './simple.vue'

export default {
  components: {
    basic, accordion, simple
  }
}
</script>
