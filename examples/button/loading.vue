<template>
<div>
  <p>
    <v-button type="primary" size="large" loading>Loading</v-button>
    <v-button size="normal" loading>Loading</v-button>
    <v-button type="danger" size="small" loading>Loading</v-button>
  </p>
  <p>
    <v-button
      :loading="loading"
      @click.native="toggleLoading">
      click toggle loading
    </v-button>
  </p>
</div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    toggleLoading () {
      this.loading = !this.loading
    }
  }
}
</script>
