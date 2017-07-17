<template>
<div>
<v-table
  v-if="columns.length > 0"
  :data-source="dataSource"
  :columns="columns">
</v-table>
<v-button
  @click="newTable">
  新增表格
</v-button>
<v-button
  @click="changeTable">
  改变表格
</v-button>
<v-button
  @click="resetTable">
  重置表格
</v-button>
<v-button @click="seeData">
  查看当前数据
</v-button>
</div>
</template>

<script>
export default {
  data () {
    return {
      dataSource: [],
      columns: []
    }
  },

  methods: {
    newTable () {
      const dataSource = [{
        size: 'small',
        color: 'red',
        price: 1
      }, {
        size: 'small',
        color: 'red',
        price: 2
      }]
      const columns = [{
        title: 'size',
        width: '100px',
        dataIndex: 'size'
      }, {
        title: 'color',
        dataIndex: 'color'
      }, {
        title: 'price',
        render (h, sku) {
          return (
            <span>
              <v-input
                value={sku.price}
                onInput={(val) => {
                  sku.price = val
                }}></v-input>
            </span>
          )
        }
      }, {
        title: '操作',
        render (h, sku) {
          return (
            <span>
              <v-button>
                <v-icon type="close"></v-icon>
              </v-button>
            </span>
          )
        }
      }]
      this.columns = columns
      this.dataSource = dataSource
    },
    changeTable () {
      const dataSource = [{
        size: 'small',
        color: 'red',
        weight: 10,
        price: 1
      }, {
        size: 'small',
        color: 'red',
        weight: 20,
        price: 2
      }]
      const columns = [{
        title: 'size',
        width: '100px',
        dataIndex: 'size'
      }, {
        title: 'color',
        dataIndex: 'color'
      }, {
        title: 'weight',
        render (h, sku) {
          return (
            <span>
              <v-input
                value={sku.weight}
                onInput={(val) => {
                  sku.weight = val
                }}></v-input>
            </span>
          )
        }
      }, {
        title: 'price',
        render (h, sku) {
          return (
            <span>
              <v-input
                value={sku.price}
                onInput={(val) => {
                  sku.price = val
                }}></v-input>
            </span>
          )
        }
      }, {
        title: '操作',
        render (h, sku) {
          return (
            <span>
              <v-button>
                <v-icon type="close"></v-icon>
              </v-button>
            </span>
          )
        }
      }]
      this.columns = columns
      this.dataSource = dataSource
    },
    resetTable () {
      this.columns = []
      this.dataSource = []
    },
    seeData () {
      console.log(this.dataSource)
    }
  }
}
</script>
