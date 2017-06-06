<template>
<div>
  <v-alert closeable>
    info text
  </v-alert>
  <v-alert closeable>
    info text
    <span slot="description">
      This is a warning notice about copywriting.
    </span>
  </v-alert>
  <v-alert closeable>
    info text
    <span slot="close">不再提示</span>
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
