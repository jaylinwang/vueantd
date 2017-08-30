<template>
<div>
<v-table
  :data-source="dataSource"
  :columns="columns"
  @rowClicked="handleRowCliecked">
</v-table>
</div>
</template>

<script>
const dataSource = [{
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}]

const columns = [{
  title: '姓名',
  width: '100px',
  dataIndex: 'name'
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}]

export default {
  data () {
    return {
      dataSource: dataSource,
      columns: columns
    }
  },
  methods: {
    handleRowCliecked (rowData, index) {
      console.log(rowData)
      console.log(index)
    }
  }
}
</script>
