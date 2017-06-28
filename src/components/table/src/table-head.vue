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
        {{ col.title }}
      </th>
    </tr>
  </thead>
</table>
</template>
<script>
export default {
  props: {
    columns: Array
  }
}
</script>
