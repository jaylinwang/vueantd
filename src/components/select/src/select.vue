<script>
import Popper from '../../base/popper.vue'

export default {
  name: 'vSelect',
  components: {
    Popper
  }
}
</script>
<template>
<div class="v-select">
  <div class="v-select-input" tabindex="0">
  </div>

  <slot></slot>
</div>
</template>
