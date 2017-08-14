<template>
<div style="width:220px;">
  <v-time-picker
    v-model="time">
  </v-time-picker>
</div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      time: moment()
    }
  }
}
</script>
