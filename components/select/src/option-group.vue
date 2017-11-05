<template>
<li class="v-option-group">
  <div class="v-option-group__title">
    {{text}}
  </div>
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
