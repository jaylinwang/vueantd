import Vue from 'vue'
import Modal from './src/modal.vue'
import FastModalBox from './src/fast-modal-box.vue'

Vue.component(FastModalBox.name, FastModalBox)

const modal = function (type, options) {
  console.log(options)
  let $modalRoot = document.createElement('div')
  $modalRoot.setAttribute('id', 'ModalRoot')
  $modalRoot.innerHTML = `
    <v-fast-modal-box
      type="${type}"
      title="${options.title}"
      content="${options.content}"
      ok-text="${options.okText}"
      cancel-text="${options.cancelText}"
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
