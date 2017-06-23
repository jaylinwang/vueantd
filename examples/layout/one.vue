<template>
<div class="layout">
  <div class="header">
    <div class="logo">
      <div class="logo-content">
        LOGO
      </div>
    </div>
    <v-menu
      class="menu"
      mode="horizontal"
      theme="custom"
      v-model="headerMenu">
      <v-menu-item
        class="menu-item"
        label="home">
        首页
      </v-menu-item>
      <v-menu-item
        class="menu-item"
        label="fun1">
        功能一
      </v-menu-item>
    </v-menu>
  </div>
  <div class="layout">
    <div class="sider">
      <v-menu
        v-model="siderMenu">
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
    <div class="content">

    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.layout {
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #EFEFEF;
  overflow: scroll;

  .layout{
    width: 100%;
    height: 100%;
  }
}

.header{
  position: relative;
  margin-bottom: -48px;
  position: relative;
  height: 48px;
  background-color: #404040;
  z-index: 1;
}

.sider{
  width: 200px;
  height: 100%;
  background-color: #FFF;
}

.logo{
  position: absolute;
  width: 200px;
  height: 48px;
  text-align: center;
  line-height: 48px;

  .logo-content{
    display: inline-block;
    width: 120px;
    line-height: 30px;
    border-radius: 4px;
    background-color: #333;
    color: #FFF;
  }
}

.menu{
  font-size: 0;
  letter-spacing: 0;
  padding-left: 200px;
}

.menu .menu-item{
  line-height: 48px;
  font-size: 12px;
  color: #fff;
  &:hover{
    background-color: #333;
  }
  &.selected{
    background-color: #333;
    color: #FFF;
  }
}

</style>

<script>
export default {
  data () {
    return {
      headerMenu: '',
      siderMenu: ''
    }
  }
}
</script>
