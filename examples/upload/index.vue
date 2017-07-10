<template>
<div>
  <h3>error</h3>
  <error></error>
  <h3>basic</h3>
  <basic></basic>
</div>
</template>

<script>
import basic from './basic.vue'
import error from './error.vue'

export default {
  components: {
    basic, error
  }
}
</script>
