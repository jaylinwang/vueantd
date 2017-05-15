<template>
<div>
  <h2>基本布局</h2>
  <basic></basic>
  <h2>间隔</h2>
  <gutter></gutter>
  <h2>偏移</h2>
  <offset></offset>
  <h2>绝对定位</h2>
  <fixed></fixed>
</div>
</template>

<script>
import Basic from './basic.vue'
import Gutter from './gutter.vue'
import Offset from './offset.vue'
import Fixed from './fixed.vue'

export default {
  components: {
    Basic,
    Gutter,
    Offset,
    Fixed
  }
}
</script>
