// 此处参照 iview
// url: https://github.com/iview/iview/blob/2.0/src/directives/clickoutside.js
export default {
  bind (el, binding, vnode) {
    let documentClickHandler = function (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = documentClickHandler
    document.addEventListener('click', documentClickHandler)
  },
  unbind (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
