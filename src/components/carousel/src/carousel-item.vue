<template>
<div
  class="v-carousel-item"
  :style="itemStyle">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vCarouselItem',

  data () {
    return {
      active: false
    }
  },

  computed: {
    carousel () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vCarousel') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    },
    itemStyle () {
      let style = {}
      if (this.active) {
        style.display = 'block'
      }
      return style
    }
  },

  created () {
    this.carousel && this.carousel.items.push(this)
  }
}
</script>
