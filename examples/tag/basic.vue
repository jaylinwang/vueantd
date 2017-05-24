<template>
<div>
<v-tag>标签一</v-tag>
<v-tag
  v-if="tag2Visible"
  closeable
  @close="hideTag2">标签二</v-tag>
</div>
</template>

<script>
export default {
  data () {
    return {
      tag2Visible: true
    }
  },

  methods: {
    hideTag2 () {
      this.tag2Visible = false
    }
  }
}
</script>
