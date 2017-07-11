<template>
<div style="width:520px">
  <v-carousel
    autoplay>
    <v-carousel-item>
      <div class="demo-item demo-item-1">
        1
      </div>
    </v-carousel-item>
    <v-carousel-item>
      <div class="demo-item demo-item-2">
        2
      </div>
    </v-carousel-item>
    <v-carousel-item>
      <div class="demo-item demo-item-3">
        3
      </div>
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<style>
.demo-item{
  line-height: 80px;
  text-align: center;
}
.demo-item-1{
  background-color: #AAA;
}
.demo-item-2{
  background-color: #EEE;
}
.demo-item-3{
  background-color: #CCC;
}
</style>

<script>
export default {

}
</script>
