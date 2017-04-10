<template>
<div class="v-dropdown">
  <slot></slot>
  <slot name="dropdown" v-if="open"></slot>
</div>
</template>
<script>
export default {
  name: 'vDropdown',
  data() {
    return {
      open: true,
    };
  },
  methods: {
  },
};
</script>
