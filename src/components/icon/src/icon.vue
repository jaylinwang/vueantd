<template>
<i class="v-icon" :class="classList">
</i>
</template>

<script>
export default {
  name: 'vIcon',
  componentName: 'vIcon',

  props: {
    type: String,
    spin: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList () {
      let classList = []
      classList.push(`v-icon-${this.type}`)
      if (this.spin) {
        classList.push('spin')
      }
      return classList
    }
  }
}
</script>
