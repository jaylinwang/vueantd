<template>
  <div class="v-popper">
    <div
      class="v-popper__arrow"
      ref="popperArrow">
    </div>
    <div
      class="v-popper__inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import Popper from 'popper.js'
  export default {
    name: 'vPopper',

    props: {
      placement: {
        type: String,
        default: 'bottom'
      },
      showArrow: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        popper: null
      }
    },

    methods: {
      // 更新popper显示
      init () {
        const vm = this
        vm.$nextTick(() => {
          vm.popper = new Popper(vm.$parent.$refs.popperRef, vm.$el, {
            placement: this.placement,
            modifiers: {
              preventOverflow: {
                boundariesElement: 'viewport'
              },
              arrow: {
                element: vm.$refs.popperArrow
              }
            }
          })
        })
      },

      update () {
        this.$nextTick(() => {
          if (this.popper) {
            this.popper.update()
          }
        })
      },

      // 销毁popper
      destroy () {
        this.$nextTick(() => {
          if (this.popper) {
            this.popper.destroy()
          }
        })
      }
    }
  }

</script>
