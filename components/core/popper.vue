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
      default: 'bottom-start'
    }
  },
  data() {
    return {
      popper: null,
    }
  },
  methods: {
    // 更新popper显示
    update() {
      this.$nextTick(() => {
        this.popper = new Popper(this.$parent.$refs.handle, this.$el, {
          removeOnDestroy: false,
          placement: this.placement,
        });
      });
    },
    // 销毁popper
    destroy() {
      this.$nextTick(() => {
        if(this.popper) {
          this.popper.destroy();
        }
      });
    }
  }
}
</script>
