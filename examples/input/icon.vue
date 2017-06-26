<template>
<v-row :gutter="10">
  <v-col :span="6">
    <v-input
      v-model="iconValue"
      size="small"
      icon="search"
      placeholder="Small size input"
      @iconClick="handleIconClick">
    </v-input>
  </v-col>
  <v-col :span="6">
    <v-input
      v-model="iconValue"
      icon="up"
      placeholder="Basic size input"
      @iconClick="handleIconClick">
    </v-input>
  </v-col>
  <v-col :span="6">
    <v-input
      v-model="iconValue"
      icon="list"
      size="large"
      placeholder="Large size input"
      @iconClick="handleIconClick">
    </v-input>
  </v-col>
</v-row>
</template>

<script>
export default {
  data () {
    return {
      iconValue: ''
    }
  },
  methods: {
    handleIconClick (val) {
      console.log(val)
    }
  }
}
</script>
