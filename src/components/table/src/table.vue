<template>
<div class="v-table">
  <div class="v-table-head-wrapper">
    <table-head
      :columns="columns"></table-head>
  </div>
  <div class="v-table-body-wrapper">
    <table-body
      :columns="columns"
      :data="dataSource">
    </table-body>
  </div>
</div>
</template>

<script>
import TableHead from './table-head.vue'
import TableBody from './table-body.vue'

export default {
  name: 'vTable',

  components: {
    TableHead, TableBody
  },

  props: {
    dataSource: Array,
    columns: Array
  }
}
</script>
