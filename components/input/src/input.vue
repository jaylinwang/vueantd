<template>
  <input class="v-input" :type="type" :placeholder="placeholder">
</template>
<script>
export default {
  name: 'vInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    }
  }
}
</script>
