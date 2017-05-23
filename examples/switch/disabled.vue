<template>
<div>
  <v-switch
    v-model="v1"
    @change="v1Change"
    disabled>
  </v-switch>
</div>
</template>

<script>
export default {
  data () {
    return {
      v1: false,
      v2: true
    }
  },

  methods: {
    v1Change () {
      console.log(`v1: ${this.v1}`)
    }
  }
}
</script>
