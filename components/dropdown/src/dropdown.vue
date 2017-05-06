<template>
<div class="v-dropdown"
     @mouseleave="handleMouseLeave">
  <!--按钮分离样式的下拉菜单-->
  <div v-if="type == 'splitButton'"
        class="v-dropdown-rel"
        ref="handle">
    <v-button-group>
      <v-button :type="buttonType">
        <slot></slot>
      </v-button>
      <v-button class="v-dropdown-icon"
                @mouseenter.native="handleMouseEnter">
        <v-icon :type="iconType"></v-icon>
      </v-button>
    </v-button-group>
  </div>
  <!--普通的下拉菜单-->
  <div v-else
       class="v-dropdown-rel"
       ref="handle"
       @mouseenter="handleMouseEnter">
      <slot></slot>
  </div>
  <popper ref="drop" v-show="dropdownVisible"
          :placement="placement">
    <slot name="dropdown"></slot>
  </popper>
</div>
</template>
<script>
import Popper from '../../core/popper.vue'

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
      default: 'bottomRight'
    },
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  components: {
    Popper
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
        this.$refs.drop.update()
      } else { // 销毁
        this.$refs.drop.destroy()
      }
    }
  },
  methods: {
    handleMouseEnter () {
      this.dropdownVisible = true
    },
    handleMouseLeave () {
      this.dropdownVisible = false
    }
  }
}
</script>
