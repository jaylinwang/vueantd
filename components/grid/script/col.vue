<template>
  <div :class="classList" :style="styleObj">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AeCol',
    componentName: 'AeCol',

    props: {
      span: {
        type: Number,
        default: 0,
      },
      order: Number,
      offset: Number,
      push: Number,
      pull: Number,
      xs: {
        type: [Number, Object],
        default: 0,
      },
      sm: {
        type: [Number, Object],
        default: 0,
      },
      md: {
        type: [Number, Object],
        default: 0,
      },
      lg: {
        type: [Number, Object],
        default: 0,
      },
    },

    computed: {
      classList() {
        const list = [];
        if (this.span > 0) {
          list.push(`ae-col-${this.span}`);
        }
        if (this.offset) {
          list.push(`ae-col-offset-${this.offset}`);
        }
        if (this.push) {
          list.push(`ae-col-push-${this.push}`);
        }
        if (this.pull) {
          list.push(`ae-col-pull-${this.pull}`);
        }
        const sizeKeyList = ['xs', 'sm', 'md', 'xs'];
        sizeKeyList.forEach((sizeKey) => {
          const size = this[sizeKey];
          if (typeof size === 'number') {
            if (size > 0) {
              list.push(`ae-col-${sizeKey}-${size}`);
            }
          } else if (typeof size === 'object') {
            if (size.span && size.span > 0) {
              list.push(`ae-col-${sizeKey}-${size.span}`);
            }
            if (size.offset && size.offset > 0) {
              list.push(`ae-col-offset-${sizeKey}-${size.offset}`);
            }
          }
        });
        return list;
      },
      styleObj() {
        const style = {};
        const gutter = this.$parent.gutter;
        if (gutter && gutter > 0) {
          style.paddingLeft = `${gutter / 2}px`;
          style.paddingRight = style.paddingLeft;
        }
        if (this.span <= 0 && !this.xs && this.sm && this.md && this.lg) {
          style.display = 'none';
        }
        return style;
      },
    },
  };

</script>
