import Emitter from './emitter.js'

export default {
  mixins: [Emitter],

  computed: {
    formItem () {
      let parent = this.$parent
      if (parent) {
        if (parent.$options.name === 'vFormItem') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    },
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
    }
  },
  methods: {
    formValidate () {
      this.dispatch('vFormItem', 'fromItem.inner.validate', this.shareInnerValue)
    },
    doBlurValidate () {
      if (this.form && this.form.validateTrigger === 'blur') {
        this.dispatch('vFormItem', 'fromItem.inner.validate', this.shareInnerValue)
      }
    },
    doChangeValidate () {
      if (this.formItem && !this.formItem.isValid) {
        this.dispatch('vFormItem', 'fromItem.inner.validate', this.shareInnerValue)
      }
    }
  },
  created () {
    this.$on('form.validate', this.formValidate)
  }
}
