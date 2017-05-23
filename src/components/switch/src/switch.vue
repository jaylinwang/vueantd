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
    <div
      v-if="checked"
      class="v-switch-input__on">
      <slot name="on"></slot>
    </div>
    <div
      class="v-switch-input__inner"
      :class="{
        'mousedown': isMouseDown
      }"></div>
    <div
      v-if="!checked"
      class="v-switch-input__off">
      <slot name="off"></slot>
    </div>
    <input
      class="v-switch-input__origin"
      type="checkbox"
      v-model="innerValue"
      :true-value="onLabel"
      :false-value="offLabel"
      >
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

    offLabel: {
      type: [String, Number, Boolean],
      default: false
    },

    onLabel: {
      type: [String, Number, Boolean],
      default: true
    }
  },

  computed: {
    checked () {
      if (typeof this.value === 'number' ||
          typeof this.value === 'string') { // 如果值为 Number 或者 String 类型，比对 onLabel
        return this.value === this.onLabel
      }
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
