### 单选组合

为 RadioGroup 配置 name 参数，组合内的 input 元素赋予相同的 name 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）

::: demo

```html
<template>
<div>
  <p>
  <v-radio-group
    v-model="v1"
    @change="v1Change">
    <v-radio
      v-for="(option, index) in checkOptions"
      :label="option"
      :key="index">
      <span v-text="option"></span>
    </v-radio>
  </v-radio-group>
  </p>
  <p>
  <v-radio-group
    v-model="v2"
    @change="v2Change">
    <v-radio
      v-for="(option, index) in checkOptions"
      :label="option"
      :key="index">
      <span v-text="option"></span>
    </v-radio>
  </v-radio-group>
  </p>
</div>
</template>

<script>
let script = {
  data () {
    return {
      checkOptions: ['A', 'B', 'C', 'D'],
      v1: 'A',
      v2: 'D'
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
