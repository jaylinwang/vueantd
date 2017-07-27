<template>
<div>
  <h3>trigger</h3>
  <trigger></trigger>
  <h3>basic</h3>
  <basic></basic>
  <h3>custom</h3>
  <custom></custom>
</div>
</template>

<script>
import basic from './basic.vue'
import trigger from './trigger.vue'
import custom from './custom.vue'

export default {
  components: {
    basic, trigger, custom
  }
}
</script>
