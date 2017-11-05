## 选项组

::: demo

```html
<template>
  <div>
    <v-checkbox-group v-model="checkedOptions">
      <v-checkbox
        v-for="(option, index) in checkOptions"
        :label="option"
        :key="index">
      <span v-text="option"></span>
      </v-checkbox>
    </v-checkbox-group>
  </div>
</template>
<script>
let script = {
  data () {
    return {
      checkOptions: ['Apple', 'Pear', 'Orange'],
      checkedOptions: ['Apple']
    }
  }
}
export default script
</script>
```

:::
