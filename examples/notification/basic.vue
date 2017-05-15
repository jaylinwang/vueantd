<script>
export default {
  methods: {
    open () {
      this.$notification.open({
        message: 'Notification Title:',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
      })
    }
  }
}
</script>

<template>
<v-button type="primary"
          @click.native="open">
  open the notification box
</v-button>
</template>
