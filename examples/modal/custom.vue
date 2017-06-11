<template>
<div>
  <v-button
    type="primary"
    @click="modal01Visible = true">
    自定义页头页脚
  </v-button>
  <v-button
    type="primary"
    @click="modal02Visible = true">
    不带标题
  </v-button>
  <v-modal
    v-model="modal01Visible"
    title="这是模态框标题"
    :width="360"
    closeable>
    <div
      slot="header"
      class="custom-header">
      <v-icon type="question-circle-o"></v-icon>
      自定义标题
    </div>
    <p class="custom-body">
      这是模态框内容 <br>
      自定义了模态框页眉页脚
    </p>
    <div
      slot="footer"
      class="custom-footer">
      <v-button type="danger">
        删除
      </v-button>
    </div>
  </v-modal>
  <v-modal
    v-model="modal02Visible"
    closeable>
    <p>这是模态框内容</p>
  </v-modal>
</div>
</template>

<style>
.custom-header{
  text-align: center;
  color: red;
}
.custom-body{
  text-align: center;
}
.custom-footer .v-btn-danger{
  width: 100%;
}
</style>


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
