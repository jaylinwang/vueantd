<template>
<div>
  <v-button @click="open('info')">info</v-button>
  <v-button @click="open('success')">success</v-button>
  <v-button @click="open('warn')">warn</v-button>
  <v-button @click="open('error')">error</v-button>
  <v-button @click="open('confirm')">confirm</v-button>
</div>
</template>

<script>
export default {
  methods: {
    open (type) {
      let vm = this
      switch (type) {
        case 'info':
          let info = this.$modal.info({
            title: '提示信息',
            content: '这是提示信息',
            ok: function () {
              info.close()
            }
          })
          break
        case 'success':
          let success = this.$modal.success({
            title: '提示信息',
            content: '这是提示信息',
            ok: function () {
              success.close()
            }
          })
          break
        case 'error':
          let error = this.$modal.error({
            title: '提示信息',
            content: '这是提示信息',
            ok: function () {
              error.close()
            }
          })
          break
        case 'warn':
          let warn = this.$modal.warn({
            title: '提示信息',
            content: '这是提示信息',
            ok: function () {
              warn.close()
            }
          })
          break
        case 'confirm':
          let confirm = this.$modal.confirm({
            title: '提示信息',
            content: '这是提示信息',
            // okText: '好的',
            // cancelText: '走',
            ok: function () {
              confirm.close()
              vm.$message.info('确认操作')
            },
            cancel: function () {
              confirm.close()
              vm.$message.info('取消操作')
            }
          })
          break
      }
    }
  }
}
</script>
