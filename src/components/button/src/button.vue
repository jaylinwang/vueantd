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
      loading: {
        type: Boolean,
        default: false
      },
      nativeType: {
        type: String
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
        list.push(`v-btn-${this.type}`)
        if (this.size !== 'normal') {
          list.push(`v-btn-${this.size}`)
        }
        if (this.clicked) { // 按钮被点击状态
          list.push('clicked')
        }
        if (this.shape) { // 按钮形状
          list.push(`v-btn-${this.shape}`)
        }
        if (this.loading) {
          list.push('loading')
        }
        if (this.disabled) { // 按钮禁用
          list.push('disabled')
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
        this.$emit('click')
      }
    }
  }

</script>
