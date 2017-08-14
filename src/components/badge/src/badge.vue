<template>
<div
  class="v-badge"
  :class="{
    'v-badge__nowrap': !hasWrap
  }">
  <slot></slot>
  <sup
    v-if="dot"
    class="v-badge-dot">
  </sup>
  <sup
    v-else-if="count > 0 || showZero"
    class="v-badge-count">
    {{countStr}}
  </sup>
</div>
</template>

<script>
export default {
  name: 'vBadge',
  componentName: 'vBadge',

  props: {
    count: {
      type: Number
    },

    overflowCount: {
      type: Number,
      default: 99
    },

    showZero: {
      type: Boolean,
      default: false
    },

    dot: {
      type: Boolean
    }
  },

  computed: {
    hasWrap () {
      return this.$slots.default
    },

    countStr () {
      if (this.count < this.overflowCount) {
        return String(this.count)
      } else {
        return `${this.overflowCount}+`
      }
    }
  }
}
</script>
