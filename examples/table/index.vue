<template>
<div>
<h2>selection</h2>
<selection></selection>
<h2>ctrl</h2>
<ctrl></ctrl>
<h2>basic</h2>
<basic></basic>
</div>
</template>

<script>
import basic from './basic.vue'
import ctrl from './ctrl.vue'
import selection from './selection.vue'

export default {
  components: {
    basic, ctrl, selection
  }
}
</script>
