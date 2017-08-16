<template>
<div class="container">
  <v-row>
    <v-col class="tooltip-col" :span="6"></v-col>
    <v-col class="tooltip-col" :span="12">
      <v-tooltip
        content="这是一个tooltip"
        placement="top-start">
        <v-button>TL</v-button>
      </v-tooltip>
      <v-tooltip
        content="这是一个tooltip"
        placement="top">
        <v-button>T</v-button>
      </v-tooltip>
      <v-tooltip
        content="这是一个tooltip"
        placement="top-end">
        <v-button>TR</v-button>
      </v-tooltip>
    </v-col>
    <v-col class="tooltip-col" :span="6"></v-col>
  </v-row>
  <v-row>
    <v-col class="tooltip-col" :span="6">
      <v-tooltip
        content="这是一个tooltip"
        placement="left-start">
        <v-button>LT</v-button>
      </v-tooltip>
    </v-col>
    <v-col class="tooltip-col" :span="12"></v-col>
    <v-col class="tooltip-col" :span="6">
      <v-tooltip
        content="这是一个tooltip"
        placement="right-start">
        <v-button>RT</v-button>
      </v-tooltip>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="tooltip-col" :span="6">
      <v-tooltip
        content="这是一个tooltip"
        placement="left">
        <v-button>L</v-button>
      </v-tooltip>
    </v-col>
    <v-col class="tooltip-col" :span="12"></v-col>
    <v-col class="tooltip-col" :span="6">
      <v-tooltip
        content="这是一个tooltip"
        placement="right">
        <v-button>R</v-button>
      </v-tooltip>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="tooltip-col" :span="6">
      <v-tooltip
        content="这是一个tooltip"
        placement="left-end">
        <v-button>LB</v-button>
      </v-tooltip>
    </v-col>
    <v-col class="tooltip-col" :span="12"></v-col>
    <v-col class="tooltip-col" :span="6">
      <v-tooltip
        content="这是一个tooltip"
        placement="right-end">
        <v-button>RB</v-button>
      </v-tooltip>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="tooltip-col" :span="6"></v-col>
    <v-col class="tooltip-col" :span="12">
      <v-tooltip
        content="这是一个tooltip"
        placement="bottom-start">
        <v-button>BL</v-button>
      </v-tooltip>
      <v-tooltip
        content="这是一个tooltip"
        placement="bottom">
        <v-button>B</v-button>
      </v-tooltip>
      <v-tooltip
        content="这是一个tooltip"
        placement="bottom-end">
        <v-button>BR</v-button>
      </v-tooltip>
    </v-col>
    <v-col class="tooltip-col" :span="6"></v-col>
  </v-row>
</div>
</template>

<style>
.tooltip-col{
  height: 40px;
  text-align: center;
}
</style>

<script>
export default {

}
</script>
