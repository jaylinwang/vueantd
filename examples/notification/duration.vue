<script>
  export default {
    methods: {
      open (duration) {
        this.$notification.open({
          message: 'Notification Title:',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification',
          duration: duration
        })
      }
    }
  }
</script>

<template>
  <div>
    <v-button type="primary" @click.native="open(0)">
      打开一直显示的通知框
    </v-button>
    <v-button type="primary" @click.native="open(1)">
      打开持续1s的提示框
    </v-button>
  </div>
</template>
