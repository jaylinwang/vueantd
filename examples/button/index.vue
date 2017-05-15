<script>
  import basic from './basic.vue'
  import size from './size.vue'
  import disabled from './disabled.vue'
  import shape from './shape.vue'
  import loading from './loading.vue'
  import group from './group.vue'
  export default {
    components: {
      basic,
      size,
      disabled,
      shape,
      loading,
      group
    }
  }
</script>

<template>
  <div>
    <h2>基本</h2>
    <basic></basic>
    <h2>尺寸</h2>
    <size></size>
    <h2>禁用状态</h2>
    <disabled></disabled>
    <h2>形状</h2>
    <shape></shape>
    <h2>点击加载</h2>
    <loading></loading>
    <h2>按钮组</h2>
    <group></group>
  </div>
</template>
