<template>
<div>
  <v-popover>
    <v-button>hover me</v-button>
    <span slot="title"></span>
    <div
      class="content"
      slot="content">
      这是内容
    </div>
  </v-popover>
</div>
</template>

<style scoped>
.content{
  padding: 80px;
  background: #FFF;
}
</style>
