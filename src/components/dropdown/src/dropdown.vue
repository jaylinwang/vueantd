<template>
<div class="v-dropdown"
     v-outsideclick="handleClickoutside"
     @mouseleave="handleMouseLeave">
  <!--按钮分离样式的下拉菜单-->
  <div v-if="type == 'splitButton'"
        class="v-dropdown-rel"
        ref="popperRef">
    <v-button-group>
      <v-button :type="buttonType">
        <slot></slot>
      </v-button>
      <v-button class="v-dropdown-icon"
                @mouseenter.native="handleMouseEnter"
                @click.native="handleClick">
        <v-icon :type="iconType"></v-icon>
      </v-button>
    </v-button-group>
  </div>
  <!--普通的下拉菜单-->
  <div v-else
       class="v-dropdown-rel"
       ref="popperRef"
       @mouseenter="handleMouseEnter"
       @click.capture="handleClick">
      <slot></slot>
  </div>
  <v-popper
      ref="drop"
      v-show="dropdownVisible"
      :placement="placement"
      :show-arrow="showArrow">
    <slot name="dropdown"></slot>
  </v-popper>
</div>
</template>
<script>
import outsideclick from '../../../directives/outsideclick'

export default {
  name: 'vDropdown',

  props: {
    type: {
      type: String
    },
    buttonType: {
      type: String
    },
    iconType: {
      type: String,
      default: 'down'
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    showArrow: {
      type: Boolean,
      default: false
    }
  },

  directives: {
    outsideclick
  },

  data () {
    return {
      dropdownVisible: false,
      popper: null
    }
  },

  watch: {
    dropdownVisible (val) {
      if (val) { // 更新
        this.$refs.drop.init()
      } else { // 销毁
        this.$refs.drop.destroy()
      }
    }
  },

  methods: {
    handleMouseEnter () {
      if (this.trigger === 'hover') {
        this.dropdownVisible = true
      }
    },
    handleMouseLeave () {
      if (this.trigger === 'hover') {
        this.dropdownVisible = false
      }
    },
    handleClick () {
      if (this.trigger === 'click') {
        this.dropdownVisible = !this.dropdownVisible
      }
    },
    handleClickoutside () {
      if (this.trigger === 'click' && this.dropdownVisible) {
        this.dropdownVisible = false
      }
    }
  }
}
</script>
