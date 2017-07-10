<template>
<div class="v-upload">
  <div class="v-upload-select">
    <v-button
      @click="toggeUpload">
      <v-icon type="cloudup"></v-icon> 点击上传
    </v-button>
    <input
      class="v-upload-select-origin"
      type="file"
      ref="upload"
      @change="handleFileChange">
  </div>
  <div class="v-upload-list">
    <div class="v-upload-list-item">
      <v-icon type="link"></v-icon> 测试测试文件.png
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'vUpload',

  data () {
    return {
      // current
    }
  },

  props: {
    name: {
      type: String,
      default: 'file'
    },
    action: {
      type: String,
      required: true
    },
    data: {
      type: Object
    },
    headers: {
      type: Object
    },
    acceptType: {
      type: String
    },
    acceptSize: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    toggeUpload () {
      this.$refs.upload.click()
    },
    upload (action, file) {
      let token = 'AJbFeJvpHXUOrGXkSHbhcbreUIJQx1WU7FF8TXAA:KeBk31O2-t43xq77DoIlsiFcmWI=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTQ5OTY2MjUyOX0='
      let formData = new FormData()
      formData.append(this.name, file)
      formData.append('token', token)
      formData.append('key', new Date().getTime())
      let xhr = new XMLHttpRequest()
      xhr.upload.addEventListener('load', this.handleUploadLoad, false)
      xhr.upload.addEventListener('progress', this.handleUploadProgress, false)
      xhr.open('POST', action)
      xhr.send(formData)
    },
    handleUploadLoad () {

    },
    handleUploadProgress () {

    },
    handleFileChange (event) {
      const vm = this
      let target = event.target
      let files = target.files
      for (let i = 0, len = files.length; i < len; i++) {
        vm.upload(vm.action, files[i])
      }
    }
  }
}
</script>
