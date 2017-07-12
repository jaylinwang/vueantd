<template>
  <div style="width:360px;">
    <v-upload
      v-model="fileList"
      action="http://upload.qiniu.com/"
      :data="data"
      :show-upload-list="false">
    </v-upload>
    <div class="file-list">
      <div
        class="file-item-list"
        v-for="file in fileList"
        :key="file.id">
        <img
          :src="file.url"
          alt="">
        {{file.name}}
      </div>
    </div>
  </div>
</template>

<style>
.file-list{
  padding-top: 8px;
  padding-bottom: 8px;
}
.file-item-list{
  border: 1px solid #ddd;
  height: 60px;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  color: #666;
}
.file-item-list img{
  height: 60px;
  width: 60px;
}
</style>

<script>
export default {
  data () {
    return {
      data: {
        token: 'AJbFeJvpHXUOrGXkSHbhcbreUIJQx1WU7FF8TXAA:i-OM-BuSmVrGrDsQrXHfckqJ7fk=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTQ5OTc1OTg2OH0=',
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
  }
}
</script>
