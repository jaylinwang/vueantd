<template>
<div class="v-progress">
  <div class="v-progress-outer">
    <div class="v-progress-inner"></div>
  </div>
  <div class="v-progress-text">
    {{ percent }}%
  </div>
</div>
</template>

<script>
export default {
  name: 'vProgress',

  props: {
    percent: {
      type: Number,
      default: 0
    }
  }
}
</script>
