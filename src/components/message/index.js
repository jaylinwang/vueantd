import '../style/message/index.scss'
import MessageBox from './src/message-box.vue'
import Vue from 'vue'

Vue.component(MessageBox.name, MessageBox)
const notice = function (type, message) {
  let $notificationRoot = null
  if (document.getElementById('MessageRoot')) {
    $notificationRoot = document.getElementById('MessageRoot')
  } else {
    $notificationRoot = document.createElement('div')
  }
  $notificationRoot.setAttribute('id', 'MessageRoot')
  $notificationRoot.classList.add('v-message-root')
  document.body.appendChild($notificationRoot)

  let identifier = `MessageRoot_${new Date().getTime()}`
  let $notificationBox = document.createElement('div')
  $notificationBox.setAttribute('name', identifier)
  $notificationBox.classList.add('v-message-box')
  $notificationRoot.appendChild($notificationBox)
  $notificationBox.innerHTML = `<v-message-box
                                  type="${type}"
                                  message="${message}">
                                </v-message-box>`
  const notification = new Vue()
  notification.$mount($notificationBox)
}

const Message = {
  success (message) {
    return notice('success', message)
  },
  error (message) {
    return notice('error', message)
  },
  warning (message) {
    return notice('warning', message)
  },
  info (message) {
    return notice('info', message)
  }
}

const install = (Vue) => {
  Vue.prototype.$message = Message
}

export {
  install,
  Message
}
