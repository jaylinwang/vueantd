<template>
<div>
  <v-pagination
    v-model="page"
    :total="total"
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
      },
      total: 0
    }
  },
  methods: {
    handelPageChange (current, pageSize) {
      console.log(current)
      console.log(pageSize)
    }
  },
  created () {
    const vm = this
    setTimeout(() => {
      vm.total = 50
    }, 1000)
  }
}
</script>
