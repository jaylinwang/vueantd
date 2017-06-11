<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>close</h2>
  <close></close>
  <h2>position</h2>
  <position></position>
  <h2>custom</h2>
  <custom></custom>
  <h2>fast</h2>
  <fast></fast>
</div>
</template>

<script>
import basic from './basic.vue'
import custom from './custom.vue'
import close from './close.vue'
import position from './position.vue'
import fast from './fast.vue'

export default {
  components: {
    basic, custom, close, position, fast
  }
}
</script>
