<template>
<div class="v-select"
  :class="classList"
  :style="{
    width: width + 'px'
  }"
  v-outsideclick="handleOutsideClick">
  <div
    class="v-select-input"
    tabindex="0"
    ref="popRef"
    @click="toggleOption"
    @mouseenter="showClear"
    @mouseleave="hideClear">
    <!-- 多选模式 -->
    <template v-if="mode == 'multiple'">
      <div
        v-if="selectedOption.length > 0"
        class="v-select-input__label">
        <span
          v-for="(option, index) in selectedOption"
          class="v-select-input__tag">
          {{option.text}}
          <span
            class="v-select-input__tagclose"
            @click.stop="removeTag(index)">
            <v-icon type="close"></v-icon>
          </span>
        </span>
      </div>
      <div
        v-else
        class="v-select-input__placeholder">
        {{placeholder}}
      </div>
    </template>
    <!-- 单选 -->
    <template v-else>
      <div
        v-if="selectedOption"
        class="v-select-input__label">
        {{selectedOption.text}}
      </div>
      <div
        v-else
        class="v-select-input__placeholder">
        {{placeholder}}
      </div>
    </template>
    <div class="v-select-input__caret"></div>
    <div
      v-show="isClearShow"
      class="v-select-input__clear"
      @click.stop="clearValue">
      <v-icon type="close"></v-icon>
    </div>
  </div>
  <popper
    :style="{
      width: width + 'px'
    }"
    ref="optionMenu"
    v-show="isOptionShow">
    <ul class="v-option-menu">
      <slot></slot>
    </ul>
  </popper>
</div>
</template>

<script>
import Popper from '../../base/popper.vue'
import outsideclick from '../../../directives/outsideclick.js'

export default {
  name: 'vSelect',
  components: {
    Popper
  },
  directives: {
    outsideclick
  },
  props: {
    value: {},
    placeholder: String,
    width: Number,
    disabled: Boolean,
    allowClear: Boolean,
    size: String,
    mode: String
  },
  data () {
    return {
      isOptionShow: false,
      isClearShow: false,
      options: []
    }
  },
  computed: {
    classList () {
      let classList = []
      if (this.size) {
        classList.push(`v-select__${this.size}`)
      }
      if (this.mode) {
        classList.push(`v-select__${this.mode}`)
      }
      if (this.isOptionShow) {
        classList.push('open')
      }
      if (this.disabled) {
        classList.push('disabled')
      }
      return classList
    },
    selectedOption () {
      const self = this
      if (this.mode === 'multiple') {
        let selectedOption = []
        self.value.forEach((v) => {
          self.options.forEach((option) => {
            if (v === option.label) {
              selectedOption.push(option)
            }
          })
        })
        return selectedOption
      } else {
        return this.options.find((option) => {
          return self.value === option.label
        })
      }
    }
  },
  watch: {
    isOptionShow (val) {
      if (val) {
        this.$refs.optionMenu.init()
      } else {
        this.$refs.optionMenu.destroy()
      }
    },
    value () {
      this.$refs.optionMenu.update()
    }
  },
  methods: {
    toggleOption () {
      if (this.disabled) {
        return false
      }
      this.isOptionShow = !this.isOptionShow
    },
    clearValue () {
      if (this.mode === 'multiple') {
        this.$emit('input', [])
      } else {
        this.$emit('input', '')
      }

    },
    handleOutsideClick () {
      this.isOptionShow = false
    },
    showClear () {
      if (this.mode === 'multiple') {
        if (this.allowClear &&
            !this.disabled &&
            this.selectedOption.length > 0) {
          this.isClearShow = true
        }
      } else {
        if (this.allowClear &&
            !this.disabled &&
            this.selectedOption) {
          this.isClearShow = true
        }
      }
    },
    hideClear () {
      this.isClearShow = false
    },
    removeTag (index) {
      this.value.splice(index, 1)
    }
  }
}
</script>
