<template>
<div>
  <v-alert show-icon>
    info text
    <span slot="description">
      This is a warning notice about copywriting.
    </span>
  </v-alert>
  <v-alert type="success" show-icon>
    success text
    <span slot="description">
      This is a warning notice about copywriting.
    </span>
  </v-alert>
  <v-alert type="warn" show-icon>
    warn text
    <span slot="description">
      This is a warning notice about copywriting.
    </span>
  </v-alert>
  <v-alert type="error" show-icon>
    error text
    <span slot="description">
      This is a warning notice about copywriting.
    </span>
  </v-alert>
</div>
</template>

<style>
.v-alert{
  margin-bottom: 16px;
}
</style>


<script>
export default {

}
</script>
