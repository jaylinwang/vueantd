<template>
<div>
  <h2>basic</h2>
  <basic></basic>
  <h2>nowrap</h2>
  <nowrap></nowrap>
  <h2>match</h2>
  <match></match>
  <h2>overflow</h2>
  <overflow></overflow>
</div>
</template>
<script>
import basic from './basic.vue'
import nowrap from './nowrap.vue'
import match from './match.vue'
import overflow from './overflow.vue'

export default {
  components: {
    basic, nowrap, match, overflow
  }
}
</script>
