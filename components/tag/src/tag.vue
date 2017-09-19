<template>
<div
  class="v-tag"
  :class="classList">
  <slot></slot>
  <div
    v-if="closeable"
    class="v-tag-close"
    @click="handleClose">
    <v-icon type="close"></v-icon>
  </div>
</div>
</template>

<script>
export default {
  name: 'vTag',
  componentName: 'vTag',

  props: {
    closeable: {
      type: Boolean,
      default: false
    },

    color: {
      type: String
    }
  },

  computed: {
    classList () {
      let classList = []
      if (this.color) {
        classList.push(`v-tag__${this.color}`)
      }
      return classList
    }
  },

  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>
