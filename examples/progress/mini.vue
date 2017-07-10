<template>
<div style="width:160px;">
<v-progress :percent="30" :stroke-width="5">
</v-progress>
<v-progress :percent="40" status="active" :stroke-width="5">
</v-progress>
<v-progress :percent="60" status="exception" :stroke-width="5">
</v-progress>
<v-progress :percent="100" :stroke-width="5">
</v-progress>
<v-progress :percent="60" hide-info :stroke-width="5">
</v-progress>
</div>
</template>

<script>
export default {

}
</script>
<style>
.v-progress{
  margin-bottom: 16px;
}
</style>
