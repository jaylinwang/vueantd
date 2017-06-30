<template>
<div
  class="v-form-item">
  <div
    class="v-form-item-title"
    v-if="title"
    :style="titleStyle">
    {{ title }}
  </div>
  <div
    class="v-form-item-body">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'vFormItem',

  props: {
    title: {
      props: String
    }
  },

  computed: {
    form () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vForm') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    },

    titleStyle () {
      let itemStyle = {}
      if (this.form) {
        if (this.form.layout === 'horizontal') {
          itemStyle.width = this.form.titleWidth
          itemStyle.textAlign = this.form.titleAlign
        }
      }
      return itemStyle
    }
  }
}
</script>
