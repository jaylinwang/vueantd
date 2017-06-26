<script>
export default {
  data () {
    return {
      v1: 2,
      v2: 3,
      v3: ''
    }
  },
  methods: {
    v1Change () {
      console.log(this.v1)
    }
  }
}
</script>
<template>
<div>
  <v-select
    v-model="v1"
    width="100%"
    @change="v1Change">
    <v-option :label="1" text="选项1"></v-option>
    <v-option :label="2" text="选项2"></v-option>
    <v-option :label="3" text="选项3" disabled></v-option>
    <v-option :label="4" text="选项4"></v-option>
  </v-select>
  <v-select
    v-model="v2"
    width="120px"
    disabled>
    <v-option :label="1" text="选项1"></v-option>
    <v-option :label="2" text="选项2"></v-option>
    <v-option :label="3" text="选项3"></v-option>
    <v-option :label="4" text="选项4"></v-option>
  </v-select>
  <v-select
    v-model="v3"
    width="120px"
    placeholder="请选择"
    allowClear>
    <v-option :label="1" text="选项1"></v-option>
    <v-option :label="2" text="选项2"></v-option>
    <v-option :label="3" text="选项3" disabled></v-option>
    <v-option :label="4" text="选项4"></v-option>
  </v-select>
</div>
</template>
