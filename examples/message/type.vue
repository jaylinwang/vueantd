<script>
export default {
  methods: {
    show (type) {
      if (type === 'success') {
        this.$message.success('this is success message')
      }
      if (type === 'error') {
        this.$message.error('this is error message')
      }
      if (type === 'warning') {
        this.$message.warning('this is warning message')
      }
      if (type === 'info') {
        this.$message.info('this is info message')
      }
    }
  }
}
</script>

<template>
<div>
  <v-button @click="show('success')">success</v-button>
  <v-button @click="show('error')">error</v-button>
  <v-button @click="show('warning')">warning</v-button>
  <v-button @click="show('info')">info</v-button>
</div>
</template>
