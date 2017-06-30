<template>
<form
  class="v-form"
  :class="formClassList"
  @submit.prevent="handleFormSubmit">
  <slot></slot>
</form>
</template>

<script>
import Emitter from '../../../mixins/emitter.js'

export default {
  name: 'vForm',

  mixins: [Emitter],

  props: {
    model: {
      type: Object
    },
    layout: {
      type: String,
      default: 'horizontal'
    },
    titleWidth: {
      type: String,
      default: '100px'
    },
    titleAlign: {
      type: String,
      default: function () {
        if (this.layout === 'horizontal') {
          return 'right'
        } else {
          return 'left'
        }
      }
    },
    validateTrigger: {
      type: String,
      default: 'blur'
    },
    rules: {
      type: Object
    }
  },

  computed: {
    formClassList () {
      let classList = []
      classList.push(`v-form-${this.layout}`)
      return classList
    }
  },

  methods: {
    handleFormSubmit () {
      this.broadcast('vInput', 'form.validate')
      this.broadcast('vSelect', 'form.validate')
      this.broadcast('vCheckboxGroup', 'form.validate')
      this.broadcast('vRadioGroup', 'form.validate')
      this.$emit('submit', this.model)
    }
  }
}
</script>
