import Progress from './src/progress.vue'

const install = (Vue) => {
  Vue.component(Progress.name, Progress)
}

export {
  install,
  Progress
}
