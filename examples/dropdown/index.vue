<script>
import basic from './basic.vue'
import split from './split.vue'
import direction from './direction.vue'
import event from './event.vue'
import arrow from './arrow.vue'

export default {
  components: {
    basic, split, direction, event, arrow
  }
}
</script>

<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>split</h2>
  <split></split>
  <h2>direction</h2>
  <direction></direction>
  <h2>arrow</h2>
  <arrow></arrow>
  <h2>event</h2>
  <event></event>
</div>
</template>
