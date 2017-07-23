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
      style.width = `${this.carousel.width / this.carousel.showCount}px`
      return style
    }
  },

  created () {
    this.carousel && this.carousel.items.push(this)
  }
}
</script>
