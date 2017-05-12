<template>
<div>
  <label class="v-checkbox">
    <input class="v-checkbox-origin"
           type="checkbox"
           @change="change"
           checked="checked">
    <div class="v-checkbox-input"
         :class="classList">
      <div class="v-checkbox-input__inner"></div>
    </div>
    <div class="v-checkbox-label">
      <slot></slot>
    </div>
  </label>
</div>
</template>
<script>
export default {
  name: 'vCheckbox',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      checked: false
    }
  },
  created () {
    console.log(this.value)
    if (this.value) {
      this.checked = true
    }
  },
  computed: {
    classList () {
      let classList = []
      if (this.checked) {
        classList.push('checked')
      }
      return classList
    }
  },
  methods: {
    change (e) {
      this.checked = e.target.checked
    }
  }
}
</script>

