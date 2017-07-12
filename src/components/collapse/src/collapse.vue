<template>
<div
  class="v-collapse"
  :class="{
    'bordered': bordered
  }">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'vCollapse',

  props: {
    value: {},
    bordered: {
      type: Boolean,
      default: true
    }
  }
}
</script>
