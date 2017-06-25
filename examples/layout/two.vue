<template>
  <div class="two">
    <div class="layout">
      <div class="header">
        <div class="logo">
          <div class="logo-content">
            LOGO
          </div>
        </div>
        <v-menu class="menu" mode="horizontal" theme="custom" v-model="headerMenu">
          <v-menu-item class="menu-item" label="home">
            首页
          </v-menu-item>
          <v-menu-item class="menu-item" label="fun1">
            功能一
          </v-menu-item>
        </v-menu>
      </div>
      <div class="layout">
        <div class="sider"
          :class="{
            'fold': isSiderFold
          }">
          <div
            class="sider-head"
            @click="isSiderFold = !isSiderFold">
            <span class="menu-handle">
              <v-icon type="menu"></v-icon>
            </span>
          </div>
          <div class="sider-body">
            <v-menu
              class="sidermenu"
              v-model="siderMenu"
              :mini="isSiderFold">
              <v-menu-item
                class="menu-item"
                label="1">
                <v-tooltip
                  v-if="isSiderFold"
                  content="导航菜单一"
                  placement="right">
                  <span class="menu-content">
                  <v-icon type="list"></v-icon>
                </span>
                </v-tooltip>
                <template v-else>
                  <v-icon type="list"></v-icon> 导航菜单一
                </template>
              </v-menu-item>
              <v-menu-item class="menu-item" label="2">
                <v-tooltip
                  v-if="isSiderFold"
                  content="导航菜单一"
                  placement="right">
                  <span class="menu-content">
                  <v-icon type="bell-o"></v-icon>
                </span>
                </v-tooltip>
                <template v-else>
                  <v-icon type="bell-o"></v-icon> 导航菜单二
                </template>
              </v-menu-item>
              <v-submenu class="submenu" label="s1">
                <span slot="title">
                <v-tooltip
                  v-if="isSiderFold"
                  content="导航菜单 三"
                  placement="right">
                  <v-icon type="question-circle-o"></v-icon>
                </v-tooltip>
                <template v-else>
                  <v-icon type="question-circle-o"></v-icon> 导航菜单 三
                </template>
              </span>
                <v-menu-item class="menu-item" label="3">
                  <v-tooltip
                    v-if="isSiderFold"
                    content="选项一"
                    placement="right">
                    <span class="menu-content">
                    <v-icon type="list"></v-icon>
                  </span>
                  </v-tooltip>
                  <template v-else>
                    选项一
                  </template>
                </v-menu-item>
                <v-menu-item class="menu-item" label="4">
                  <v-tooltip
                    v-if="isSiderFold"
                    content="选项二"
                    placement="right">
                    <span class="menu-content">
                    <v-icon type="list"></v-icon>
                  </span>
                  </v-tooltip>
                  <template v-else>
                    选项二
                  </template>
                </v-menu-item>
              </v-submenu>
            </v-menu>
          </div>
        </div>
        <div class="content">

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .two {
    .layout {
      position: relative;
      width: 100%;
      height: 500px;
      background-color: #EFEFEF;
      overflow: scroll;

      .layout {
        padding-top: 48px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
      }
    }

    .header {
      position: relative;
      margin-bottom: -48px;
      height: 48px;
      background-color: #404040;
      z-index: 1;
    }

    .logo {
      position: absolute;
      width: 200px;
      height: 48px;
      text-align: center;
      line-height: 48px;

      .logo-content {
        display: inline-block;
        width: 120px;
        line-height: 30px;
        border-radius: 4px;
        background-color: #333;
        color: #FFF;
      }
    }

    .menu {
      font-size: 0;
      letter-spacing: 0;
      padding-left: 200px;
    }

    .menu .menu-item {
      line-height: 48px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      &:after {
        display: none;
      }
      &:hover {
        background-color: #333;
      }
      &.selected {
        background-color: #333;
        color: #FFF;
      }
    }

    .sider {
      width: 200px;
      height: 100%;
      background-color: #FFF;
      transition: width .1s;
      .menu-handle{
        display: inline-block;
        transition: all .1s;
      }
      &-head{
        text-align: center;
        cursor: pointer;
        line-height: 30px;
        border-bottom: 1px solid #f2f2f2;
      }
    }

    .sider.fold{
      width: 60px;
      .menu-handle{
        transform: rotate(270deg);
      }
    }
  }

</style>

<script>
  export default {
    data () {
      return {
        headerMenu: '',
        siderMenu: '',
        isSiderFold: false
      }
    }
  }

</script>
