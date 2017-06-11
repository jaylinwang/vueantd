<template>
<div
  class="v-modal"
  :class="{
    'vertical-center': verticalCenter
  }"
  v-show="value">
  <div class="v-modal__mask"
    @click="handleMaskClick">
  </div>
  <div
    class="v-modal__container"
    :style="{
      top: top + 'px'
    }">
    <div
      class="v-modal-box"
      :style="{
        width: width + 'px'
      }">
      <div
        class="close"
        v-if="closeable"
        @click="handleCloseClick">
        <v-icon
          class="icon"
          type="close">
        </v-icon>
      </div>
      <div
        class="v-modal-head"
        v-if="headVisible">
        <slot name="header">
          <div class="v-modal-head__default">
              <h3>{{title}}</h3>
          </div>
        </slot>
      </div>
      <div class="v-modal-body">
        <slot></slot>
      </div>
      <div class="v-modal-footer">
        <slot name="footer">
          <div class="v-modal-footer__default">
            <v-button
              @click.native="handleCancelClick">
              {{cancelText}}
            </v-button>
            <v-button
              type="primary"
              @click.native="handleOkClick">
              {{okText}}
            </v-button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'vModal',

  props: {
    value: {},
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
    closeable: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    verticalCenter: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 460
    }
  },

  computed: {
    headVisible () {
      return this.title || this.$slots.header
    }
  },

  methods: {
    handleCancelClick () {
      this.$emit('cancel')
    },

    handleOkClick () {
      this.$emit('ok')
    },

    handleCloseClick () {
      this.$emit('input', false)
    },

    handleMaskClick () {
      this.$emit('input', false)
    }
  }
}
</script>
