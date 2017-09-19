import Upload from './src/upload.vue'

const install = (Vue) => {
  Vue.component(Upload.name, Upload)
}

export {
  install,
  Upload
}
