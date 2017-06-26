<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>vertical</h2>
  <vertical></vertical>
  <h2>inline</h2>
  <inline></inline>
</div>
</template>

<script>
import basic from './basic.vue'
import vertical from './vertical.vue'
import inline from './inline.vue'

export default {
  components: {
    basic, vertical, inline
  }
}
</script>
