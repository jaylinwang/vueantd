<template>
<div>
  <v-button
    type="primary"
    @click="modalVisible = true">
    打开
  </v-button>
  <v-modal
    v-model="modalVisible"
    title="这是模态框标题"
    @ok="handleModalOk"
    @cancel="handleModalCancel">
    <p>这是模态框内容</p>
  </v-modal>
</div>
</template>

<script>
export default {
  data () {
    return {
      modalVisible: false
    }
  },

  methods: {
    handleModalOk () {
      this.$message.info('点击模态框确定~')
    },
    handleModalCancel () {
      this.modalVisible = false
      this.$message.info('点击模态框取消~')
    }
  }
}
</script>
