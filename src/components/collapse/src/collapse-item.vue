<template>
<div
  class="v-collapse-item"
  :class="{
    'open': isOpen
  }">
  <div
    class="v-collapse-item-header"
    @click="toggleCollapseChange">
    <slot name="header">
      <div class="v-collapse-item-header-default">
        <span class="flag">
          <v-icon type="right"></v-icon>
        </span>
        {{header}}
      </div>
    </slot>
  </div>
  <div
    class="v-collapse-item-body"
    :style="{
      height: isOpen ? contentHeight : 0
    }">
    <div
      class="v-collapse-item-body-content"
      :ref="'content_'+label">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
import Emitter from '../../../mixins/emitter'

export default {
  name: 'vCollapseItem',

  mixins: [Emitter],

  data () {
    return {
      contentHeight: 0
    }
  },

  props: {
    label: {
      type: [String, Number]
    },
    header: {
      type: String
    }
  },

  computed: {
    collapse () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vCollapse') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    },

    innerValue: {
      get () {
        return this.collapse && this.collapse.value
      },
      set (val) {
        this.dispatch('vCollapse', 'input', val)
      }
    },

    isOpen () {
      if (Array.isArray(this.innerValue)) {
        return this.innerValue.indexOf(this.label) !== -1
      } else {
        return this.label === this.innerValue
      }
    }
  },

  mounted () {
    let contentKey = `content_${this.label}`
    this.contentHeight = this.$refs[contentKey] && `${this.$refs[contentKey].clientHeight}px`
  },

  methods: {
    toggleCollapseChange () {
      if (Array.isArray(this.innerValue)) {
        let index = this.innerValue.indexOf(this.label)
        if (index === -1) {
          this.innerValue.push(this.label)
        } else {
          this.innerValue.splice(index, 1)
        }
      } else {
        if (this.innerValue === this.label) {
          this.innerValue = ''
        } else {
          this.innerValue = this.label
        }
      }
    }
  }
}
</script>
