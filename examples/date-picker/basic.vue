<template>
<div style="width:220px;">
<v-date-picker
  v-model="date"
  placeholder="选择日期">
</v-date-picker>
</div>
</template>

<script>
export default {
  data () {
    return {
      date: null
    }
  }
}
</script>
