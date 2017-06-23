<template>
<li
  class="v-menu-item"
  :class="{
    'selected': isSelected
  }"
  @click="handleMenuItemClick">
    <slot></slot>
</li>
</template>

<script>
import Emitter from '../../../mixins/emitter.js'

export default {
  name: 'vMenuItem',

  mixins: [Emitter],

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
    isSelected () {
      return this.menu && this.menu.value === this.label
    }
  },

  methods: {
    handleMenuItemClick () {
      this.dispatch('vMenu', 'menuitem.click', this)
    }
  },

  created () {
    this.submenu && this.submenu.items.push(this)
  }
}
</script>
