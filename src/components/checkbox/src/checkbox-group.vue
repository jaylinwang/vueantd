<template>
<div class="v-checkbox-group">
<slot></slot>
</div>
</template>

<script>
import FormValidate from '../../../mixins/form-validate.js'

export default {
  name: 'vCheckboxGroup',

  mixins: [FormValidate],

  props: {
    value: {}
  },

  computed: {
    shareInnerValue () {
      return this.value
    }
  },

  watch: {
    value (val) {
      this.$emit('change', val)
      this.doChangeValidate()
    }
  }
}
</script>
