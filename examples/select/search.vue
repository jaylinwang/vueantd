<template>
<div>
  <v-select
    width="320px"
    mode="multiple"
    v-model="checkedOptions"
    allowClear
    placeholder="请选择"
    searchable>
    <v-option
      v-for="(option, index) in checkOptions"
      :label="option"
      :text="option"
      :key="index">
    </v-option>
  </v-select>
  <v-select
    v-model="v1"
    width="200px"
    placeholder="请选择"
    allowClear
    searchable>
    <v-option :label="1" text="选项1"></v-option>
    <v-option :label="2" text="选项2"></v-option>
    <v-option :label="3" text="选项3"></v-option>
    <v-option :label="4" text="选项4"></v-option>
  </v-select>
</div>
</template>

<script>
export default {
  data () {
    return {
      checkOptions: ['a1', 'b2', 'c3', 'd4', 'c5', 'd6', 'e7'],
      checkedOptions: [],
      v1: ''
    }
  }
}
</script>
