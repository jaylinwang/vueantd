<script>
import basic from './basic.vue'
import disabled from './disabled.vue'
import value from './value.vue'
import toggle from './toggle.vue'
import group from './group.vue'
import indeterminate from './indeterminate.vue'

export default {
  components: {
    basic, disabled, toggle, group, indeterminate, value
  }
}
</script>

<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>disabled</h2>
  <disabled></disabled>
  <h2>选中值</h2>
  <value></value>
  <h2>group</h2>
  <group></group>
  <h2>toggle</h2>
  <toggle></toggle>
  <h2>indeterminate</h2>
  <indeterminate></indeterminate>
</div>
</template>
