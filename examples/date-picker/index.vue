<template>
<div>
<h2>basic</h2>
<basic></basic>
<h2>Disabled</h2>
<Disabled></Disabled>
<h2>DateDisabled</h2>
<DateDisabled></DateDisabled>
</div>
</template>

<script>
import basic from './basic.vue'
import Disabled from './disabled.vue'
import DateDisabled from './date-disabled.vue'

export default {
  components: {
    basic, Disabled, DateDisabled
  }
}
</script>
