<template>
  <div>
    <v-upload
      v-model="fileList"
      action="http://upload.qiniu.com/"
      :data="data"
      @preview="handlePreview"
      :before-upload="beforeUpload">
      请选择不大于3M的文件
    </v-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        token: 'AJbFeJvpHXUOrGXkSHbhcbreUIJQx1WU7FF8TXAA:0B0Afrx3551FYVGSdDL3sSHTWcA=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTQ5OTY4NTAwOX0=',
        key: new Date().getTime()
      },
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  methods: {
    handlePreview (file) {
      console.log(file)
    },
    beforeUpload (files) {
      console.log(files)
      return true
    }
  }
}
</script>

<style>


</style>
