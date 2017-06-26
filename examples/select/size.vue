<template>
<div>
  <v-select
    v-model="v1"
    width="200px"
    placeholder="请选择"
    allowClear
    size="large">
    <v-option :label="1" text="选项1"></v-option>
    <v-option :label="2" text="选项2"></v-option>
    <v-option :label="3" text="选项3"></v-option>
    <v-option :label="4" text="选项4"></v-option>
  </v-select>
  <v-select
    v-model="v2"
    width="200px"
    placeholder="请选择"
    allowClear>
    <v-option :label="1" text="选项1"></v-option>
    <v-option :label="2" text="选项2"></v-option>
    <v-option :label="3" text="选项3"></v-option>
    <v-option :label="4" text="选项4"></v-option>
  </v-select>
  <v-select
     v-model="v3"
    width="200px"
    placeholder="请选择"
    allowClear
    size="small">
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
      v1: '',
      v2: '',
      v3: ''
    }
  }
}
</script>
