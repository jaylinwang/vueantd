<template>
  <div class="container">
    <v-row :gutter="18">
      <v-col :span="6">
        <div class="menu_wrap">
          <ul class="menu">
            <li v-for="o1 in outline">
              <span class="title">{{ o1.title }}</span>
              <ul class="sub-menu">
                <li v-for="o2 in o1.children" v-if="o2.source">
                  <router-link :to="'/component/' + o2.source">{{o2.title}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </v-col>
      <v-col :span="18">
        <div class="content">
          <router-view></router-view>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="sass" scoped>
  .container {
    width: 1190px;
    margin: 0 auto;
  }
  .menu_wrap {
    background-color: #fff;
    padding: 15px;
  }
  .content {
    background-color: #fff;
    padding: 15px 30px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
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
  import outline from '../config/outline'

  export default {
    data () {
      return {
        outline: outline.list
      }
    }
  }

</script>
