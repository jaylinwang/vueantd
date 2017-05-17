<script>
import basic from './basic.vue'
import duration from './duration.vue'
import type from './type.vue'
import loading from './loading.vue'

export default {
  components: {
    basic, type, duration, loading
  }
}
</script>

<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>type</h2>
  <type></type>
  <h2>duration</h2>
  <duration></duration>
  <h2>loading</h2>
  <loading></loading>

</div>
</template>
