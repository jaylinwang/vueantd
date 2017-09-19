import Vue from 'vue'
import Modal from './src/modal.vue'
import FastModalBox from './src/fast-modal-box.vue'

Vue.component(FastModalBox.name, FastModalBox)

const modal = function (type, options) {
  let $modalRoot = document.createElement('div')
  $modalRoot.setAttribute('id', 'ModalRoot')

  let _options = Object.assign({
    title: '确认操作',
    content: '确认当前操作?',
    okText: '确认',
    cancelText: '取消'
  }, options)

  $modalRoot.innerHTML = `
    <v-fast-modal-box
      type="${type}"
      title="${_options.title}"
      content="${_options.content}"
      ok-text="${_options.okText}"
      cancel-text="${_options.cancelText}"
      @ok="handelOk"
      @cancel="handleCancel">
    </v-fast-modal-box>
  `
  document.body.appendChild($modalRoot)

  const fastModal = new Vue({
    methods: {
      handelOk () {
        options.ok && options.ok()
      },
      handleCancel () {
        options.cancel && options.cancel()
      }
    }
  })
  fastModal.$mount('#ModalRoot')
  fastModal.close = function () {
    fastModal.$el.remove()
  }
  return fastModal
}

const FastModal = {
  info (options) {
    return modal('info', options)
  },
  success (options) {
    return modal('success', options)
  },
  warn (options) {
    return modal('warn', options)
  },
  error (options) {
    return modal('error', options)
  },
  confirm (options) {
    return modal('confirm', options)
  }
}

const install = (Vue) => {
  Vue.prototype.$modal = FastModal
}

export {
  install,
  Modal,
  FastModal
}
