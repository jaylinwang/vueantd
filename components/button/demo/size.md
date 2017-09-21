### 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

::: demo

```html
<template>
<div>
  <v-radio-group
    v-model="size">
    <v-radio label="large">大</v-radio>
    <v-radio label="normal">中</v-radio>
    <v-radio label="small">小</v-radio>
  </v-checkbox-group>
  <p>
    <v-button
      type="primary"
      :size="size">Primary</v-button>
    <v-button
      :size="size">Default</v-button>
    <v-button
      type="dashed"
      :size="size">Dashed</v-button>
    <v-button
      type="danger"
      :size="size">Danger</v-button>
    <v-button
      icon="search"
      shape="circle"
      :size="size"></v-button>
  </p>
</div>
</template>
<script>
let script = {
  data () {
    return {
      size: 'normal'
    }
  }
}
export default script
</script>
<style scoped>
  .v-btn{
    transition: all .1s;
  }
</style>
```
:::
