<script>
export default {
  data () {
    return {
      v1: 2,
      v2: 3
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
    :width="120"
    @change="v1Change">
    <v-option :label="1">选项1</v-option>
    <v-option :label="2">选项2</v-option>
    <v-option :label="3" disabled>选项3</v-option>
    <v-option :label="4">选项4</v-option>
  </v-select>
  <v-select
    v-model="v2"
    :width="120"
    disabled>
    <v-option :label="1">选项1</v-option>
    <v-option :label="2">选项2</v-option>
    <v-option :label="3">选项3</v-option>
    <v-option :label="4">选项4</v-option>
  </v-select>
</div>
</template>
