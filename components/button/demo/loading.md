### 加载中状态

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

::: demo
```html
<template>
<div>
  <p>
    <v-button type="primary" size="large" loading>Loading</v-button>
    <v-button size="normal" loading>Loading</v-button>
    <v-button type="danger" size="small" loading>Loading</v-button>
  </p>
  <p>
    <v-button
      :loading="loading"
      @click.native="toggleLoading">
      点击触发Loading状态
    </v-button>
  </p>
</div>
</template>

<script>
let script = {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    toggleLoading () {
      this.loading = !this.loading
    }
  }
}
export default script
</script>
```
:::
