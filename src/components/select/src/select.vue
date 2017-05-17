<template>
<div class="v-select"
  :class="{
    'open': isOptionShow,
    'disabled': disabled
  }"
  :style="{
    width: width + 'px'
  }"
  v-outsideclick="handleOutsideClick">
  <div
    class="v-select-input"
    tabindex="0"
    @click="toggleOption"
    ref="popRef">
     {{label}}
    <div class="v-select-input__caret"></div>
  </div>
  <popper
    :style="{
      width: width + 'px'
    }"
    ref="optionMenu"
    v-show="isOptionShow">
    <ul class="v-option-menu">
      <slot></slot>
    </ul>
  </popper>
</div>
</template>

<script>
import Popper from '../../base/popper.vue'
import outsideclick from '../../../directives/outsideclick.js'

export default {
  name: 'vSelect',
  components: {
    Popper
  },
  directives: {
    outsideclick
  },
  props: {
    value: {},
    width: Number,
    disabled: Boolean
  },
  data () {
    return {
      isOptionShow: false,
      label: ''
    }
  },
  watch: {
    isOptionShow (val) {
      if (val) {
        this.$refs.optionMenu.init()
      } else {
        this.$refs.optionMenu.destroy()
      }
    }
  },
  methods: {
    toggleOption () {
      if (this.disabled) {
        return false
      }
      this.isOptionShow = !this.isOptionShow
    },
    handleOutsideClick () {
      this.isOptionShow = false
    }
  }
}
</script>
