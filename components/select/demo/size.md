### 三种大小

三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px

::: demo

```html
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
let script = {
  data () {
    return {
      v1: '',
      v2: '',
      v3: ''
    }
  }
}
export default script
</script>
```

:::
