<template>
  <div style="width:360px;">
    <v-upload
      v-model="fileList"
      action="http://upload.qiniu.com/"
      :data="data"
      list-type="picture-card"
      :before-upload="beforeUpload"
      @preview="handlePreview">
    </v-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        token: 'AJbFeJvpHXUOrGXkSHbhcbreUIJQx1WU7FF8TXAA:7qO8zH3oHnC-eFOhDYhACLe2dLg=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTQ5OTg1NjUxOX0=',
        key: new Date().getTime()
      },
      fileList: [{
        name: 'avatar.jpeg',
        url: 'http://o6lx9eywk.bkt.clouddn.com/avatar.jpg'
      }, {
        name: 'xiaoxiang.jpeg',
        url: 'http://o6lx9eywk.bkt.clouddn.com/xiaoxiang.jpg'
      }]
    }
  },
  watch: {
    fileList (val) {
      console.log(val)
    }
  },

  methods: {
    beforeUpload () {
      this.data.key = new Date().getTime()
      return true
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>
