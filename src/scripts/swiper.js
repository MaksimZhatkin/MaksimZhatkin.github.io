import Swiper from 'swiper'
import { Pagination, FreeMode } from 'swiper/modules'

export const swiper = new Swiper('.js-swiper', {
  modules: [Pagination, FreeMode],
  classModifier: 'js-swiper',
  wrapperClass: 'js-swiper-wrapper',
  slideClass: 'js-swiper-slide',
  slidesPerView: 'auto',
  edgeSwipeDetection: true,
  loop: true,
  pagination: {
    classModifier: 'js-swiper',
    el: '.js-swiper-pagination',
    bulletClass: 'js-pagination-bullet pagination__bullet',
    bulletActiveClass: 'js-pagination-bullet_active pagination__bullet_active'
  },
  breakpoints: {
    768: {
      enabled: false,
      init: false
    }
  }
})
