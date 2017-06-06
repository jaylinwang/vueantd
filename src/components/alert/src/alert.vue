<template>
<div
  class="v-alert"
  :class="classList">
  <div class="v-alert-head">
    <v-icon
      class="icon"
      v-if="showIcon"
      :type="iconType">
    </v-icon>
  </div>
  <div class="v-alert-content">
    <div class="v-alert-content__message">
      <slot></slot>
    </div>
    <div class="v-alert-content__description">
      <slot name="description"></slot>
    </div>
  </div>
  <span
    class="v-alert__close"
    v-if="closeable"
    @click="handleCloseClick">
    <slot name="close">
      <v-icon class="icon" type="close"></v-icon>
    </slot>
  </span>
</div>
</template>

<script>
export default {
  name: 'vAlert',

  props: {
    type: {
      type: String,
      default: 'info'
    },
    closeable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList () {
      let classList = []
      classList.push(this.type)
      if (this.$slots.description) {
        classList.push('has-description')
      }
      return classList
    },

    iconType () {
      let iconType = ''
      switch (this.type) {
        case 'info':
          iconType = 'info-circle'
          break
        case 'success':
          iconType = 'check-circle'
          break
        case 'warn':
          iconType = 'warning-circle'
          break
        case 'error':
          iconType = 'close-circle'
          break
      }
      if (this.$slots.description) {
        iconType += '-o'
      }
      return iconType
    }
  },

  methods: {
    handleCloseClick () {
      this.$emit('close')
      this.$el.remove()
    }
  }
}
</script>
