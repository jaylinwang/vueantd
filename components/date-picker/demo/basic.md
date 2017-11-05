### 基本使用

:::demo

```html
<template>
<div style="width:220px;">
<v-date-picker
  v-model="date"
  placeholder="选择日期">
</v-date-picker>
</div>
</template>
<script>
let script = {
  data () {
    return {
      date: null
    }
  }
}
export default script
</script>
```

:::
