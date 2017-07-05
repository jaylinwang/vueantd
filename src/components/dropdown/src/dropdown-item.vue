<template>
<li
  class="v-dropdown-item"
  :class="{
    'disabled': disabled
  }"
  @click="handleClick">
  <slot></slot>
</li>
</template>
<script>
  export default {
    name: 'vDropdownItem',

    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      handleClick () {
        if (this.disabled) {
          return
        }
        this.$emit('click')
      }
    }
  }
</script>
