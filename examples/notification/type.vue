<script>
export default {
  methods: {
    open (type) {
      switch (type) {
        case 'success':
          this.$notification.success({
            message: 'Notification Title:',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
          })
          break
        case 'error':
          this.$notification.error({
            message: 'Notification Title:',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
          })
          break
        case 'info':
          this.$notification.info({
            message: 'Notification Title:',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
          })
          break
        case 'warning':
          this.$notification.warning({
            message: 'Notification Title:',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
          })
          break
      }
    }
  }
}
</script>

<template>
<div>
  <v-button @click.native="open('success')">
    success
  </v-button>
  <v-button @click.native="open('error')">
    error
  </v-button>
  <v-button @click.native="open('warning')">
    warning
  </v-button>
  <v-button @click.native="open('info')">
    info
  </v-button>
</div>
</template>
