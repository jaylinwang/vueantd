<template>
<div class="v-radio-group">
  <slot></slot>
</div>
</template>

<script>
import FormValidate from '../../../mixins/form-validate.js'
export default {
  name: 'vRadioGroup',

  mixins: [FormValidate],

  props: {
    value: {}
  },

  watch: {
    value (val) {
      this.$emit('change', val)
      this.doChangeValidate()
    }
  },

  computed: {
    shareInnerValue () {
      return this.value
    }
  }
}
</script>
