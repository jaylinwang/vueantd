<template>
<div
  class="v-popover"
  @mouseleave="handleMouseLeave"
  v-outsideclick="handleOutsideClick">
  <div
    class="v-popover-handle"
    ref="popperRef"
    @mouseenter="handleMouseEnter"
    @click.capture="handleClick">
    <slot></slot>
  </div>
  <div
    v-show="bodyVisible">
    <v-popper
      :placement="placement"
      :show-arrow="true"
      ref="popper">
      <div class="v-popover-body">
        <div class="v-popover-header">
          <slot name="title">
            <div class="v-popover-header-default">
              {{ title }}
            </div>
          </slot>
        </div>
        <div class="v-popover-content">
          <slot name="content">
            <div class="v-popover-content-default">
              {{ content }}
            </div>
          </slot>
        </div>
      </div>
    </v-popper>
  </div>
</div>
</template>

<script>
import outsideclick from 'components/_directives/outsideclick'

export default {
  name: 'vPopover',
  componentName: 'vPopover',

  directives: {
    outsideclick
  },

  data () {
    return {
      bodyVisible: false
    }
  },

  watch: {
    bodyVisible (val) {
      if (val) {
        this.$refs.popper.init()
      } else {
        this.$refs.popper.distroy()
      }
    }
  },

  props: {
    placement: {
      type: String,
      defaut: 'bottom'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    trigger: {
      type: String,
      default: 'hover'
    }
  },

  methods: {
    handleMouseEnter () {
      if (this.trigger === 'hover') {
        this.bodyVisible = true
      }
    },

    handleMouseLeave () {
      if (this.trigger === 'hover') {
        this.bodyVisible = false
      }
    },

    handleClick () {
      if (this.trigger === 'click') {
        this.bodyVisible = !this.bodyVisible
      }
    },

    handleOutsideClick () {
      if (this.trigger === 'click') {
        this.bodyVisible = false
      }
    }
  }
}
</script>
