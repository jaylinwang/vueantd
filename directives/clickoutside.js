export default {
  bind (el, binding, vnode) {
    document.addEventListener('click', function (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    })
  },
  unbind (el, binding) {
    document.removeEventListener('click')
  }
}
