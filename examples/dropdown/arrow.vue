<script>
export default {

}
</script>

<template>
<div class="container">
  <v-row>
    <v-col class="col" :span="4"></v-col>
    <v-col class="col" :span="8">
      <v-dropdown placement="top-start" show-arrow>
        <v-button>
          上左
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <v-dropdown placement="top" show-arrow>
        <v-button>
          正上
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <v-dropdown placement="top-end" show-arrow>
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
      <v-dropdown  placement="left-start" show-arrow>
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
    <v-col class="col" :span="8"></v-col>
    <v-col class="col" :span="8">
      <v-dropdown  placement="right-start" show-arrow>
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
      <v-dropdown  placement="left" show-arrow>
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
    <v-col class="col" :span="8"></v-col>
    <v-col class="col" :span="8">
      <v-dropdown  placement="right" show-arrow>
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
      <v-dropdown  placement="left-end" show-arrow>
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
    <v-col class="col" :span="8"></v-col>
    <v-col class="col" :span="8">
      <v-dropdown  placement="right-end" show-arrow>
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
    <v-col class="col" :span="8">
      <v-dropdown  placement="bottom-start" show-arrow>
        <v-button>
          下左
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <v-dropdown placement="bottom" show-arrow>
        <v-button>
          正下
        </v-button>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>1st menu item</v-dropdown-item>
            <v-dropdown-item>2cd menu item</v-dropdown-item>
            <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <v-dropdown  placement="bottom-end" show-arrow>
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
