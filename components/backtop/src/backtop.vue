<template>
<div
  v-show="visible"
  class="v-backtop"
  @click="backTop">
  <slot>
    <div class="v-backtop__inner">
       <v-icon type="up"></v-icon>
    </div>
  </slot>
</div>
</template>

<script>

const requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame

export default {
  name: 'vBacktop',
  componentName: 'vBacktop',

  data () {
    return {
      visible: false
    }
  },

  props: {
    duration: {
      type: Number,
      default: 200
    },

    visiblityHeight: {
      type: Number,
      default: 400
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleWindowScroll, false)
    window.addEventListener('resize', this.handleWindowScroll, false)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleWindowScroll, false)
    window.removeEventListener('resize', this.handleWindowScroll, false)
  },

  methods: {
    handleWindowScroll () {
      this.visible = window.pageYOffset >= 100
    },

    backTop () {
      const currentScrollTop = document.body.scrollTop
      const startTime = new Date().getTime()
      const step = () => {
        let currentTime = new Date().getTime()
        const time = currentTime - startTime
        if (time < this.duration) {
          requestAnimationFrame(step)
          document.body.scrollTop = (1 - (time / this.duration)) * currentScrollTop
        } else {
          document.body.scrollTop = 0
        }
      }
      requestAnimationFrame(step)
    }
  }
}
</script>
