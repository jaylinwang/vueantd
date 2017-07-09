import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

const install = (Vue) => {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarouselItem.name, CarouselItem)
}

export {
  install,
  Carousel,
  CarouselItem
}
