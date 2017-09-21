<template>
<div class="demo-block">
  <!-- 示例显示 -->
  <div class="demo-display">
    <div class="demo-display-header">
      <slot name="display"></slot>
    </div>
    <div
      class="demo-display-footer"
      @click="handleClick">
      <span v-if="!isOpen">
        <v-icon type="caret-down"></v-icon> 显示代码
      </span>
      <span v-else>
         <v-icon type="caret-up"></v-icon> 隐藏代码
      </span>
    </div>
  </div>
  <!-- 示例源码 -->
  <div
    class="demo-code"
    :style="{
      height: isOpen ? `${codeContentHeight}px` : 0
    }">
    <div class="code-handle">
      <div
        class="jsfiddle-handle"
        @click="openCodeInJsFiddle">
        <v-icon type="cloud"></v-icon>
      </div>
    </div>
    <div ref="content">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
const cheerio = require('cheerio')

export default {
  name: 'DemoBlock',

  data () {
    return {
      codeContentHeight: 0,
      isOpen: true
    }
  },

  props: {
    code: {
      type: String
    }
  },

  mounted () {
    this.codeContentHeight = this.$refs.content.clientHeight
  },

  methods: {
    handleClick () {
      this.isOpen = !this.isOpen
    },

    openCodeInJsFiddle () {
      // 生成jsfiddle代码片段
      const $ = cheerio.load(this.code)
      let htmlAppend = '<' + 'script src="https://unpkg.com/vue">' + '</' + 'script> \n'
      htmlAppend += '<' + 'script src="https://unpkg.com/vueantd@1.1.11-beta/dist/vueantd.js">' + '</' + 'script>'
      let cssAppend = `@import url('https://unpkg.com/vueantd@1.1.11-beta/dist/styles/vueantd.css')`
      let data = {
        html: `${$('template').html() ? $('template').html() : ''}\n${htmlAppend}`,
        js: `new Vue().$mount('#demo')\n${$('script').html() ? $('script').html() : ''}`,
        css: `${cssAppend}\n${$('style').html() ? $('style').html() : ''}`,
        title: 'vueantd 示例代码',
        wrap: 'd'
      }

      let form = document.createElement('form')
      form.target = '_blank'
      form.action = 'http://jsfiddle.net/api/post/library/pure/'
      form.method = 'POST'
      Object.keys(data).forEach((key) => {
        let node = document.createElement('textarea')
        node.name = key
        node.value = data[key]
        form.appendChild(node)
      })
      document.body.appendChild(form)
      form.submit()
      form.remove()
    }
  }
}
</script>
