<template>
  <div :class="classList" :style="styleObj">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'vRow',
    componentName: 'vRow',

    props: {
      gutter: Number,
      type: String,
      justify: {
        type: String,
        default: 'start'
      },
      align: {
        type: String,
        default: 'top'
      }
    },
    computed: {
      classList () {
        const list = []
        if (this.type === 'flex') {
          list.push('v-row-flex')
        } else {
          list.push('v-row')
        }
        list.push(`v-row-flex-justify-${this.justify}`)
        list.push(`v-row-flex-align-${this.align}`)
        return list
      },
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
