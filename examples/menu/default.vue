<template>
<div>
  <v-menu
    class="demo-menu"
    v-model="selectedMenu"
    :openLabels="openLabels">
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
    <v-submenu label="s3">
      <span slot="title">
         <v-icon type="message"></v-icon> 导航菜单 五
      </span>
      <v-menu-item label="7">
        选项 五
      </v-menu-item>
      <v-menu-item label="8">
        选项 六
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
      selectedMenu: '2',
      openLabels: ['s2']
    }
  }
}
</script>
