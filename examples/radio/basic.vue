<script>
export default {
  data () {
    return {
      v1: 1
    }
  },
  methods: {
    v1Change () {
      console.log(this.v1)
    }
  }
}
</script>
<template>
<div>
  <v-radio v-model="v1" :label="1" @change="v1Change">
    选项1
  </v-radio>
  <v-radio v-model="v1" :label="2" @change="v1Change">
    选项2
  </v-radio>
</div>
</template>
