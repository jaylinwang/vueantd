<script>
export default {

}
</script>
<template>
<div>
  <v-dropdown trigger="click">
    <v-button>
      下拉菜单
      <v-icon type="down" style="margin-left:5px"></v-icon>
    </v-button>
    <v-dropdown-menu slot="dropdown">
      <v-dropdown-item>1st menu item</v-dropdown-item>
      <v-dropdown-item>2cd menu item</v-dropdown-item>
      <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown
    type="splitButton"
    trigger="click">
    分离的下拉菜单
    <v-dropdown-menu slot="dropdown">
      <v-dropdown-item>1st menu item</v-dropdown-item>
      <v-dropdown-item>2cd menu item</v-dropdown-item>
      <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
</div>
</template>
