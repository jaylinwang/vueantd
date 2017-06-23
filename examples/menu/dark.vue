<template>
<div>
  <v-menu
    class="demo-menu"
    v-model="selectedMenu"
    theme="dark">
    <v-menu-item label="1">
      <v-icon type="list"></v-icon> 导航菜单 一
    </v-menu-item>
    <v-menu-item label="2">
      <v-icon type="bell"></v-icon> 导航菜单 二
    </v-menu-item>
    <v-submenu label="s1">
      <span slot="title">
         <v-icon type="message"></v-icon> 导航菜单 三
      </span>
      <v-menu-item label="3">
        选项 一
      </v-menu-item>
      <v-menu-item label="4">
        选项 二
      </v-menu-item>
    </v-submenu>
    <v-submenu label="s2">
      <span slot="title">
         <v-icon type="message"></v-icon> 导航菜单 四
      </span>
      <v-menu-item label="5">
        选项 三
      </v-menu-item>
      <v-menu-item label="6">
        选项 四
      </v-menu-item>
    </v-submenu>
  </v-menu>
</div>
</template>
<style>
.demo-menu{
  width: 240px;
}
</style>
<script>
export default {
  data () {
    return {
      selectedMenu: ''
    }
  }
}
</script>
