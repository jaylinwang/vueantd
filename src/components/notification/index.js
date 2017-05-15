import '../style/notification/index.scss'
import NotificationBox from './src/notification-box.vue'
import Vue from 'vue'

Vue.component(NotificationBox.name, NotificationBox)
const notice = function (type, options) {
  let $notificationRoot = null
  if (document.getElementById('NotificationRoot')) {
    $notificationRoot = document.getElementById('NotificationRoot')
  } else {
    $notificationRoot = document.createElement('div')
  }
  $notificationRoot.setAttribute('id', 'NotificationRoot')
  $notificationRoot.classList.add('v-notification-root')
  document.body.appendChild($notificationRoot)

  let identifier = `NotificationRoot_${new Date().getTime()}`
  let $notificationBox = document.createElement('div')
  $notificationBox.setAttribute('name', identifier)
  $notificationBox.classList.add('v-notification-box')
  $notificationRoot.appendChild($notificationBox)
  $notificationBox.innerHTML = `<v-notification-box
                                  type="${type}"
                                  message="${options.message}"
                                  description="${options.description}"
                                  :duration="${options.duration}">
                                </v-notification-box>`
  const notification = new Vue()
  notification.$mount($notificationBox)
}

const Notification = {
  open (options) {
    return notice('normal', options)
  },
  success (options) {
    return notice('success', options)
  },
  error (options) {
    return notice('error', options)
  },
  warning (options) {
    return notice('warning', options)
  },
  info (options) {
    return notice('info', options)
  }
}

const install = (Vue) => {
  Vue.prototype.$notification = Notification
}

export {
  install,
  Notification
}
