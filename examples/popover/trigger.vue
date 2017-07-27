<template>
<div>
  <v-row>
    <v-col :span="4">
    <v-popover
      content="this is content"
      title="title">
      <v-button>hover me</v-button>
    </v-popover>
    </v-col>
    <v-col :span="4">
    <v-popover
      content="this is content"
      title="title"
      trigger="click">
      <v-button>click me</v-button>
  </v-popover>
    </v-col>
  </v-row>
</div>
</template>
