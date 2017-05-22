<template>
<div>
  <v-switch
    v-model="v1"
    @change="v1Change">
    默认开
  </v-switch>
  <v-switch
    v-model="v2"
    @change="v2Change">
    默认关
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
    },

    v2Change () {
      console.log(`v1: ${this.v2}`)
    }
  }
}
</script>
