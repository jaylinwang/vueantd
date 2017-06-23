<template>
  <div
    class="v-popper"
    :class="classList">
    <div
      class="v-popper__arrow"
      v-if="showArrow"
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

    computed: {
      classList () {
        let classList = []
        classList.push(this.placement)
        if (this.showArrow) {
          classList.push('has-arrow')
        }
        return classList
      }
    },

    methods: {
      init () {
        const vm = this
        vm.$nextTick(() => {
          vm.popper = new Popper(vm.$parent.$refs.popperRef, vm.$el, {
            placement: this.placement
          })
          vm.popper.update()
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
      distroy () {
        this.$nextTick(() => {
          if (this.popper) {
            this.popper.destroy()
          }
        })
      }
    }
  }

</script>
