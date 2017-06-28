<template>
<table class="v-table-body">
  <tbody>
    <tr
      v-for="(rowData, index) in data"
      :key="index">
      <td
        v-for="col in columns"
        :key="col.dataIndex"
        :style="{
          width: col.width
        }">
        <table-cell
          :column="col"
          :row-data="rowData"></table-cell>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import TableCell from './_cell.vue'

export default {
  components: {
    TableCell
  },

  props: {
    columns: Array,
    data: Array
  }
}
</script>
