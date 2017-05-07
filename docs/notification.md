# Notification 通知提示框

:::demo 基本使用::
```html
<template>
<v-button type="primary"
          @click.native="openNormal">
  open the notification box
</v-button>
</template>
```
:::

:::demo 带有图标通知提醒::
```html
<template>
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
</template>
```
:::

<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    openNormal () {
      this.count += 1
      this.$notification.open({
        message: 'Notification Title:' + this.count,
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
      })
    },
    open (type) {
      switch (type) {
        case 'success':
          this.$notification.success()
          break;
        case 'error':
          this.$notification.error()
          break;
        case 'info':
          this.$notification.info()
          break;
        case 'warning':
          this.$notification.warning()
          break;
      }
    }
  },
}
</script>

