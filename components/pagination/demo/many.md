### 基本使用

::: demo

```html
<template>
<div>
  <v-pagination
    v-model="pageInfo"
    :total="total"
    @change="handelPageChange">
  </v-pagination>
</div>
</template>
<script>
export default {
  data () {
    return {
      pageInfo: {
        current: 1,
        pageSize: 5
      },
      total: 500
    }
  },

  methods: {
    handelPageChange (current, pageSize) {
      console.log(current + ':' + pageSize)
    }
  },
}
</script>

```
:::
