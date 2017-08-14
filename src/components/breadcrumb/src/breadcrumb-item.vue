<template>
<span class="v-breadcrumb-item">
  <slot></slot>
  <span class="v-breadcrumb-separator" v-if="separator">
    {{separator}}
  </span>
</span>
</template>

<script>
export default {
  name: 'vBreadcrumbItem',
  componentName: 'vBreadcrumbItem',

  data () {
    return {
      separator: ''
    }
  }
}
</script>
