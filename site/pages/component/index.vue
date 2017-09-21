<template>
<div class="component">
  <div class="side">
    <div class="side-header">
      <h2>vueantd.js</h2>
    </div>
    <div class="side-body">
      <v-menu
        class="demo-menu"
        v-model="selectedMenu"
        :openLabels="openLabels"
        @select="handleMenuSelect">
        <v-submenu
          label="guide">
          <span slot="title">
            开发指南
          </span>
          <v-menu-item
            label="install">
            安装
          </v-menu-item>
          <v-menu-item
            label="custom">
            自定义
          </v-menu-item>
        </v-submenu>
        <v-submenu
          label="components">
          <span slot="title">
            组件
          </span>
          <v-menu-item
            label="icon">
            Icon 图标
          </v-menu-item>
          <v-menu-item
            label="button">
            Button 按钮
          </v-menu-item>
        </v-submenu>
      </v-menu>
    </div>
  </div>
  <div class="page">
    <div class="page-header">
      <nav>
        <ul>
          <li class="active">组件</li>
        </ul>
      </nav>
    </div>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      selectedMenu: '',
      openLabels: ['guide']
    }
  },
  methods: {
    handleMenuSelect (label) {
      this.$router.push(`/component/${label}`)
    }
  }
}
</script>
