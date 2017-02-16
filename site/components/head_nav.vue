<template>
  <header>
    <nav>
      <div class="brand">
        antd-vue
      </div>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/component">组件</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="sass">
  body{
    background: #f8f8f8;
  }
  header {
    background: #fff;
    margin-bottom: 15px;
    nav {
      width: 1190px;
      height: 50px;
      margin: 0 auto;
      line-height: 50px;
      &::after {
        content: " ";
        display: block;
        clear: both;
      }
    }
    .brand {
      font-size: 30px;
      color: #00A0E9;
      float: left;
      margin-right: 30px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      >li {
        display: inline-block;
        a {
          display: inline-block;
          width: 80px;

          text-align: center;
          text-decoration: none;

          color: #666;
          font-size: 14px;

          border-bottom: 2px solid transparent;
          &:hover {
            color: #00A0E9;
            border-bottom-color: #00A0E9;
          }
        }
      }
    }
  }

</style>
<script>
  export default {

  };

</script>
