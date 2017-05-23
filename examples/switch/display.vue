<template>
<div>
  <v-switch
    v-model="v1"
    @change="v1Change">
    <span slot="on">开</span>
    <span slot="off">关</span>
  </v-switch>
  <v-switch
    v-model="v1"
    @change="v1Change">
    <v-icon type="check" slot="on"></v-icon>
    <v-icon type="close" slot="off"></v-icon>
  </v-switch>
</div>
</template>

<script>
export default {
  data () {
    return {
      v1: false
    }
  },

  methods: {
    v1Change () {
      console.log(`v1: ${this.v1}`)
    }
  }
}
</script>
