<template>
<div
  class="v-progress"
  :class="progressClass">
  <div
    class="v-progress-outer">
    <div
      class="v-progress-inner">
      <div
        class="v-progress-stroke"
        :style="strokeStyle"></div>
    </div>
  </div>
  <div class="v-progress-text">
    <template v-if="innerStatus === 'success'">
      <v-icon type="check-circle"></v-icon>
    </template>
    <template v-else-if="innerStatus === 'exception'">
      <v-icon type="close-circle"></v-icon>
    </template>
    <template v-else>
      {{ percent }}%
    </template>
  </div>
</div>
</template>

<script>
export default {
  name: 'vProgress',

  props: {
    percent: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: 'normal'
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    hideInfo: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      innerStatus: this.status
    }
  },

  watch: {
    percent (val) {
      if (val === 100) {
        this.innerStatus = 'success'
      }
    }
  },

  computed: {
    strokeStyle () {
      let style = {}
      style.height = `${this.strokeWidth}px`
      style.width = `${this.percent}%`
      return style
    },
    progressClass () {
      let classList = []
      classList.push(`${this.innerStatus}`)
      if (this.hideInfo) {
        classList.push('v-progress-hide-info')
      }
      return classList
    }
  },

  created () {
    if (this.percent === 100) {
      this.innerStatus = 'success'
    }
  }
}
</script>
