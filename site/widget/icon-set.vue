<template>
<div class="icon-set">
  <div class="search">
    <input
      v-model="iconSearch"
      type="text"
      placeholder="输入英文关键词快速查找"
      @keyup="handleSearch">
  </div>
  <ul>
    <li
      v-for="(icon, index) in iconList"
      :key="index"
      @click="copyIconCode(icon)">
      <p>
        <v-icon :type="icon"></v-icon>
      </p>
      <p>
        {{ icon }}
      </p>
    </li>
  </ul>
</div>
</template>

<script>
  const icons = {
    direction: [
      'step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrow-salt',
      'down', 'up', 'left', 'right', 'caret-up', 'caret-down',
      'caret-left', 'caret-right', 'caret-circle-up', 'caret-circle-down', 'caret-circle-left',
      'caret-circle-right', 'caret-circle-o-up', 'caret-circle-o-down', 'caret-circle-o-left', 'caret-circle-o-right',
      'double-right', 'double-left', 'verticle-left', 'verticle-right', 'forward', 'backward',
      'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up',
      'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'play-circle-o', 'up-square',
      'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o',
      'left-square-o', 'right-square-o', 'login', 'logout', 'menu-fold', 'menu-unfold'
    ],
    suggestion: [
      'question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle',
      'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle',
      'plus-square', 'plus-square-o', 'minus-square', 'minus-square-o', 'info', 'info-circle-o',
      'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'cross', 'cross-circle',
      'cross-circle-o', 'cross-square', 'cross-square-o', 'check', 'check-circle', 'check-circle-o',
      'check-square', 'check-square-o', 'clock-circle-o', 'clock-circle'
    ],
    logo: [
      'android', 'android-o', 'apple', 'apple-o', 'windows', 'windows-o',
      'ie', 'chrome', 'github', 'aliwangwang', 'aliwangwang-o', 'dingding',
      'dingding-o'
    ],
    other: [
      'lock', 'unlock', 'area-chart', 'pie-chart', 'bar-chart', 'dot-chart',
      'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code',
      'code-o', 'copy', 'credit-card', 'delete', 'desktop', 'download',
      'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf',
      'file-excel', 'file-jpg', 'file-ppt', 'file-add', 'folder', 'folder-open',
      'folder-add', 'hdd', 'frown', 'frown-o', 'meh', 'meh-o',
      'smile', 'smile-o', 'inbox', 'laptop', 'appstore-o', 'appstore',
      'line-chart', 'link', 'mail', 'mobile', 'notification', 'paper-clip',
      'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt',
      'shopping-cart', 'tablet', 'tag', 'tag-o', 'tags', 'tags-o',
      'to-top', 'upload', 'user', 'video-camera', 'home', 'loading',
      'loading-3-quarters', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o',
      'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye',
      'eye-o', 'camera', 'camera-o', 'save', 'team', 'solution',
      'phone', 'filter', 'exception', 'export', 'customer-service', 'qrcode',
      'scan', 'like', 'like-o', 'dislike', 'dislike-o', 'message',
      'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o', 'bulb',
      'select', 'switcher', 'rocket', 'bell', 'disconnect', 'database',
      'compass', 'barcode', 'hourglass', 'key', 'flag', 'layout',
      'printer', 'sound', 'usb', 'skin', 'tool', 'sync',
      'wifi', 'car', 'schedule', 'user-add', 'user-delete', 'usergroup-add',
      'usergroup-delete', 'man', 'woman', 'shop', 'gift', 'idcard',
      'medicine-box', 'red-envelope', 'coffee', 'copyright', 'trademark', 'safety',
      'wallet', 'bank', 'trophy', 'contacts', 'global', 'shake',
      'api', 'fork']
  }

  export default {
    data () {
      return {
        iconList: [],
        iconSearch: ''
      }
    },
    props: {
      groupName: {
        type: String,
        default: 'direction'
      }
    },

    created () {
      this.iconList = icons[this.groupName]
    },

    methods: {
      handleSearch () {
        let iconList = icons[this.groupName]
        let iconSearch = this.iconSearch
        if (iconSearch) {
          this.iconList = iconList.filter((d) => {
            return d.search(iconSearch) !== -1
          })
        } else {
          this.iconList = iconList
        }
      },
      copyIconCode (icon) {
        const vm = this
        let listener = function (e) {
          e.clipboardData.setData('text/plain', `<v-icon type="${icon}"></v-icon>`)
          vm.$message.success('复制到粘贴板')
          e.preventDefault()
        }
        document.addEventListener('copy', listener, {
          once: true
        })
        document.execCommand('copy')
      }
    }
  }
</script>
