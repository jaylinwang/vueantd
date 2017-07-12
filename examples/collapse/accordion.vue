<template>
<div>
<v-collapse
  v-model="collapseValue">
  <v-collapse-item
    header="this is collapse item 1"
    :label="1">
    {{text}}
  </v-collapse-item>
  <v-collapse-item
    header="this is collapse item 2"
    :label="2">
    {{text}}
  </v-collapse-item>
  <v-collapse-item
    header="this is collapse item 2"
    :label="3">
    这是内荣
  </v-collapse-item>
</v-collapse>
</div>
</template>

<script>
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
export default {
  data () {
    return {
      text,
      collapseValue: 1
    }
  }
}
</script>
