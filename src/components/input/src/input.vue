<template>
<div
  class="v-input"
  :class="classList">
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

  mixins: [FormValidate],

  props: {
    value: {},
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    },
    icon: {
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
      this.textareaStyle = calcTextareaHeight(event.target, this.minRows, this.maxRows)
    },
    handleInputBlur () {
      this.$emit('blur')
      console.debug('>>blur')
      this.doBlurValidate(this.innerValue)
    },
    handleInputFocus () {
      this.$emit('focus')
    }
  }
}
</script>
