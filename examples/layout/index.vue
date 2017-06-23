<template>
<div>
<h2>two</h2>
<two></two>
<h2>one</h2>
<one></one>
</div>
</template>
<style>

</style>

<script>
import one from './one.vue'
import two from './two.vue'

export default {
  components: {
    one, two
  }
}
</script>
