<template>
<div class="v-dropdown"
     @mouseenter="handleMouseEnter"
     @mouseleave="handleMouseLeave">
  <div class="v-dropdown-rel" ref="dropHandle">
    <slot></slot>
  </div>
  <popper ref="drop" v-show="dropdownVisible">
    <slot name="dropdown"></slot>
  </popper>
</div>
</template>
<script>
import Popper from "../../core/popper.vue";

export default {
  name: 'vDropdown',
  components: {
    Popper,
  },
  data() {
    return {
      dropdownVisible: false,
      popper: null,
    };
  },
  watch: {
    dropdownVisible(val) {
      if(val) { // 更新
        this.$refs.drop.update();
      }  else { // 销毁
        this.$refs.drop.destroy();
      }
    }
  },
  methods: {
    handleMouseEnter() {
      this.dropdownVisible = true;
    },
    handleMouseLeave() {
      this.dropdownVisible = false;
    }
  },
};
</script>
