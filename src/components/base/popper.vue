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
        default: 'bottom'
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
        this.$nextTick(() => {
          this.popper = new Popper(this.$parent.$refs.popRef, this.$el, {
            placement: this.placement,
            modifiers: {
              preventOverflow: {
                boundariesElement: 'viewport'
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
