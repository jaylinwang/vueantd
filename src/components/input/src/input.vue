<template>
<div
  class="v-input"
  :class="classList"
  :style="styleObj">
  <!--非文本区域-->
  <template
    v-if="type !== 'textarea'">
    <div
      class="v-input-before"
      v-if="$slots.before != null">
      <slot name="before"></slot>
    </div>
    <div class="v-input-inner">
      <input
        ref="innerInput"
        class="v-input-origin"
        :value="innerValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleInput"
        @blur="handleInputBlur"
        @focus="handleInputFocus">
      <div
        class="v-input-icon"
        v-if="icon"
        @click="handleIconClick">
        <v-icon :type="icon"></v-icon>
      </div>
    </div>
    <div
      class="v-input-after"
      v-if="$slots.after != null">
      <slot name="after"></slot>
    </div>
  </template>
  <!--文本域-->
  <textarea
    class="v-textarea-origin"
    style="width:100%;"
    :style="textareaStyle"
    :placeholder="placeholder"
    v-else
    :rows="innerRows"
    :value="innerValue"
    :disabled="disabled"
    @input="handleTextareaInput"
    @blur="handleInputBlur"
    @focus="handleInputFocus"></textarea>
</div>
</template>
<script>
import calcTextareaHeight from './calcTextareaHeight'
import FormValidate from '../../../mixins/form-validate.js'

export default {
  name: 'vInput',
  componentName: 'vInput',

  mixins: [FormValidate],

  props: {
    value: {},
    width: { // 宽度
      type: String,
      default: '100%'
    },
    size: { // 尺寸
      type: String,
      default: 'normal'
    },
    icon: { // 图标
      type: String
    },
    rows: {
      type: Number,
      default: 2
    },
    autosize: {
      type: Boolean,
      default: false
    },
    minRows: {
      type: Number
    },
    maxRows: {
      type: Number
    },
    type: { // 类型
      type: String,
      default: 'text'
    },
    placeholder: { // 输入提示
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: { // 原生: 是否只读
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      innerValue: this.value,
      textareaStyle: {}
    }
  },

  watch: {
    value (val) {
      this.innerValue = val
      this.doChangeValidate()
    }
  },

  computed: {
    // from validate 必需计算属性
    shareInnerValue () {
      return this.innerValue
    },
    classList () {
      let classList = []
      classList.push(`v-input-${this.size}`)
      if (this.icon) {
        classList.push('v-input__hasicon')
      }
      if (this.$slots.before) {
        classList.push('v-input__hasbefore')
      }
      if (this.$slots.after) {
        classList.push('v-input__hasafter')
      }
      return classList
    },
    styleObj () {
      let styleObj = {}
      styleObj.width = this.width
      return styleObj
    },
    innerRows () {
      if (this.autosize) {
        return this.minRows
      } else {
        return this.rows
      }
    }
  },

  methods: {
    blur () {
      this.$refs.innerInput.blur()
    },
    focus () {
      this.$refs.innerInput.focus()
    },
    handleInput (event) {
      let value = event.target.value
      this.$emit('input', value)
    },
    handleIconClick () {
      this.$emit('iconClick', this.innerValue)
    },
    handleTextareaInput (event) {
      let value = event.target.value
      this.$emit('input', value)
      if (this.autosize) {
        this.textareaStyle = calcTextareaHeight(event.target, this.minRows, this.maxRows)
      }
    },
    handleInputBlur () {
      this.$emit('blur')
      this.doBlurValidate(this.innerValue)
    },
    handleInputFocus () {
      this.$emit('focus')
    }
  }
}
</script>
