<template>
<label
  class="v-switch"
  :class="{
    'on': checked
  }"
  @mousedown="isMouseDown = true"
  @mouseup="isMouseDown = false">
  <div
    class="v-switch-input">
    <slot name="off"></slot>
    <div
      class="v-switch-input__inner"
      :class="{
        'mousedown': isMouseDown
      }"></div>
    <slot name="on"></slot>
    <input
      class="v-switch-input__origin"
      type="checkbox"
      v-model="innerValue">
  </div>
  <div class="v-switch-label">
    <slot></slot>
  </div>
</label>
</template>

<script>
export default {
  name: 'vSwitch',

  data () {
    return {
      isMouseDown: false
    }
  },

  props: {
    value: {
      type: [Boolean, String, Number]
    },

    trueLabel: {
      type: [String, Number, Boolean]
    }
  },

  computed: {
    checked () {
      return this.innerValue
    },

    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
        this.$emit('change')
      }
    }
  }
}
</script>
