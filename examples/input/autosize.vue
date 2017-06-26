<template>
<v-row>
  <v-col :span="12">
    <v-input
      v-model="text"
      type="textarea"
      placeholder="文本输入..."
      :min-rows="1"
      :max-rows="5"
      autosize>
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
