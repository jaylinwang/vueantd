<template>
<div class="v-message-wrapper">
  <div class="v-message-content">
    <span class="v-message-icon">
        <v-icon
          :type="typeIconKV[type]"
          :class="iconClassList"></v-icon>
    </span>
    <span class="v-message-body">
      {{content}}
    </span>
  </div>
</div>
</template>
<script>
const typeIconKV = {
  info: 'info-circle',
  error: 'close-circle',
  success: 'check-circle',
  warning: 'warning-circle',
  loading: 'loading'
}
export default {
  name: 'vMessageBox',
  data () {
    return {
      typeIconKV: typeIconKV
    }
  },
  props: {
    type: {
      type: String,
      default: 'info'
    },
    content: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3
    }
  },
  computed: {
    iconClassList () {
      let classList = []
      classList.push(`v-message-icon__${this.type}`)
      if (this.type === 'loading') {
        classList.push('spin')
      }
      return classList
    }
  },
  mounted () {
    const self = this
    if (self.duration !== 0) {
      const $currentBox = self.$el.parentElement
      setTimeout(function () {
        $currentBox.classList.add('hiding')
        setTimeout(function () {
          $currentBox.remove()
          self.$emit('close')
        }, 150)
      }, this.duration * 1000)
    }
  },
  methods: {
    closeNotification () {
      this.$nextTick(() => {
        this.$el.parentElement.remove()
      })
    }
  }
}
</script>
