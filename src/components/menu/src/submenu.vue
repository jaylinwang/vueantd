<template>
<li
  class="v-submenu"
  :class="{
    'open': isOpen,
    'selected': isSelected
  }"
  @mouseleave="hideItem">
  <div
    class="v-submenu__title"
    ref="popperRef"
    @click="toggleSubmenuOpen"
    @mouseenter="showItem">
    <slot name="title"></slot>
  </div>
  <template v-if="menuMode == 'inline'">
    <div
      class="v-submenu-container"
      :style="{
        height: isOpen ? contentHeight : 0
      }">
    <ul
      class="v-submenu__content"
      :ref="`content_${label}`">
      <slot></slot>
    </ul>
    </div>
  </template>
  <template v-else>
    <v-popper
      :placement="placement"
      ref="drop"
      v-show="itemVisible">
      <ul class="v-submenu__content">
        <slot></slot>
      </ul>
    </v-popper>
  </template>
</li>
</template>
<script>
import Emitter from '../../../mixins/emitter.js'

export default {
  name: 'vSubmenu',
  componentName: 'vSubmenu',

  mixins: [Emitter],

  props: {
    label: {
      type: [Number, String]
    }
  },

  data () {
    return {
      itemVisible: false,
      contentHeight: 0,
      items: []
    }
  },

  watch: {
    itemVisible (val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.drop.init()
        })
      } else {
        this.$refs.drop.distroy()
      }
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
    menuMode () {
      return this.menu && this.menu.mode
    },
    placement () {
      if (this.menuMode === 'horizontal') {
        return 'bottom-start'
      } else {
        return 'right-start'
      }
    },
    isOpen () {
      if (this.menu) {
        return this.menu.openLabels && this.menu.openLabels.indexOf(this.label) !== -1
      }
      return false
    },

    isSelected () {
      const vm = this
      let selected = false
      if (vm.menu) {
        vm.items.forEach((menuItem) => {
          if (menuItem.label === vm.menu.value) {
            selected = true
            return false
          }
        })
      }
      return selected
    }
  },

  methods: {
    toggleSubmenuOpen () {
      if (this.menuMode === 'inline') {
        this.dispatch('vMenu', 'submenu.openChange', this)
      }
    },

    showItem () {
      if (this.menuMode !== 'inline') {
        this.itemVisible = true
        this.dispatch('vMenu', 'submenu.openChange', this)
      }
    },

    hideItem () {
      if (this.menuMode !== 'inline') {
        this.itemVisible = false
        this.dispatch('vMenu', 'submenu.openChange', this)
      }
    }
  },

  updated () {
    let contentKey = `content_${this.label}`
    this.contentHeight = this.$refs[contentKey] && `${this.$refs[contentKey].clientHeight}px`
  },

  mounted () {
    let contentKey = `content_${this.label}`
    this.contentHeight = this.$refs[contentKey] && `${this.$refs[contentKey].clientHeight}px`
  }
}
</script>
