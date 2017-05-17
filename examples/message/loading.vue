<script>
export default {
  methods: {
    success () {
      const self = this
      let loading = self.$message.loading('数据提交中...')
      setTimeout(function () {
        loading.close()
        self.$message.success('数据提交成功')
      }, 2000)
    }
  }
}
</script>
<template>
<div>
  <v-button @click="success">打开一个Loading提示</v-button>
</div>
</template>
