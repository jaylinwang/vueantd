### 基本使用

::: demo
```html
<template>
<div>
  <p>
    <v-select
      v-model="form.v1"
      width="100%"
      @change="v1Change">
      <v-option :label="1" text="选项1"></v-option>
      <v-option :label="2" text="选项2"></v-option>
      <v-option :label="3" text="选项3" disabled></v-option>
      <v-option :label="4" text="选项4"></v-option>
    </v-select>
    <v-button
      @click="resetV1">
      重置v1
    </v-button>
  </p>
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
    <v-option :label="4" text="选项4"></v-option>
    <v-option :label="4" text="选项4"></v-option>
    <v-option :label="4" text="选项4"></v-option>
    <v-option :label="4" text="选项4"></v-option>
    <v-option :label="4" text="选项4"></v-option>
    <v-option :label="4" text="选项4"></v-option>
    <v-option :label="4" text="选项4"></v-option>
    <v-option :label="4" text="选项4"></v-option>
  </v-select>
</div>
</template>

<script>
let script = {
  data () {
    return {
      form: {
        v1: 2
      },
      v2: 3,
      v3: ''
    }
  },
  methods: {
    v1Change () {
      console.log(this.v1)
    },
    resetV1 () {
      this.form = {
        v1: null
      }
    }
  }
}
export default script
</script>
```
:::
