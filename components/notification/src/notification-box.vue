<template>
<div class="v-notification-wrapper">
  <div class="v-notification-icon" v-if="showIcon">
    <v-icon :type="typeIconKV[type]"
            :class="['v-notification-icon__'+type]"></v-icon>
  </div>
  <div class="v-notification-body">
    <h2>{{message}}</h2>
    <p>{{description}}</p>
    <div class="v-notification-close" @click="closeNotification">
      <v-icon type="close"></v-icon>
    </div>
  </div>
</div>
</template>
<script>
import vIcon from '../../icon/src/icon.vue'

const typeIconKV = {
  info: 'info-circle-o',
  error: 'close-circle-o',
  success: 'check-circle-o',
  warning: 'warning-circle-o'
}
export default {
  name: 'vNotificationBox',
  componentName: 'vNotificationBox',

  components: {
    vIcon
  },

  data () {
    return {
      typeIconKV: typeIconKV
    }
  },
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    message: {
      type: String,
      required: true
    },
    description: {
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
