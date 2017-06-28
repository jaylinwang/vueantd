<template>
<label class="v-checkbox"
  :class="{
    'checked': checked,
    'disabled': disabled,
    'indeterminate': indeterminate
  }">
  <span class="v-checkbox-input">
    <span class="v-checkbox-input__inner"></span>
    <!--
      trueLabel/falseLabel exist
    -->
    <input
      v-if="trueLabel || falseLabel"
      class="v-checkbox-input__origin"
      type="checkbox"
      :disabled="disabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
      v-model="innerValue"
      @change="change">
    <!--
      trueLabel/falseLabel not exist
    -->
    <input
      v-else
      class="v-checkbox-input__origin"
      type="checkbox"
      :disabled="disabled"
      :value="label"
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
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    label: [Number, String],
    indeterminate: Boolean
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
      } else if (Array.isArray(this.innerValue)) {
        return this.innerValue.indexOf(this.label) > -1
      } else {
        return this.innerValue === this.trueLabel
      }
    },
    inGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vCheckboxGroup') {
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
    }
  },
  methods: {
    change (e) {
      this.$emit('change', this.value)
    }
  }
}
</script>
