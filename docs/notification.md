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

:::demo 自动关闭延时::
```html
<template>
<v-button type="primary"
          @click.native="openDuration(0)">
  打开一直显示的通知框
</v-button>
<v-button type="primary"
          @click.native="openDuration(1)">
  打开持续1s的提示框
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
    // 打开基本样式
    openNormal () {
      this.$notification.open({
        message: 'Notification Title:',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
      })
    },
    // 配置延时
    openDuration (duration) {
      this.$notification.open({
        message: 'Notification Title:',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification',
        duration: duration
      })
    },
    // 打开不同场景样式
    open (type) {
      switch (type) {
        case 'success':
          this.$notification.success({
            message: 'Notification Title:',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
          })
          break;
        case 'error':
          this.$notification.error({
            message: 'Notification Title:',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
          })
          break;
        case 'info':
          this.$notification.info({
            message: 'Notification Title:',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
          })
          break;
        case 'warning':
          this.$notification.warning({
            message: 'Notification Title:',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification'
          })
          break;
      }
    }
  },
}
</script>

