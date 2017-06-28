<template>
<div>
<h2>ctrl</h2>
<ctrl></ctrl>
<h2>basic</h2>
<basic></basic>
</div>
</template>

<script>
import basic from './basic.vue'
import ctrl from './ctrl.vue'

export default {
  components: {
    basic, ctrl
  }
}
</script>
