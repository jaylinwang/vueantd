<template>
  <button class="v-btn"
    :class="classList"
    @mouseup="mouseup">
    <v-icon v-if="icon" :type="icon"></v-icon>
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
      },
      icon:{
        type: String,
      },
      shape: {
        type: String,
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
        if (this.clicked) {// 按钮被点击状态
          list.push('clicked');
        }
        if (this.disabled) { // 按钮禁用
          list.push('disabled');
        }
        if (this.shape) { // 按钮形状
          list.push(`v-btn-${this.shape}`);
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
