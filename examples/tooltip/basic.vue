<template>
<div>
  <v-tooltip
    content="这是一个Tooltip信息">
    鼠标进入显示tooltip
  </v-tooltip>
  <div class="test">
    <ul>
      <li>
        test
      </li>
      <li>
         <v-tooltip
          content="这是一个Tooltip信息">
          <div>
            <v-icon type="star"></v-icon>
          </div>
        </v-tooltip>
      </li>
    </ul>
  </div>
</div>
</template>
<style>
.test{
  position: relative;
}
.test ul{
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 16px;
    list-style: none;
}
.test ul>li{
  display: inline-block;
}
</style>

<script>
export default {

}
</script>
