<script>
import basic from './basic.vue'
import size from './size.vue'
import multiple from './multiple.vue'

export default {
  components: {
    basic, size, multiple
  }
}
</script>

<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>size</h2>
  <size></size>
  <h2>multiple</h2>
  <multiple></multiple>
</div>
</template>
