<template>
<div class="v-table-cell">
  <div v-if="column.type === 'render'">
    <table-expand
    :render="column.render">
    </table-expand>
  </div>
  <div v-else>
    {{rowData[column.dataIndex]}}
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
    rowData: Object
  },

  created () {
    if (this.column.render) {
      this.column.type = 'render'
    } else {
      this.column.type = 'normal'
    }
  }
}
</script>
