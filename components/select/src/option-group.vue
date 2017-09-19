<template>
<li class="v-option-group">
  <h3 class="v-option-group__title">
    {{text}}
  </h3>
  <ul>
    <slot></slot>
  </ul>
</li>
</template>

<script>
export default {
  name: 'vOptionGroup',
  componentName: 'vOptionGroup',

  props: {
    text: {
      type: String
    }
  }
}
</script>
