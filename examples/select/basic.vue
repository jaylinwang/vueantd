<script>
export default {
  data () {
    return {
      v1: 2
    }
  }
}
</script>
<template>
<v-row>
  <v-col :span="6">
    <v-select v-model="v1">
      <v-option :label="1">选项1</v-option>
      <v-option :label="2">选项2</v-option>
      <v-option :label="3" disabled>选项3</v-option>
      <v-option :label="4">选项4</v-option>
    </v-select>
  </v-col>
</v-row>
</template>
