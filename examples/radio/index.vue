<script>
import basic from './basic.vue'
import disabled from './disabled.vue'
import group from './group.vue'

export default {
  components: {
    basic, disabled, group
  }
}
</script>

<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>disabled</h2>
  <disabled></disabled>
  <h2>group</h2>
  <group></group>
</div>
</template>
