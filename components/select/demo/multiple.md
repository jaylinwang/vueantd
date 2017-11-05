### 多选

::: demo

```html
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
  <v-button @click="reset">
    重置
  </v-button>
</div>
</template>

<script>
let script = {
  data () {
    return {
      checkOptions: ['测试常服测试常服测试常服测试常服测试常服测试常服测试常服测试常服', 'b2', 'c3', 'd4', 'c5', 'd6', 'e7'],
      checkedOptions: []
    }
  },
  methods: {
    reset () {
      this.checkedOptions = []
    }
  }
}
export default script
</script>

```

:::
