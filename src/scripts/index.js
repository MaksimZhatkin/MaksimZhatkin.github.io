const swiper = new Swiper('.js-swiper', {
    classModifier: 'js-swiper',
    wrapperClass: 'js-swiper-wrapper',
    slideClass: 'js-swiper-slide',
    slidesPerView: 'auto',
    edgeSwipeDetection: true,
    loop: true,

    pagination: {
        classModifier: 'js-swiper',
        el: '.js-swiper-pagination',
        bulletClass: 'js-pagination-bullet swiper-accordion__bullet',
        bulletActiveClass: 'js-pagination-bullet_active swiper-accordion__bullet_active',

    },

    on: {
        resize: function enableOnlyMobile() {
            if (window.innerWidth > 768 ) {
                swiper.disable();
            } else {
                swiper.enable();
            };
        }
    },
  });