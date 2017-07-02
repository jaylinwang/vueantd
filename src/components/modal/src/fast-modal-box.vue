<template>
<VModal
  v-model="modalVisible"
  :width="360">
  <div
    class="v-fast-modal-header"
    slot="header">
    <VIcon
      :type="typeIconKV[type]"
      :class="['icon__' + type]">
    </VIcon>
    {{title}}
  </div>
 <div class="v-fast-modal-body">
  {{ content }}
 </div>
 <div
  class="v-fast-modal-footer"
  slot="footer">
    <VButton
      v-if="type == 'confirm'"
      @click="handleCancel">
      {{ cancelText }}
    </VButton>
    <VButton
      type="primary"
      @click="handleOk">
      {{ okText }}
    </VButton>
 </div>
</VModal>
</template>


<script>
import VModal from './modal.vue'
import VButton from '../../button/src/button.vue'
import VIcon from '../../icon/src/icon.vue'

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

  components: {
    VModal,
    VIcon,
    VButton
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
