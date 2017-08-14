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
  componentName: 'vMenu',

  props: {
    value: {},
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'inline'
    },
    openLabels: {
      type: Array,
      default: function () {
        return []
      }
    },
    mini: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    menuClassList () {
      let classList = []
      classList.push(`v-menu-${this.mode}`)
      if (this.theme !== 'custom') {
        classList.push(`v-menu__${this.theme}`)
      }
      if (this.mini) {
        classList.push('mini')
      }
      return classList
    }
  },

  methods: {
    handleMenuItemClick (menuItem) {
      this.$emit('input', menuItem.label)
      this.$emit('select', menuItem.label, menuItem)
    },

    handleSubmenuOpenChange (submenu) {
      let label = submenu.label
      let index = this.openLabels.indexOf(label)
      if (index === -1) {
        this.openLabels.push(label)
      } else {
        this.openLabels.splice(index, 1)
      }
    }
  },

  created () {
    this.$on('menuitem.click', this.handleMenuItemClick)
    this.$on('submenu.openChange', this.handleSubmenuOpenChange)
  }
}
</script>
