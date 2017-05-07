import '../style/notification/index.scss'
import NotificationBox from './src/notification-box.vue'
import Vue from 'vue'

Vue.component(NotificationBox.name, NotificationBox)

// const typeIconKV = {
//   info: 'info-circle-o',
//   error: 'close-circle-o',
//   success: 'check-circle-o',
//   warning: 'warning-circle'
// }

let defaultDuration = 3 // 默认显示事件，单位秒

const Notification = {
  open (options) {
    let $notificationRoot = null
    if (document.getElementById('NotificationRoot')) {
      $notificationRoot = document.getElementById('NotificationRoot')
    } else {
      $notificationRoot = document.createElement('div')
    }
    $notificationRoot.setAttribute('id', 'NotificationRoot')
    $notificationRoot.classList.add('v-notification-root')
    document.body.appendChild($notificationRoot)

    let $notificationBox = document.createElement('div')
    $notificationBox.classList.add('v-notification-box')
    $notificationRoot.appendChild($notificationBox)
    $notificationBox.innerHTML = `<v-notification-box
                                   message="${options.message}"
                                   description="${options.description}">
                                  </v-notification-box>`
    const notification = new Vue({
      mounted () {
        console.log('ok')
      }
    })
    notification.$mount($notificationBox)
    setTimeout(function () {
      $notificationRoot.removeChild(document.getElementsByClassName('v-notification-box')[0])
    }, defaultDuration * 1000)
  },
  success (options) {
    console.log('success')
  },
  error (options) {
    console.log('error')
  },
  warning (options) {
    console.log('warning')
  },
  info (options) {
    console.log('info')
  }
}

const install = (Vue) => {
  Vue.prototype.$notification = Notification
}

export {
  install,
  Notification
}
