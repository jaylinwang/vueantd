<template>
<li
  class="v-option-item"
  :class="{
    'disabled': disabled,
    'selected': selected
  }"
  @click="handleClick">
  {{text}}
</li>
</template>

<script>
export default {
  name: 'vOption',
  props: {
    disabled: Boolean,
    label: [Number, String],
    text: [String]
  },
  computed: {
    inSelect () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vSelect') {
          this._select = parent
          return true
        } else {
          parent = parent.$parent
        }
      }
      return false
    },
    selected () {
      if (this.inSelect) {
        if (this.label === this._select.value) {
          this._select.label = this.text
          return true
        }
        return false
      }
      return false
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) {
        return false
      }
      if (this.inSelect) {
        this._select.isOptionShow = false
        if (!this.selected) {
          this._select.$emit('input', this.label)
          this._select.$emit('change')
        }
      }
    }
  },
  created () {
    if (this.inSelect) {
      this._select.options.push({
        label: this.label,
        text: this.text
      })
    }
  }
}
</script>
