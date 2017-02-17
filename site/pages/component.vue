<template>
  <div class="container">
  <v-row :gutter="18">
    <v-col :span="24">
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </v-col>
  </v-row>
  </div>
</template>
<style lang="sass" scoped>
  .container{
    width: 1190px;
    margin: 0 auto;
  }
  .menu-wrapper {
    background-color: #fff;
    padding: 15px;
  }

  .content-wrapper {
    background-color: #fff;
    padding: 15px 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1,h2,h3,h4 {
    margin-top: 0;
    margin-bottom: 15px;
  }
  h1{
    font-size: 18px;
  }
  h2{
    font-size: 16px;
  }
  h3{
    font-size: 14px;
  }

  .menu {
    >li {
      .title {
        display: block;
        font-size: 16px;
        line-height: 35px;
        border-bottom: 1px solid #f8f8f8;
      }
    }
  }

  .sub-menu {
    >li {
      line-height: 30px;
      &:hover {
        background: #f8f8f8;
      }
      a {
        display: inline-block;
        padding-left: 15px;

        width: 100%;
        height: 100%;

        font-size: 14px;
        color: #666;
        text-decoration: none;
        border-bottom: 2px solid transparent;
      }
    }
  }

</style>
<script>
  export default {
    data() {
      return {
      };
    },
  };
</script>
