<script>
export default {
  name: 'vRadio',
  props: {
    value: {},
    label: [Number, Boolean]
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    checked () {
      return this.innerValue === this.label
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}
</script>

<template>
<label class="v-radio"
  :class="{
    'checked': checked
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
