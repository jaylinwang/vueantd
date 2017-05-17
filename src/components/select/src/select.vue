<template>
<div class="v-select"
  :class="classList"
  :style="{
    width: width + 'px'
  }"
  v-outsideclick="handleOutsideClick">
  <div
    class="v-select-input"
    tabindex="0"
    @click="toggleOption"
    @mouseenter="showClear"
    @mouseleave="hideClear"
    ref="popRef">
    <span
      v-if="label"
      class="v-select-input__label">
      {{label}}
    </span>
    <span
      v-else
      class="v-select-input__placeholder">
      {{placeholder}}
    </span>
    <div class="v-select-input__caret"></div>
    <div
      v-show="isClearShow"
      class="v-select-input__clear"
      @click.stop="clearValue">
      <v-icon type="close"></v-icon>
    </div>
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
    placeholder: String,
    width: Number,
    disabled: Boolean,
    allowClear: Boolean,
    size: String
  },
  data () {
    return {
      isOptionShow: false,
      isClearShow: false,
      label: '',
      options: []
    }
  },
  computed: {
    classList () {
      let classList = []
      if (this.size) {
        classList.push(`v-select-${this.size}`)
      }
      if (this.isOptionShow) {
        classList.push('open')
      }
      if (this.disabled) {
        classList.push('disabled')
      }
      return classList
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
    clearValue () {
      this.label = ''
      this.$emit('input', '')
    },
    handleOutsideClick () {
      this.isOptionShow = false
    },
    showClear () {
      if (this.allowClear &&
          this.label &&
          !this.disabled) {
        this.isClearShow = true
      }
    },
    hideClear () {
      this.isClearShow = false
    }
  }
}
</script>
