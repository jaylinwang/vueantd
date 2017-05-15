<script>
export default {
  data () {
    return {
      checkOptions: ['Apple', 'Pear', 'Orange'],
      checkedOptions: ['Apple']
    }
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <v-checkbox-group v-model="checkedOptions">
      <v-checkbox
        v-for="(option, index) in checkOptions"
        :label="option"
        :key="index">
      {{option}}
      </v-checkbox>
    </v-checkbox-group>
  </div>
</template>
