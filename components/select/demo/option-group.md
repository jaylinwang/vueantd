### 选项组

::: demo

```html
<template>
<div>
  <v-select
    v-model="v1"
    width="220px"
    @change="v1Change">
    <v-option-group text="分组1">
      <v-option :label="1" text="选项1"></v-option>
      <v-option :label="2" text="选项2"></v-option>
      <v-option :label="3" text="选项3" disabled></v-option>
      <v-option :label="4" text="选项4"></v-option>
    </v-option-group>
    <v-option-group text="分组2">
      <v-option :label="5" text="选项5"></v-option>
      <v-option :label="6" text="选6"></v-option>
    </v-option-group>
  </v-select>
  <v-select
    v-model="v2"
    width="220px"
    @change="v2Change"
    mode="multiple">
    <v-option-group text="分组1">
      <v-option :label="1" text="选项1"></v-option>
      <v-option :label="2" text="选项2"></v-option>
      <v-option :label="3" text="选项3" disabled></v-option>
      <v-option :label="4" text="选项4"></v-option>
    </v-option-group>
    <v-option-group text="分组2">
      <v-option :label="5" text="选项5"></v-option>
      <v-option :label="6" text="选6"></v-option>
    </v-option-group>
  </v-select>
</div>
</template>
<script>
let script = {
  data () {
    return {
      v1: 2,
      v2: []
    }
  },
  methods: {
    v1Change () {
      console.log(this.v1)
    },
    v2Change () {
      console.log(this.v2)
    }
  }
}
export default script
</script>
```

:::
