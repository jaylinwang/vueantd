<template>
  <div class="v-popper">
    <slot></slot>
  </div>
</template>
<script>
  import Popper from 'popper.js'

  export default {
    props: {
      placement: {
        type: String,
        default: 'bottomRight'
      }
    },
    data () {
      return {
        popper: null
      }
    },
    computed: {
      popPlacement () {
        var popPlacement
        switch (this.placement) {
          case 'bottomLeft':
            popPlacement = 'bottom-start'
            break
          case 'bottomCenter':
            popPlacement = 'bottom'
            break
          case 'bottomRight':
            popPlacement = 'bottom-end'
            break
          case 'topLeft':
            popPlacement = 'top-start'
            break
          case 'topCenter':
            popPlacement = 'top'
            break
          case 'topRight':
            popPlacement = 'top-end'
            break
        }
        return popPlacement
      }
    },
    methods: {
      // 更新popper显示
      init () {
        this.$nextTick(() => {
          this.popper = new Popper(this.$parent.$refs.popRef, this.$el, {
            placement: this.popPlacement,
            modifiers: {
              preventOverflow: {
                boundariesElement: 'viewport'
              }
            }
          })
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
