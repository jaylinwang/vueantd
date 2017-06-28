<template>
<div class="v-table">
  <div class="v-table-head-wrapper">
    <table-head
      :columns="columns"
      :data="dataSource"></table-head>
  </div>
  <div class="v-table-body-wrapper">
    <v-checkbox-group
      v-model="selectedRowIndex"
      @change="selectedChange">
      <table-body
        :columns="columns"
        :data="dataSource">
      </table-body>
    </v-checkbox-group>
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

  data () {
    return {
      selectedRowIndex: []
    }
  },

  props: {
    dataSource: Array,
    columns: Array
  },

  computed: {
    dataIndexList () {
      let allIndex = []
      this.dataSource.forEach((data, index) => {
        allIndex.push(index)
      })
      return allIndex
    }
  },

  methods: {
    selectedChange (selectedIndexList) {
      let selectedRows = this.dataSource.filter((data, index) => {
        return selectedIndexList.indexOf(index) !== -1
      })
      this.$emit('selectedChange', selectedIndexList, selectedRows)
    },
    // 全选
    selectAll () {
      this.selectedRowIndex = this.dataIndexList
    },
    // 取消全选
    deselectAll () {
      this.selectedRowIndex = []
    }
  },

  created () {
    this.$on('table.selectAll', this.selectAll)
    this.$on('table.deselectAll', this.deselectAll)
  }

}
</script>
