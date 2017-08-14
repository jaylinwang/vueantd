<template>
<li
  class="v-option-item"
  v-show="visible"
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
  componentName: 'vOption',

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

  data () {
    return {
      visible: true
    }
  },

  computed: {
    select () {
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
    },

    handleQueryChange (query) {
      let parsedQuery = String(query).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1')
      this.visible = new RegExp(parsedQuery, 'i').test(this.text) || this.created
      if (!this.visible) {
        this.select.selectedCount --
      }
    }
  },

  created () {
    this.select.options.push(this)
    this.select.selectedCount ++
    this.$on('select.query.change', this.handleQueryChange)
  }
}
</script>
