<template>
<div>
  <v-pagination
    :current="1"
    :total="50"
    @change="handelPageChange">
  </v-pagination>
</div>
</template>
<script>
export default {
  methods: {
    handelPageChange (current, pageSize) {
      console.log(current)
      console.log(pageSize)
    }
  }
}
</script>
