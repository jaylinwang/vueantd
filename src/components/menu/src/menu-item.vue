<template>
<li
  class="v-menu-item"
  :class="{
    'selected': isItemSelected
  }"
  @click="handleMenuItemClick">
  <slot></slot>
</li>
</template>

<script>
export default {
  name: 'vMenuItem',

  props: {
    label: {
      type: [Number, String]
    }
  },

  computed: {
    menu () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vMenu') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    },
    submenu () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vSubmenu') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    },
    isItemSelected () {
      return String(this.menu.value) === String(this.label)
    }
  },

  methods: {
    handleMenuItemClick () {
      if (this.menu) {
        this.menu.$emit('input', this.label)
        this.menu.$emit('select', this.label)
      }
    }
  },

  created () {
    if (this.submenu) {
      this.submenu.childrenLabels.push(this.label)
    }
  }
}
</script>
