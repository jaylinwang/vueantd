<template>
<li
  class="v-submenu"
  :class="{
    'open': isSubmenuOpen,
    'selected': isItemSelected
  }"
  @mouseleave="hideItem">
  <div
    class="v-submenu__title"
    ref="popperRef"
    @click="toggleSubmenuOpen"
    @mouseenter="showItem">
    <slot name="title"></slot>
  </div>
  <template v-if="menuMode == 'vertical'">
    <ul class="v-submenu__content">
      <slot></slot>
    </ul>
  </template>
  <template v-else>
    <v-popper
      placement="bottom-start"
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
export default {
  name: 'vSubmenu',

  props: {
    label: {
      type: [Number, String]
    }
  },

  data () {
    return {
      itemVisible: false,
      childrenLabels: []
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
    isSubmenuOpen () {
      if (this.menu) {
        return this.menu.openLabels && this.menu.openLabels.indexOf(this.label) !== -1
      }
      return false
    },

    isItemSelected () {
      if (this.menu) {
        return this.childrenLabels.indexOf(this.menu.value) !== -1
      }
      return false
    }
  },

  methods: {
    toggleSubmenuOpen () {
      if (this.menu && this.menu.mode === 'vertical') {
        const index = this.menu.openLabels.indexOf(this.label)
        if (index === -1) {
          this.menu.openLabels.push(this.label)
          this.menu.$emit('openChange', this.menu.openLabels)
        } else {
          this.menu.openLabels.splice(index, 1)
          this.menu.$emit('openChange', this.menu.openLabels)
        }
      }
    },

    showItem () {
      if (this.menu && this.menu.mode === 'horizontal') {
        this.itemVisible = true
        const index = this.menu.openLabels.indexOf(this.label)
        if (index === -1) {
          this.menu.openLabels.push(this.label)
          this.menu.$emit('openChange', this.menu.openLabels)
        }
      }
    },

    hideItem () {
      if (this.menu && this.menu.mode === 'horizontal') {
        this.itemVisible = false
        const index = this.menu.openLabels.indexOf(this.label)
        if (index !== -1) {
          this.menu.openLabels.splice(index, 1)
          this.menu.$emit('openChange', this.menu.openLabels)
        }
      }
    }
  }
}
</script>
