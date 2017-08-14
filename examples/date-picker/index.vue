<template>
<div>
<h2>basic</h2>
<basic></basic>
<h2>Disabled</h2>
<Disabled></Disabled>
<h2>DateDisabled</h2>
<DateDisabled></DateDisabled>
<h2>MonthPicker</h2>
<MonthPicker></MonthPicker>
</div>
</template>

<script>
import MonthPicker from './month.vue'
import basic from './basic.vue'
import Disabled from './disabled.vue'
import DateDisabled from './date-disabled.vue'

export default {
  components: {
    basic, Disabled, DateDisabled, MonthPicker
  }
}
</script>
