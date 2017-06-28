<template>
<table
  class="v-table-head">
  <thead>
    <tr>
      <th
        v-for="col in columns"
        :key="col.key || col.dataIndex"
        :style="{
          width: col.width
        }">
        <template v-if="col.type === 'selection'">
          <v-checkbox
            v-model="isSelectedAll"
            @change="handleSelectAllChange"
            interminate>
          </v-checkbox>
        </template>
        <template v-else>
         {{ col.title }}
        </template>
      </th>
    </tr>
  </thead>
</table>
</template>
<script>
import Emmiter from '../../../mixins/emitter.js'

export default {
  mixins: [Emmiter],

  props: {
    columns: Array,
    data: Array
  },

  data () {
    return {
      isSelectedAll: false
    }
  },

  watch: {
    selectedRowIndexList (val) {
      this.isSelectedAll = val.length === this.table.dataSource.length
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
    },

    selectedRowIndexList () {
      if (this.table) {
        return this.table.selectedRowIndex
      }
      return []
    }
  },

  methods: {
    handleSelectAllChange (val) {
      if (val) {
        this.dispatch('vTable', 'table.selectAll')
      } else {
        this.dispatch('vTable', 'table.deselectAll')
      }
    }
  }
}
</script>
