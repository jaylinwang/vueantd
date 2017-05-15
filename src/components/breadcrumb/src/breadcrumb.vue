<template>
<div class="v-breadcrumb">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  mounted () {
    const self = this
    this.$nextTick(() => {
      this.$children.forEach((child, index) => {
        if (index < self.$children.length - 1) {
          child.separator = self.separator
        }
      })
    })
  }
}
</script>
