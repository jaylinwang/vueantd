<template>
  <div
    class="v-row"
    :style="styleObj">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'vRow',
    componentName: 'vRow',

    props: {
      gutter: {
        type: Number,
        default: 0
      },
      type: String
    },

    computed: {
      styleObj () {
        const obj = {}
        if (this.gutter && this.gutter > 0) {
          obj.marginLeft = `${-this.gutter / 2}px`
        }
        obj.marginRight = obj.marginLeft
        return obj
      }
    }
  }
</script>
