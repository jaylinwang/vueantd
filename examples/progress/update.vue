<template>
<div style="width:500px;">
<v-progress :percent="percent">
</v-progress>
<v-button-group>
  <v-button @click="minus">
    <v-icon
      type="minus"></v-icon>
  </v-button>
  <v-button @click="plus">
    <v-icon type="plus"></v-icon>
  </v-button>
</v-button-group>

</div>
</template>

<script>
export default {
  data () {
    return {
      percent: 0
    }
  },
  methods: {
    minus () {
      if (this.percent > 0) {
        this.percent -= 10
      }
    },
    plus () {
      if (this.percent < 100) {
        this.percent += 10
      }
    }
  }
}
</script>
<style>
.v-progress{
  margin-bottom: 16px;
}
</style>
