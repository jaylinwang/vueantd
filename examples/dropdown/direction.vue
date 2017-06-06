<script>
export default {

}
</script>

<template>
<div>
<p>
  <v-dropdown  placement="bottom-end">
    <v-button>
      dropdown bottom right
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown  placement="bottom">
    <v-button>
      dropdown bottom center
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown placement="bottom-start">
    <v-button>
      dropdown bottom left
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
</p>
<p>
  <v-dropdown placement="top-start">
    <v-button>
      dropdown top left
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown placement="top">
    <v-button>
      dropdown top center
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
  <v-dropdown placement="top-end">
    <v-button>
      dropdown top right
    </v-button>
    <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2cd menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown>
</p>
</div>
</template>
