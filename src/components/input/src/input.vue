<template>
  <input
  class="v-input"
  :class="classList"
  :type="type"
  :placeholder="placeholder">
</template>
<script>
export default {
  name: 'vInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    classList () {
      let classList = []
      classList.push(`v-input-${this.size}`)
      return classList
    }
  }
}
</script>
