<template>
<div>
  <h2>baisc</h2>
  <basic></basic>
  <h2>mini</h2>
  <mini></mini>
  <h2>update</h2>
  <update></update>
</div>
</template>

<script>
import basic from './basic.vue'
import mini from './mini.vue'
import update from './update.vue'

export default {
  components: {
    basic, mini, update
  }
}
</script>
