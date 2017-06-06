<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>icon</h2>
  <icon></icon>
  <h2>description</h2>
  <description></description>
  <h2>close</h2>
  <close></close>
</div>
</template>

<script>
import basic from './basic.vue'
import icon from './icon.vue'
import description from './description.vue'
import close from './close.vue'

export default {
  components: {
    basic, icon, description, close
  }
}
</script>
