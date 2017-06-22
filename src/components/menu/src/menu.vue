<template>
<ul
  class="v-menu"
  :class="menuClassList">
  <slot></slot>
</ul>
</template>
<script>
export default {
  name: 'vMenu',

  props: {
    value: {},
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    openLabels: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  computed: {
    menuClassList () {
      let classList = []
      classList.push(`v-menu-${this.mode}`)
      classList.push(`v-menu__${this.theme}`)
      return classList
    }
  }
}
</script>
