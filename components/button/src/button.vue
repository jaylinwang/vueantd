<template>
  <button class="v-btn"
    :class="classList"
    @mouseup="mouseup">
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
    data() {
      return {
        clicked: false,
      }
    },
    computed: {
      classList() {
        let list = [];
        list.push(`v-btn-${this.type}`);
        if (this.size !== 'normal') {
          list.push(`v-btn-${this.size}`);
        }
        if (this.clicked) {
          list.push('clicked');
        }
        return list;
      },
    },
    methods: {
      mouseup(){
        this.clicked = true;
        setTimeout(() => {
          this.clicked = false;
        }, 300);
      }
    }
  };

</script>
