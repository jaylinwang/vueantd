<script>
export default {
  name: 'vRadio',
  componentName: 'vRadio',

  props: {
    value: {},
    label: [Number, Boolean, String],
    disabled: Boolean
  },

  computed: {
    inGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vRadioGroup') {
          this._group = parent
          return true
        } else {
          parent = parent.$parent
        }
      }
      return false
    },
    innerValue: {
      get () {
        if (this.inGroup) {
          return this._group.value
        } else {
          return this.value
        }
      },
      set (val) {
        if (this.inGroup) {
          this._group.$emit('input', val)
        } else {
          this.$emit('input', val)
        }
      }
    },
    checked () {
      return this.innerValue === this.label
    }
  },
  methods: {
    handleChange () {
      if (this.inGroup) {
        this._group.$emit('change')
      } else {
        this.$emit('change')
      }
    }
  }
}
</script>

<template>
<label class="v-radio"
  :class="{
    'checked': checked,
    'disabled': disabled
  }">
  <span class="v-radio-input">
    <span class="v-radio-input__inner"></span>
    <input
      class="v-radio-input__origin"
      type="radio"
      :value="label"
      v-model="innerValue"
      @change="handleChange">
  </span>
  <span class="v-radio-label">
    <slot></slot>
  </span>
</label>
</template>
