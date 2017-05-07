<template>
<div class="v-notification-wrapper">
  <h2>{{message}}</h2>
  <p>{{description}}</p>
  <div class="v-notification-close">
    <v-icon type="close"></v-icon>
  </div>
</div>
</template>
<script>
export default {
  name: 'vNotificationBox',
  props: {
    message: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
