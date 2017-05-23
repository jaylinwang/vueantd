<template>
<div>
  <v-badge
    :count="5">
    <a class="link-demo" href="#h">这是一个链接</a>
  </v-badge>
  <v-badge
    :count="0">
    <v-icon class="icon-demo" type="bell"></v-icon>
  </v-badge>
  <v-badge
    dot>
    <a class="link-demo" href="#h">这是一个链接</a>
  </v-badge>
  <v-badge
    dot>
   <v-icon class="icon-demo" type="bell"></v-icon>
  </v-badge>
</div>
</template>

<style>
.link-demo{
  line-height: 20px;
}
.icon-demo{
  color: #EFEFEF;
}
</style>


<script>
export default {

}
</script>
