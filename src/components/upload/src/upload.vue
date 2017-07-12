<template>
<div class="v-upload">
  <div class="v-upload-select">
    <v-button
      @click="toggeUpload">
      <v-icon type="cloudup"></v-icon> 点击上传
    </v-button>
    <slot></slot>
    <input
      class="v-upload-select-origin"
      type="file"
      ref="upload"
      @change="handleFileChange">
  </div>
  <div
    class="v-upload-list"
    :class="['v-upload-list-' + listType]"
    v-if="showUploadList">
    <div
      class="v-upload-list-item"
      v-for="(transfer, index) in transferList"
      :key="index"
      :class="[transfer.status]"
      @click="handleItemPreview(transfer)">
      <div class="v-upload-list-item-title">
        <template v-if="listType === 'text'">
          <v-icon
            v-if="transfer.status === 'uploading'"
            type="loading" spin></v-icon>
          <v-icon
            v-else
            type="attachment"></v-icon>
        </template>
        <template v-else>
          <v-icon
            v-if="transfer.status === 'uploading' || !transfer.url"
            type="picture">
          </v-icon>
          <img
            v-else
            :src="transfer.url"
            :alt="transfer.name">
        </template>
        <span>{{transfer && transfer.name }}</span>
      </div>
      <div
        class="v-upload-list-item-progress"
        v-if="transfer.status === 'uploading'">
        <v-progress
          class="v-upload-progress"
          :percent="transfer && transfer.progress"
          :stroke-width="2"
          hide-info></v-progress>
      </div>
      <template v-else>
        <div
          class="v-upload-list-item-status"
          v-if="transfer.status === 'error'">
          <v-icon type="close-circle"></v-icon>
        </div>
        <div
          class="v-upload-list-item-status"
          v-if="transfer.status === 'success'">
          <v-icon type="check-circle"></v-icon>
        </div>
        <div
          class="v-upload-list-item-remove"
          @click="handleItemDelete(transfer)">
          <v-icon type="delete"></v-icon>
        </div>
      </template>
    </div>
  </div>
</div>
</template>

<script>
import FileUpload from './FileUpload'
import uuid from 'uuid'

export default {
  name: 'vUpload',

  data () {
    return {
      transferList: []
    }
  },

  props: {
    value: {},
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
      type: RegExp
    },
    maxSize: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showUploadList: {
      type: Boolean,
      default: true
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    beforeUpload: {
      type: Function
    },
    listType: {
      type: String,
      default: 'text'
    }
  },

  watch: {
    value (val) {
      this.transferList = val
    }
  },

  created () {
    const vm = this
    vm.value && vm.value.forEach((val) => {
      let id = uuid.v1()
      vm.transferList.push({
        id: val.id || id,
        url: val.url,
        name: val.name,
        progress: 100,
        status: 'success'
      })
    })
  },

  methods: {
    toggeUpload () {
      this.$refs.upload.click()
    },

    handleUploadLoad (e, file, xhr) {
      const vm = this
      let transfer = this.transferList.find((data) => {
        return data.raw === file
      })
      // 此处为了进度条可显示
      setTimeout(function () {
        transfer.progress = 100
        transfer.status = 'success'
        transfer.response = xhr.response
        console.log(vm.transferList)
        vm.$emit('input', vm.transferList)
        vm.$emit('success', transfer)
      }, 100)
    },
    handleUploadError (e, file, xhr) {
      const vm = this
      let transfer = this.transferList.find((data) => {
        return data.raw === file
      })
      // 此处为了进度条可显示
      setTimeout(function () {
        transfer.progress = 0
        transfer.status = 'error'
        transfer.response = xhr.response
        vm.$emit('input', vm.transferList)
        vm.$emit('error', transfer)
      }, 100)
    },

    handleUploadProgress (event, file) {
      let percent = (event.loaded / event.total).toFixed(4) * 100
      let transfer = this.transferList.find((data) => {
        return data.raw === file
      })
      transfer.progress = percent
      this.$emit('progress', transfer)
    },

    upload (action, file) {
      const vm = this
      this.$refs.upload.value = '' // 开始上传后清空file选择
      let transfer = this.transferList.find((data) => {
        return data.raw === file
      })
      if (vm.listType === 'picture' && /^image\//.test(file.type)) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          transfer.url = e.target.result
        }
      }
      let upload = new FileUpload(action, file, {
        name: vm.name,
        data: vm.data
      })
      transfer.status = 'uploading'
      vm.$emit('input', vm.transferList)
      upload.onLoad = vm.handleUploadLoad
      upload.onError = vm.handleUploadError
      upload.onProgress = vm.handleUploadProgress
    },

    handleFileChange (event) {
      const vm = this
      let target = event.target
      let files = target.files
      for (let i = 0, len = files.length; i < len; i++) {
        let file = files[i]
        if (vm.beforeUpload) {
          let beforeResult = vm.beforeUpload(file)
          if (!beforeResult) {
            return
          }
        }
        if (vm.acceptType && !vm.acceptType.test(file.type)) {
          vm.$emit('error', new Error(123, `filetype must match as ${vm.acceptType}`))
          break
        }
        if (file.size && file.size > vm.maxSize) {
          vm.$emit('error', new Error(123, `filetype must less than ${vm.maxSize}`))
          break
        }
        let id = uuid.v1()
        vm.transferList.push({
          id,
          name: file.name,
          size: file.size,
          status: 'beforeUpload',
          progress: 0,
          raw: file
        })
        vm.$emit('input', vm.transferList)
        vm.upload(vm.action, file)
      }
    },

    handleItemPreview (transfer) {
      if (transfer.status !== 'uploading') {
        this.$emit('preview', transfer)
      }
    },

    handleItemDelete (transfer) {
      let index = this.transferList.indexOf(transfer)
      this.transferList.splice(index, 1)
      this.$emit('input', this.transferList)
      this.$emit('delete', transfer, this.transferList)
    }
  }
}
</script>
