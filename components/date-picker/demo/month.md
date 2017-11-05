### 月份选择

:::demo

```html
<template>
<div style="width:220px;">
<v-month-picker
  v-model="month"
  placeholder="选择日期">
</v-month-picker>
</div>
</template>
<script>
import moment from 'moment'
let script = {
  data () {
    return {
      month: moment()
    }
  }
}
export default script
</script>
```

:::
