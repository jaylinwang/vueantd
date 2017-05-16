<template>
<div class="v-message-wrapper">
  <v-icon :type="typeIconKV[type]"
          :class="['v-message-icon__'+type]"></v-icon>
  <span class="v-message-body">
    {{message}}
  </span>
</div>
</template>
<script>
const typeIconKV = {
  info: 'info-circle',
  error: 'close-circle',
  success: 'check-circle',
  warning: 'warning-circle'
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
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3
    }
  },
  computed: {
    showIcon () {
      if (this.type === 'normal') {
        return false
      }
      return true
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
