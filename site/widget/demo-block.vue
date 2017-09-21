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
        @click="openCodeInJsFiddle"
        title="点击在jsfiddle中展示">
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
      isOpen: false
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
      $('template div').attr('id', 'demo')
      let htmlAppend = '<' + 'script src="https://unpkg.com/vue">' + '</' + 'script> \n' // 添加 vue 依赖
      htmlAppend += '<' + 'script src="https://unpkg.com/vueantd">' + '</' + 'script>' // 添加 vueantd 依赖
      let cssAppend = `@import url('https://unpkg.com/vueantd/dist/styles/vueantd.css');` // 添加样式依赖
      let jsAppend = (() => {
        let scriptContent = $('script').html()
        if (scriptContent) {
          scriptContent = scriptContent.replace(/export default script/, '')
          return `${scriptContent}\nnew Vue(script).$mount('#demo')`
        } else {
          return `new Vue().$mount('#demo')`
        }
      })()
      let data = {
        html: `${$('template').html() ? $('template').html() : ''}\n${htmlAppend}`,
        js: jsAppend,
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
