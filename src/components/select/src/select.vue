<template>
<div class="v-select"
  :class="classList"
  :style="{
    width: width + 'px'
  }"
  v-outsideclick="handleOutsideclick">
  <div
    class="v-select-input"
    tabindex="0"
    ref="popperRef"
    @click.stop="handleInputClick"
    @mouseenter="showClearIcon"
    @mouseleave="hideClearIcon">
    <!-- 多选模式 -->
    <span
      v-if="(mode == 'multiple') && (selectedOption.length > 0)"
      class="v-select-input__tags">
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
    </span>
    <!-- 单选 -->
    <span
      v-else-if="!searachInputActive && selectedOption"
      class="v-select-input__label">
      {{selectedOption && selectedOption.text}}
    </span>

    <span
      v-show="placeholderVisible"
      class="v-select-input__placeholder">
      {{placeholder}}
    </span>

    <input
      v-if="searchable"
      class="v-select-input__search"
      ref="searachInput"
      type="text"
      v-model="query"
      :style="searchInputStyle"
      :placeholder="searchInputPlaceholder"
      @keydown="handleSearchInputKeyDown"
      @keyup="handleSearchInputKeyUp"
      @focus="handleSearchInputFocus"
      @blur="handleSearchInputBlur">

    <div class="v-select-input__caret"></div>
    <div
      v-show="clearIconVisible"
      class="v-select-input__clear"
      @click.stop="clearValue">
      <v-icon type="close"></v-icon>
    </div>
  </div>
  <v-popper
    :style="{
      width: width + 'px'
    }"
    ref="optionMenu"
    v-show="menuVisible">
    <ul class="v-option-menu">
      <slot></slot>
    </ul>
  </v-popper>
</div>
</template>

<script>
import outsideclick from '../../../directives/outsideclick.js'
import Emitter from '../../../mixins/emitter.js'

export default {
  name: 'vSelect',

  mixins: [Emitter],

  directives: {
    outsideclick
  },

  props: {
    value: {},
    placeholder: {
      type: String
    },
    width: {
      type: [Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    mode: {
      type: String,
      default: 'single'
    },
    searchable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      options: [],
      searchedCount: 0,
      menuVisible: false,
      clearIconVisible: false,
      query: '',
      searchInputPlaceholder: '',
      searchInputWidth: 20,
      searachInputActive: false
    }
  },

  computed: {
    classList () {
      let classList = []
      if (this.size) {
        classList.push(`v-select__${this.size}`)
      }
      if (this.mode) {
        classList.push(`v-select-${this.mode}`)
      }
      if (this.menuVisible) {
        classList.push('open')
      }
      if (this.disabled) {
        classList.push('disabled')
      }
      return classList
    },

    searchInputStyle () {
      let style = {}
      if (this.mode === 'multiple') {
        style = {
          width: `${this.searchInputWidth}px`
        }
      }
      return style
    },

    placeholderVisible () {
      if (this.searachInputActive) {
        return false
      }
      if (this.mode === 'multiple') {
        return this.value.length === 0
      } else {
        return this.value === ''
      }
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
    menuVisible (val) {
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
    showClearIcon () {
      if (this.mode === 'multiple') {
        if (this.allowClear &&
            !this.disabled &&
            this.selectedOption.length > 0) {
          this.clearIconVisible = true
        }
      } else {
        if (this.allowClear &&
            !this.disabled &&
            this.selectedOption) {
          this.clearIconVisible = true
        }
      }
    },

    hideClearIcon () {
      this.clearIconVisible = false
    },

    clearValue () {
      if (this.mode === 'multiple') {
        this.$emit('input', [])
      } else {
        this.$emit('input', '')
      }
    },

    removeTag (index) {
      this.value.splice(index, 1)
      this.$emit('input', this.value)
      this.$emit('change')
    },

    handleOutsideclick () {
      this.menuVisible = false
    },

    handleInputClick () {
      if (this.disabled) {
        return false
      }
      if (this.searchable) {
        this.$refs.searachInput.focus()
      }
      this.menuVisible = !this.menuVisible
    },

    handleOptionClick (option) {
      if (this.mode === 'multiple') {
        let index = this.value.indexOf(option.label)
        if (index > -1) {
          this.value.splice(index, 1)
        } else {
          this.value.push(option.label)
        }
        if (this.searchable) {
          this.$refs.searachInput.focus()
        }
        this.$emit('input', this.value)
        this.$emit('change')
      } else {
        this.menuVisible = false
        if (!this.selected) {
          this.$emit('input', option.label)
          this.$emit('change')
        }
      }
    },

    handleSearchInputKeyUp (event) {
      this.broadcast('vOption', 'select.query.change', this.query)
      this.$refs.optionMenu.update()
    },

    handleSearchInputKeyDown (event) {
      this.searchInputWidth = this.query.length * 12 + 20
      if (this.query === '' &&
          event.code === 'Backspace' &&
          Array.isArray(this.value)) {
        this.value.pop()
      }
    },

    handleSearchInputFocus () {
      this.searachInputActive = true
      if (this.selectedOption &&
          !Array.isArray(this.selectedOption)) {
        this.searchInputPlaceholder = this.selectedOption.text
      }
      if (!this.selectedOption) {
        this.searchInputPlaceholder = this.placeholder
      }
    },

    handleSearchInputBlur () {
      this.searachInputActive = false
      this.searchInputWidth = 20
      this.searchInputPlaceholder = ''
      this.query = ''
    }
  },

  created () {
    this.$on('select.option.click', this.handleOptionClick)
  }
}
</script>
