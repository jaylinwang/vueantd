<script>
export default {
  methods: {
    showMessage () {
      this.$message.info('This is info message !')
    }
  }
}
</script>

<template>
<div>
  <v-button @click.native="showMessage">
    打开默认的消息
  </v-button>
</div>
</template>
