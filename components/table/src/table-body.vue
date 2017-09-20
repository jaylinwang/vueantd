<template>
<table class="v-table-body">
  <tbody>
    <tr
      v-for="(rowData, index) in data"
      :key="index"
      @click="handleTrClick(rowData, index)">
      <td
        v-for="col in columns"
        :key="col.dataIndex"
        :style="{
          width: columnWidths[col.id]
        }">
        <table-cell
          :column="col"
          :row-data="rowData"
          :row-index="index"></table-cell>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import Emmiter from 'components/_mixins/emitter.js'
import TableCell from './_cell.vue'

export default {
  mixins: [Emmiter],

  components: {
    TableCell
  },

  props: {
    columns: Array,
    data: Array,
    columnWidths: Object
  },

  computed: {
    table () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vTable') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    }
  },

  methods: {
    handleTrClick (rowData, index) {
      this.dispatch('vTable', 'table.trClick', {
        rowData,
        index
      })
    }
  }
}
</script>
