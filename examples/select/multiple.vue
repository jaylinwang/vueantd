<template>
<div>
  <v-select
    width="320px"
    mode="multiple"
    v-model="checkedOptions"
    allowClear
    placeholder="请选择">
    <v-option
      v-for="(option, index) in checkOptions"
      :label="option"
      :text="option"
      :key="index">
    </v-option>
  </v-select>
</div>
</template>

<script>
export default {
  data () {
    return {
      checkOptions: ['a1', 'b2', 'c3', 'd4', 'c5', 'd6', 'e7'],
      checkedOptions: []
    }
  }
}
</script>
