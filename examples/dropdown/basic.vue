<template>
<v-dropdown>
  <a type="javascript:void(0)">
    下拉菜单
    <v-icon type="down"></v-icon>
  </a>
  <v-dropdown-menu slot="dropdown">
    <v-dropdown-item>1st menu item</v-dropdown-item>
    <v-dropdown-item>2cd menu item</v-dropdown-item>
    <v-dropdown-item disabled>3rd menu item</v-dropdown-item>
  </v-dropdown-menu>
</v-dropdown>
</template>

<style>
.v-icon{
  font-size: 12px;
}
</style>

<script>
export default {

}
</script>
