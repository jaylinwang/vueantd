<template>
<div class="v-tooltip">
  <div
    class="v-tooltip-wrapper"
    ref="popperRef"
    @mouseenter="tooltipVisible = true"
    @mouseleave="tooltipVisible = false">
    <slot></slot>
  </div>
  <v-popper
    ref="drop"
    v-show="tooltipVisible"
    :placement="placement"
    show-arrow>
    <div class="v-tooltip-content">
      {{content}}
    </div>
  </v-popper>
</div>
</template>

<script>
export default {
  name: 'vTooltip',

  data () {
    return {
      tooltipVisible: false
    }
  },

  props: {
    content: {
      type: String
    },
    placement: {
      type: String,
      default: 'top'
    }
  },

  watch: {
    tooltipVisible (val) {
      if (val) {
        this.$refs.drop.init()
      } else {
        this.$refs.drop.distroy()
      }
    }
  }
}
</script>
