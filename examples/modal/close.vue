<template>
<div>
  <v-button
    type="primary"
    @click="modal01Visible = true">
    打开关闭按钮
  </v-button>
  <v-button
    type="primary"
    @click="modal02Visible = true">
    模态层可点击
  </v-button>
  <v-modal
    v-model="modal01Visible"
    title="这是模态框标题"
    closeable>
    <p>这是模态框内容</p>
  </v-modal>
  <v-modal
    v-model="modal02Visible"
    title="这是模态框标题"
    maskCloseable>
    <p>这是模态框内容</p>
  </v-modal>
</div>
</template>

<script>
export default {
  data () {
    return {
      modal01Visible: false,
      modal02Visible: false
    }
  }
}
</script>
