<template>
<v-row>
  <v-col :span="12">
    <v-input
      type="textarea"
      placeholder="文本输入..."
      v-model="text">
    </v-input>
  </v-col>
</v-row>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
