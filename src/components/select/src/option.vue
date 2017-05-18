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
        if (this._select.mode === 'multiple') { // 多选模式
          return this._select.value.indexOf(this.label) > -1
        } else {
          return this._select.value === this.label
        }
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
        if (this._select.mode === 'multiple') {
          let index = this._select.value.indexOf(this.label)
          if (index > -1) {
            this._select.value.splice(index, 1)
            this._select.$emit('input', this._select.value)
          } else {
            this._select.value.push(this.label)
            this._select.$emit('input', this._select.value)
          }
          this._select.$emit('change')
        } else { // 单选
          this._select.isOptionShow = false
          if (!this.selected) {
            this._select.$emit('input', this.label)
            this._select.$emit('change')
          }
        }
      }
    }
  },
  created () {
    if (this.inSelect) {
      this._select.options.push({
        'label': this.label,
        'text': this.text
      })
    }
  }
}
</script>
