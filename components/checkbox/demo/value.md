### 选项值

::: demo

```html
<template>
<div>
  <v-checkbox
    v-model="v1"
    true-label="a"
    false-label="b"
    @change="v1Change">A/B(选中为A)</v-checkbox>
</div>
</template>
<script>
let script = {
  data () {
    return {
      v1: 'a'
    }
  },
  methods: {
    v1Change () {
      console.log(this.v1)
    }
  }
}
export default script
</script>
```

:::
