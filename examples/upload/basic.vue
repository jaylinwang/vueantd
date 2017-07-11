<template>
  <div>
    <v-upload
      v-model="fileList"
      action="http://upload.qiniu.com/"
      :data="data"
      @preview="handlePreview"></v-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        token: 'AJbFeJvpHXUOrGXkSHbhcbreUIJQx1WU7FF8TXAA:yOG-crMLdne8juNbhFs8q2kLj-U=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTQ5OTczODY2M30=',
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
    }
  }
}
</script>

<style>


</style>
