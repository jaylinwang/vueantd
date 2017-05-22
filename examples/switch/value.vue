<template>
<div>
  <v-switch
    v-model="v1"
    off-label="a"
    on-label="b"
    @change="v1Change">
    默认a
  </v-switch>
  <v-switch
    v-model="v2"
    off-label="a"
    on-label="b"
    @change="v2Change">
    默认b
  </v-switch>
</div>
</template>

<script>
export default {
  data () {
    return {
      v1: 'a',
      v2: 'b'
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
