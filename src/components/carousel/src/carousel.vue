<template>
<div
  class="v-carousel"
  :style="carouselStyle"
  ref="carousel">
  <div
    class="v-carousel-container"
    :style="containerStyle"
    ref="container">
     <div
        class="v-carousel-item v-carousel-item-clone"
        v-for="(item, index) in beforeCloneItems"
        v-html="item.content"
        :style="item.style"
        :key="index">
    </div>
    <slot></slot>
    <div
        class="v-carousel-item v-carousel-item-clone"
        v-for="(item, index) in afterCloneItems"
        v-html="item.content"
        :style="item.style"
        :key="index">
    </div>
  </div>
  <template
    v-if="mode === 'center'">
    <div
      class="v-carousel-prev-mask"
      :style="{
        width: sideWidth + 'px'
      }"
      @click="prevPage">
    </div>
    <div
      class="v-carousel-next-mask"
      :style="{
        width: sideWidth + 'px'
      }"
      @click="nextPage">
    </div>
  </template>
  <template
    v-if="arrow">
    <div
      class="v-carousel-prev"
      @click="prevPage">
      <v-icon type="left"></v-icon>
    </div>
    <div
      class="v-carousel-next"
      @click="nextPage">
      <v-icon type="right"></v-icon>
    </div>
  </template>
  <!-- 轮播指示 -->
  <ul
    class="v-carousel-indicator"
    v-if="dots">
     <li
      v-for="(n,index) in totalPage"
      :class="{
        'active': index === activePage
      }"
      :key="index">
       <button
        @click="toPage(index)">
      </button>
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
      activePage: -1,
      width: 0
    }
  },

  props: {
    showCount: {
      type: Number,
      default: 1
    },
    scrollCount: {
      type: Number,
      default: 1
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'normal'
    },
    sideWidth: {
      type: Number,
      default: 30
    },
    arrow: {
      type: Boolean,
      default: true
    },
    dots: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    carouselStyle () {
      let style = {}
      if (this.mode === 'center') {
        style.paddingLeft = `${this.sideWidth}px`
        style.paddingRight = `${this.sideWidth}px`
      }
      return style
    },
    containerStyle () {
      let style = {}
      style.width = `${(this.items.length + this.showCount * 2) * this.width}px`
      let translate = -(this.activePage * this.width / (this.showCount / this.scrollCount)) - (this.width)
      style.transform = `translate3d(${translate}px, 0, 0)`
      return style
    },
    totalPage () {
      return Math.ceil(this.items.length / this.scrollCount) || 0
    },
    beforeCloneItems () {
      const vm = this
      return vm.items.filter((item, index) => {
        return index > (vm.items.length - 1) - vm.showCount
      }).map((item, index) => {
        let style = {}
        style.width = `${this.width / this.showCount}px`
        style.transform = `translate3d(${this}px, 0, 0)`
        return {
          style,
          content: item.$el.innerHTML
        }
      })
    },
    afterCloneItems () {
      const vm = this
      return vm.items.filter((item, index) => {
        return index < vm.showCount
      }).map((item) => {
        let style = {}
        style.width = `${this.width / this.showCount}px`
        return {
          style,
          content: item.$el.innerHTML
        }
      })
    }
  },

  created () {
    this.setActivePage(0)
  },

  mounted () {
    const vm = this
    if (this.mode === 'center') {
      vm.width = vm.$el.clientWidth - this.sideWidth * 2
    } else {
      vm.width = vm.$el.clientWidth
    }
  },

  methods: {
    setActivePage (index) {
      const vm = this
      index = Number(index)
      if (index < 0) {
        vm.activePage = vm.totalPage - 1
      } else if (index >= vm.totalPage) {
        vm.activePage = 0
      } else {
        vm.activePage = index
      }
    },
    nextPage () {
      this.setActivePage(this.activePage + 1)
    },
    prevPage () {
      this.setActivePage(this.activePage - 1)
    },
    toPage (index) {
      this.setActivePage(index)
    }
  }
}
</script>
