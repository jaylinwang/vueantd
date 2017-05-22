<script>
import basic from './basic.vue'
import size from './size.vue'
import multiple from './multiple.vue'
import search from './search.vue'
import optionGroup from './option-group.vue'

export default {
  components: {
    basic, size, multiple, search, optionGroup
  }
}
</script>

<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>size</h2>
  <size></size>
  <h2>multiple</h2>
  <multiple></multiple>
  <h2>search</h2>
  <search></search>
  <h2>option-group</h2>
  <option-group></option-group>
</div>
</template>
