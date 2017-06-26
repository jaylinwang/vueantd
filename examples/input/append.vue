<template>
<div>
<v-row>
  <v-col :span="12">
    <v-input placeholder="Basic input">
      <v-select
        slot="before"
        v-model="beforeVal"
        :width="120">
        <v-option :label="1" text="http://"></v-option>
        <v-option :label="2" text="https://"></v-option>
      </v-select>
    </v-input>
  </v-col>
</v-row>
<v-row>
  <v-col :span="12">
    <v-input placeholder="Basic input">
      <v-select
        slot="after"
        v-model="beforeVal"
        :width="120">
        <v-option :label="1" text="http://"></v-option>
        <v-option :label="2" text="https://"></v-option>
      </v-select>
    </v-input>
  </v-col>
</v-row>
<v-row>
  <v-col :span="12">
    <v-input placeholder="Basic input">
      <v-select
        slot="before"
        v-model="beforeVal"
        :width="120">
        <v-option :label="1" text="http://"></v-option>
        <v-option :label="2" text="https://"></v-option>
      </v-select>
      <v-select
        slot="after"
        v-model="beforeVal"
        :width="120">
        <v-option :label="1" text="http://"></v-option>
        <v-option :label="2" text="https://"></v-option>
      </v-select>
    </v-input>
  </v-col>
</v-row>
<v-row>
  <v-col :span="12">
    <v-input placeholder="Basic input">
      <div
        slot="before"
        style="width:80px">
        <v-icon type="list"></v-icon>
      </div>
      <div
        slot="after"
        style="width:80px">
        <v-icon type="search"></v-icon>
      </div>
    </v-input>
  </v-col>
</v-row>
</div>
</template>

<style>
.v-row{
  margin-bottom: 16px;
}
</style>


<script>
export default {
  data () {
    return {
      beforeVal: 1
    }
  }
}
</script>
