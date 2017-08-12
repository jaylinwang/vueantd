<template>
<div style="width:220px;">
<p>
  <v-date-picker
    placeholder="选择日期"
    :disabled-date="disabledStartDate">
  </v-date-picker>
</p>
<p>
  <v-date-picker
    placeholder="选择日期"
    :disabled-date="disabledEndDate">
  </v-date-picker>
</p>
</div>
</template>

<script>
import moment from 'moment'
export default {
  methods: {
    disabledStartDate (date) {
      if (date.isBefore(moment().subtract(5, 'days'))) {
        return true
      }
      return false
    },
    disabledEndDate (date) {
      if (date.isAfter(moment().add(5, 'days'))) {
        return true
      }
      return false
    }
  }
}
</script>
