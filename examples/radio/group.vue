<script>
export default {
  data () {
    return {
      checkOptions: ['A', 'B', 'C', 'D'],
      v1: 'A',
      v2: 'D'
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
  <v-radio-group v-model="v1" @change="v1Change">
    <v-radio
      v-for="(option, index) in checkOptions"
      :label="option"
      :key="index">
      {{option}}
    </v-radio>
  </v-radio-group>
  <v-radio-group v-model="v2" @change="v2Change">
    <v-radio
      v-for="(option, index) in checkOptions"
      :label="option"
      :key="index">
      {{option}}
    </v-radio>
  </v-radio-group>
</div>
</template>
