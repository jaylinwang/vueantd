<template>
<form
  class="v-form"
  :class="formClassList"
  @submit.prevent="handleFormSubmit">
  <slot></slot>
</form>
</template>

<script>
export default {
  name: 'vForm',

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
      this.$emit('submit', this.model)
    }
  }
}
</script>
