import MessageBox from './src/message-box.vue'
import Vue from 'vue'

Vue.component(MessageBox.name, MessageBox)

const notice = function (type, content, duration) {
  let $messageRoot = null
  if (document.getElementById('MessageRoot')) {
    $messageRoot = document.getElementById('MessageRoot')
  } else {
    $messageRoot = document.createElement('div')
  }
  $messageRoot.setAttribute('id', 'MessageRoot')
  $messageRoot.classList.add('v-message-root')
  document.body.appendChild($messageRoot)

  let identifier = `MessageRoot_${new Date().getTime()}`
  let $messageBox = document.createElement('div')
  $messageBox.setAttribute('name', identifier)
  $messageBox.classList.add('v-message-box')
  $messageRoot.appendChild($messageBox)
  $messageBox.innerHTML = `<v-message-box
                                  type="${type}"
                                  content="${content}"
                                  :duration="${duration}">
                                </v-message-box>`
  const message = new Vue()
  message.$mount($messageBox)
  message.close = function () {
    message.$el.remove()
  }
  return message
}

const Message = {
  success (content, duration) {
    return notice('success', content, duration)
  },
  error (content, duration) {
    return notice('error', content, duration)
  },
  warning (content, duration) {
    return notice('warning', content, duration)
  },
  info (content, duration) {
    return notice('info', content, duration)
  },
  loading (content) {
    return notice('loading', content, 0)
  }
}

const install = (Vue) => {
  Vue.prototype.$message = Message
}

export {
  install,
  Message
}
