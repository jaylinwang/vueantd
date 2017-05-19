<template>
<li
  class="v-option-item"
  :class="{
    'disabled': disabled,
    'selected': itemSelected
  }"
  @click="handleClick">
  {{text}}
</li>
</template>

<script>
import Emitter from '../../../mixins/emitter.js'

export default {
  name: 'vOption',

  mixins: [Emitter],

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [Number, String]
    },
    text: {
      type: String
    }
  },

  computed: {
    select () { // option所在的select
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vSelect') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    },

    itemSelected () {
      if (this.select.mode === 'multiple') {
        return this.select.value.indexOf(this.label) > -1
      } else {
        return this.select.value === this.label
      }
    }
  },

  methods: {
    handleClick () {
      if (this.disabled) {
        return false
      }
      this.dispatch('vSelect', 'select.option.click', this)
    }
  },

  created () {
    this.select.options.push(this)
  }
}
</script>
