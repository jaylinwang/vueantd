<template>
<div>
  <v-switch
    v-model="v1"
    @change="v1Change"
    :disabled="disabled">
    {{ disabled ? 'disabled' : 'enable' }} - {{ v1 }}
  </v-switch>
  <v-button @click.native="toggleDisabled">
    toggle disabled
  </v-button>
  <v-button @click.native="toggleValue">
    toggle value
  </v-button>
</div>
</template>

<script>
export default {
  data () {
    return {
      v1: false,
      disabled: false
    }
  },

  methods: {
    v1Change () {
      console.log(`v1: ${this.v1}`)
    },

    toggleDisabled () {
      this.disabled = !this.disabled
    },

    toggleValue () {
      this.v1 = !this.v1
    }
  }
}
</script>
