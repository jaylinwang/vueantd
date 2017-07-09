<template>
<div
  class="v-carousel">
  <div
    class="v-carousel-container">
    <slot></slot>
  </div>
  <div
    class="v-carousel-prev"
    @click="prevItem">
    <v-icon type="left"></v-icon>
  </div>
  <div
    class="v-carousel-next"
    @click="nextItem">
    <v-icon type="right"></v-icon>
  </div>
  <ul
    class="v-carousel-indicator">
    <li
      v-for="(item, index) in items"
      :class="{
        'active': index === activeIndex
      }"
      :key="index">
      <button></button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'vCarousel',

  data () {
    return {
      items: [],
      activeIndex: -1
    }
  },

  props: {
    height: {
      type: Number
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },

  watch: {
    items (val) {
      val.length > 0 && this.setActiveItem(this.initialIndex)
    }
  },

  methods: {
    setActiveItem (index) {
      const total = this.items.length
      const vm = this
      index = Number(index)
      if (index < 0) {
        vm.activeIndex = total - 1
      } else if (index >= total) {
        vm.activeIndex = 0
      } else {
        vm.activeIndex = index
      }
      vm.items.forEach((item, index) => {
        if (index === vm.activeIndex) {
          item.active = true
        } else {
          item.active = false
        }
      })
    },
    nextItem () {
      this.setActiveItem(this.activeIndex + 1)
    },
    prevItem () {
      this.setActiveItem(this.activeIndex - 1)
    }
  }
}
</script>
