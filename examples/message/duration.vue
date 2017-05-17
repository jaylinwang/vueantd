<script>
export default {
  methods: {
    showMessage (duration) {
      this.$message.info(`This message will hide after ${duration} s`, duration)
    }
  }
}
</script>

<template>
<div>
<v-button @click="showMessage(10)">打开一个等待10s的消息提示</v-button>
</div>
</template>
