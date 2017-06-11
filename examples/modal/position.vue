<template>
<div>
  <v-button
    type="primary"
    @click="modal01Visible = true">
    距顶部20
  </v-button>
  <v-button
    type="primary"
    @click="modal02Visible = true">
    垂直居中
  </v-button>
  <v-modal
    v-model="modal01Visible"
    title="这是模态框标题"
    :top="10"
    closeable>
    <p>距顶部20</p>
  </v-modal>
  <v-modal
    v-model="modal02Visible"
    title="这是模态框标题"
    vertical-center
    closeable>
    <p>垂直居中</p>
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
