<template>
<div class="v-table-cell">
  <div v-if="column.type === 'render'">
    <table-expand
    :render="column.render"
    :row-data="rowData">
    </table-expand>
  </div>
  <div v-else-if="column.type === 'selection'">
    <v-checkbox :label="rowIndex"></v-checkbox>
  </div>
  <div v-else>
    {{ rowData[column.dataIndex] }}
  </div>
</div>
</template>

<script>
import TableExpand from './_expand.js'

export default {
  components: {
    TableExpand
  },
  props: {
    column: Object,
    rowData: Object,
    rowIndex: {}
  },

  created () {
    if (this.column.type) {
      this.column.type = this.column.type
    } else if (this.column.render) {
      this.column.type = 'render'
    } else {
      this.column.type = 'normal'
    }
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
  }
}
</script>
