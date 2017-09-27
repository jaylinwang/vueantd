<template>
  <button class="v-btn"
    :type="nativeType"
    :class="classList"
    @mouseup="mouseup"
    @click.stop="handleClick">
    <v-icon
      v-if="loading"
      type="loading"
      spin>
    </v-icon>
    <v-icon
      v-if="icon && !loading"
      :type="icon">
    </v-icon>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'vButton',
    componentName: 'vButton',

    props: {
      type: { // 按钮类型
        type: String,
        default: 'default'
      },
      size: { // 按钮尺寸
        type: String,
        default: 'normal'
      },
      disabled: { // 按钮可用状态
        type: Boolean,
        default: false
      },
      icon: { // 按钮图标
        type: String
      },
      shape: { // 按钮形状
        type: String
      },
      loading: { // 按钮加载状态
        type: Boolean,
        default: false
      },
      nativeType: { // 按钮原生类型
        type: String,
        default: 'button'
      }
    },

    data () {
      return {
        clicked: false
      }
    },

    computed: {
      classList () {
        let list = []
        // 按钮类型
        list.push(`v-btn-${this.type}`)
         // 按钮形状
        if (this.shape) {
          list.push(`v-btn-${this.shape}`)
        }
        // 按钮大小
        if (this.size !== 'normal') {
          list.push(`v-btn-${this.size}`)
        }
        // 按钮加载状态
        if (this.loading) {
          list.push('loading')
        }
        // 按钮禁用状态
        if (this.disabled) {
          list.push('disabled')
        }
        // 按钮点击状态
        if (this.clicked) {
          list.push('clicked')
        }
        return list
      }
    },
    methods: {
      mouseup () {
        if (this.disabled || this.loading) {
          return
        }
        this.clicked = true
        setTimeout(() => {
          this.clicked = false
        }, 300)
      },
      handleClick () {
        if (this.disabled || this.loading) {
          return
        }
        this.$emit('click')
      }
    }
  }

</script>
