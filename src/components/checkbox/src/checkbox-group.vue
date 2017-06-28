<template>
<div class="v-checkbox-group">
<slot></slot>
</div>
</template>

<script>
export default {
  name: 'vCheckboxGroup',

  props: {
    value: {}
  },

  watch: {
    value (val) {
      this.$emit('change', val)
    }
  }

}
</script>
