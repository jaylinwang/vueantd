<template>
<label class="v-checkbox"
  :class="{
    'checked': checked,
    'disabled': disabled
  }">
  <span class="v-checkbox-input">
    <span class="v-checkbox-input__inner"></span>
    <input
      class="v-checkbox-input__origin"
      type="checkbox"
      :disabled="disabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
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
    value: {},
    disabled: Boolean,
    trueLabel: {
      type: [String, Number, Boolean],
      default: true
    },
    falseLabel: {
      type: [String, Number, Boolean],
      default: false
    }
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
    checked () {
      if (typeof this.innerValue === 'boolean') {
        return this.innerValue
      } else {
        return this.innerValue === this.trueLabel
      }
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

