<template>
<label class="v-checkbox"
  :class="{
    'checked': isChecked
  }">
  <span class="v-checkbox-input">
    <span class="v-checkbox-input__inner"></span>
    <input class="v-checkbox-input__origin"
          type="checkbox"
          v-model="innerValue"
          @change="change">
  </span>
  <span class="v-checkbox-label">
    <slot></slot>
  </span>
</label>
</template>
<script>
export default {
  name: 'vCheckbox',
  props: {
    value: {}
  },
  data () {
    return {

    }
  },
  created () {
    if (this.value) {
      this.checked = true
    }
  },
  computed: {
    isChecked () {
      return this.innerValue
    },
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    change (e) {
      this.$emit('change')
    }
  }
}
</script>

