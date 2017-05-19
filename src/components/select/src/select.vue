<template>
<div class="v-select"
  :class="classList"
  :style="{
    width: width + 'px'
  }"
  v-outsideclick="hideMenu">
  <div
    class="v-select-input"
    tabindex="0"
    ref="popRef"
    @click="toggleMenu"
    @mouseenter="showClearIcon"
    @mouseleave="hideClearIcon">
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
      v-show="clearIconVisible"
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
    v-show="menuVisible">
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
      type: String
    },
    searchable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      menuVisible: false,
      clearIconVisible: false,
      options: [],
      searchText: ''
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
      if (this.menuVisible) {
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
    hideMenu () {
      this.menuVisible = false
    },

    toggleMenu () {
      if (this.disabled) {
        return false
      }
      this.menuVisible = !this.menuVisible
    },

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
    },

    handleOptionClick (option) {
      if (this.mode === 'multiple') {
        let index = this.value.indexOf(option.label)
        if (index > -1) {
          this.value.splice(index, 1)
          this.$emit('input', this.value)
        } else {
          this.value.push(option.label)
          this.$emit('input', this.value)
        }
        this.$emit('change')
      } else {
        this.menuVisible = false
        if (!this.selected) {
          this.$emit('input', option.label)
          this.$emit('change')
        }
      }
    }
  },

  created () {
    this.$on('select.option.click', this.handleOptionClick)
  }
}
</script>
