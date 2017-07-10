<template>
  <div>
    <v-upload
      action="http://upload.qiniu.com/"
      :data="data"
      :accept-type="acceptType"
      :max-size="maxSize"
      @error="handleError"></v-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        token: 'AJbFeJvpHXUOrGXkSHbhcbreUIJQx1WU7FF8TXAA:9wlhxbh7XjIgF3C6gUyT-DyjfVY=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTQ5OTY3NzA0M30=',
        key: new Date().getTime()
      },
      acceptType: /^image\//,
      maxSize: 1024
    }
  },
  methods: {
    handleError (error) {
      console.log(error)
    }
  }
}
</script>

<style>


</style>
