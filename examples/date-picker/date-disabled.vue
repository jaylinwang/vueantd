<template>
<div style="width:220px;">
<p>
  <v-date-picker
    v-model="startDate"
    placeholder="选择日期"
    :disabled-date="disabledStartDate">
  </v-date-picker>
</p>
<p>
  <v-date-picker
    placeholder="选择日期"
    v-model="endDate"
    :disabled-date="disabledEndDate">
  </v-date-picker>
</p>
</div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      startDate: moment(),
      endDate: moment()
    }
  },
  methods: {
    disabledStartDate (date) {
      if (date.isBefore(moment().subtract(5, 'days'))) {
        return true
      }
      return false
    },
    disabledEndDate (date) {
      if (date.isBefore(this.startDate)) {
        return true
      }
      return false
    }
  }
}
</script>
