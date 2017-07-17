<template>
<table
  class="v-table-head">
  <thead>
    <tr>
      <th
        v-for="(col, index) in columns"
        :ref="col.id"
        :key="col.id"
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
    },
    columns (val) {
      this._refreshTableWidth()
    }
  },

  created () {
    this._refreshTableWidth()
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
    _refreshTableWidth () {
      const vm = this
      let columnWidths = {}
      vm.$nextTick(() => {
        vm.columns.forEach((col, index) => {
          let key = col.id
          columnWidths[key] = col.width || `${vm.$refs[key][0].clientWidth}px`
        })
        vm.$emit('width-computed', columnWidths)
      })
    },
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
