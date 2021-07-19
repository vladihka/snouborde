new Swiper('.snoubord-slider', {
   autoplay: {
      //пауза между прокруткой
      delay: 1000,
      //закончить на последнем слайде
      stopLastSlide: true,
      //отключить после ручного переключения
      disableOnInteraction: false
   },
   //скорость
   speed: 1200,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   grabCursor: true,
   slidesPerView: 4,
   breakpoints: {
      280: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 1,
      },
      992: {
         slidesPerView: 3,
      },
      1100: {
         slidesPerView: 3,
      }
   },
   spaceBetween: 10,
});