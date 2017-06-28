<template>
<div>
<v-table
  :data-source="dataSource"
  :columns="columns">
</v-table>
</div>
</template>

<script>
export default {
  data () {
    const vm = this
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
      width: '100px',
      dataIndex: 'age'
    }, {
      title: '住址',
      width: '400px',
      dataIndex: 'address'
    }, {
      title: '操作',
      render (h, user) {
        return (
          <span>
            <v-button onClick={ vm.handleClick(user) }>提示</v-button>
          </span>
        )
      }
    }]
    return {
      dataSource: dataSource,
      columns: columns
    }
  },

  methods: {
    handleClick (user) {
      return function () {
        console.log(user)
      }
    }
  }
}
</script>
