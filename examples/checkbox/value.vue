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
      console.log(this.v1)
    },
    v2Change () {
      console.log(this.v2)
    }
  }
}
</script>

<template>
<div>
  <v-checkbox
    v-model="v1"
    true-label="a"
    false-label="b"
    @change="v1Change">A/B(选中为A)</v-checkbox>
  <v-checkbox
    v-model="v2"
    true-label="a"
    false-label="b"
    @change="v2Change">A/B(选中为A)</v-checkbox>
</div>
</template>
