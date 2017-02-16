<template>
  <div class="demo-block">
   <slot name="effect"></slot>
    <div class="demo-info">
      <slot name="title"></slot>
      <div class="demo-tips">
        <slot name="tips"></slot>
        <button @click="codeShow = !codeShow">toggle</button>
      </div>
      <transition name="code">
        <div class="demo-code" v-if="codeShow">
          <slot name="code"></slot>
          <button @click="toJsFiddle()">在线运行</button>
        </div>
      </transition>
    </div>
  </div>
</template>
<style lang="sass">
.demo-block{
  margin-bottom: 30px;
  border-radius: 2px;
  border: 1px solid #e4e4e4;

}

.demo-effect{
  padding: 30px 15px;
}

.demo-info{
  padding: 15px;
  border-top: 1px solid #e4e4e4;
  position: relative;
}

.demo-title{
  display: inline-block;
  position: absolute;
  left: 15px;
  top: -15px;

  padding-left: 5px;
  padding-right: 5px;

  line-height: 30px;
  background: #fff;
  z-index: 2;
}
.demo-code{
  pre{
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px dashed #e4e4e4;
  }
}
.demo-tips{
  position: relative;
  button{
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }
}
</style>
<script>
  import _ from 'lodash';

  export default {
    name: 'DemoBlock',

    data() {
      return {
        codeShow: false,
      };
    },
    props: ['jsfiddle'],
    methods: {
      toJsFiddle() {
        const {
          html,
          css,
        } = this.jsfiddle;
        const form = document.createElement('form');
        const node = document.createElement('textarea');
        const htmlTpl = `${html}`;
        const cssTpl = `${css}`;
        const data = {
          html: htmlTpl,
          css: cssTpl,
        };

        form.action = 'http://jsfiddle.net/api/post/library/pure/';
        form.target = '_blank';
        form.method = 'post';
        _.forIn(data, (value, key) => {
          node.name = key;
          node.value = value.toString();
          form.appendChild(node.cloneNode());
        });
        form.submit();
      },
    },
  };

</script>
