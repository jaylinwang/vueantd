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
      disabled: {
        type: Boolean,
        default: false,
      }
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
        if (this.clicked) {// 按钮被点击状态
          list.push('clicked');
        }
        if (this.disabled) { // 按钮禁用
          list.push('disabled');
        }
        return list;
      },
    },
    methods: {
      mouseup(){
        if(this.disabled){
          return;
        }
        this.clicked = true;
        setTimeout(() => {
          this.clicked = false;
        }, 300);
      }
    }
  };

</script>
