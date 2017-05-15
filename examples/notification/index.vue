<script>
import basic from './basic.vue'
import duration from './duration.vue'
import type from './type.vue'

export default {
  components: {
    basic, duration, type
  }
}
</script>

<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>duration</h2>
  <duration></duration>
  <h2>type</h2>
  <type></type>
</div>
</template>
