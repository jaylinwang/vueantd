<template>
  <button class="v-btn" :class="classList">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'vButton',
    props: {
      type: {
        type: String,
        default: 'default',
      },
      size: {
        type: String,
        default: 'normal',
      },
    },
    computed: {
      classList() {
        let list = [];
        if (this.type !== 'default') {
          list.push(`v-btn-${this.type}`);
        }
        if (this.size !== 'normal') {
          list.push(`v-btn-${this.size}`);
        }
        return list;
      },
    },
  };

</script>
