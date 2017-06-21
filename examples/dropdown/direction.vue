<script>
export default {

}
</script>

<template>
<div class="container">
  <v-row>
    <v-col class="col" :span="4"></v-col>
    <v-col class="col" :span="10">
      <v-dropdown  placement="top-start">
        <v-button>
          上左
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <v-dropdown trigger="click" placement="top">
        <v-button>
          正上
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <v-dropdown
        placement="top-end">
        <v-button>
          上右
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </v-col>
    <v-col class="col" :span="4"></v-col>
  </v-row>
  <v-row>
    <v-col class="col" :span="4">
      <v-dropdown  placement="left-start">
        <v-button>
          左上
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </v-col>
    <v-col class="col" :span="10"></v-col>
    <v-col class="col" :span="10">
      <v-dropdown  placement="right-start">
        <v-button>
          右上
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="col" :span="4">
      <v-dropdown  placement="left">
        <v-button>
          正左
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </v-col>
    <v-col class="col" :span="10"></v-col>
    <v-col class="col" :span="4">
      <v-dropdown  placement="right">
        <v-button>
          正右
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="col" :span="4">
      <v-dropdown  placement="left-end">
        <v-button>
          左下
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </v-col>
    <v-col class="col" :span="10"></v-col>
    <v-col class="col" :span="4">
      <v-dropdown  placement="right-end">
        <v-button>
          右下
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="col" :span="4"></v-col>
    <v-col class="col" :span="10">
      <v-dropdown  placement="bottom-start">
        <v-button>
          下左
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <v-dropdown placement="bottom">
        <v-button>
          正下
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <v-dropdown  placement="bottom-end">
        <v-button>
          下右
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </v-col>
    <v-col class="col" :span="4"></v-col>
  </v-row>
</div>
</template>

<style>
  body{
    background-color: #f2f2f2;
  }
  .container{
    padding-left: 180px;
  }
  .col{
    padding: 8px;
  }
</style>
