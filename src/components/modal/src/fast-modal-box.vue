<template>
<v-modal
  v-model="modalVisible"
  :width="360">
  <div
    class="v-fast-modal-header"
    slot="header">
    <v-icon
      :type="typeIconKV[type]"
      :class="['icon__' + type]">
    </v-icon>
    {{title}}
  </div>
 <div class="v-fast-modal-body">
  {{ content }}
 </div>
 <div
  class="v-fast-modal-footer"
  slot="footer">
    <v-button
      v-if="type == 'confirm'"
      @click="handleCancel">
      {{ cancelText }}
    </v-button>
    <v-button
      type="primary"
      @click="handleOk">
      {{ okText }}
    </v-button>
 </div>
</v-modal>
</template>


<script>
const typeIconKV = {
  info: 'info-circle-o',
  error: 'close-circle-o',
  success: 'check-circle-o',
  warn: 'warning-circle-o',
  confirm: 'question-circle-o'
}
export default {
  name: 'vFastModalBox',

  data () {
    return {
      typeIconKV,
      modalVisible: true
    }
  },

  props: {
    type: {
      type: String
    },
    title: {
      type: String
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    content: {
      type: String
    }
  },

  methods: {
    handleOk () {
      this.$emit('ok')
    },
    handleCancel () {
      this.$emit('cancel')
    }
  }
}
</script>
