<template>
<div>
  <v-pagination
    v-model="page"
    :total="50"
    @change="handelPageChange">
  </v-pagination>
</div>
</template>
<script>
export default {
  data () {
    return {
      page: {
        current: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    handelPageChange (current, pageSize) {
      console.log(current)
      console.log(pageSize)
    }
  }
}
</script>
