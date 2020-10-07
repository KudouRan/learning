(function (timeout) {
  let timer = null;

  const swiper = document.getElementById('J_homeSwiper');
  const swiperWrapper = swiper.getElementsByClassName('swiper-wrapper')[0];
  const swiperSlides = swiperWrapper.getElementsByClassName('swiper-slide');
  const length = swiperSlides.length;

  const swiperPagination = document.getElementsByClassName('swiper-pagination')[0];
  const paginationBullets = swiperPagination.getElementsByClassName('swiper-pagination-bullet');

  const prevBtn = swiper.querySelector('.swiper-button-prev');
  const nextBtn = swiper.querySelector('.swiper-button-next');

  for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].addEventListener('click', (e) => {
      let active = swiperWrapper.getElementsByClassName('swiper-slide-active')[0],
          index = active.getAttribute('data-swiper-slide-index');
      i !== Number(index) && (go(index, i), timer = run());

    }, false)
  }

  Array.from(swiperSlides).forEach((el) => {
    let i = el.getAttribute('data-swiper-slide-index');
    el.style.transform = `translateX(${i * -1226}px)`;
  });

  prevBtn.addEventListener('click', prev, false);
  nextBtn.addEventListener('click', next, false);

  function getIndex() {
    let active = swiperWrapper.getElementsByClassName('swiper-slide-active')[0],
        index = active.getAttribute('data-swiper-slide-index');
    return Number(index);
  }

  function go(from, to) {
    //移动点
    let activeBullet = swiperPagination.getElementsByClassName('swiper-pagination-bullet-active')[0];
    activeBullet.classList.remove('swiper-pagination-bullet-active');
    paginationBullets[to].classList.add('swiper-pagination-bullet-active');

    //更换图片
    swiperSlides[from].classList.remove('swiper-slide-active');
    swiperSlides[to].classList.add('swiper-slide-active');
  }

  function prev() {
    let index = getIndex(),
        prevIndex = index === 0 ? length - 1 : index - 1;
    go(index, prevIndex);
    timer = run();
  }

  function next() {
    let index = getIndex(),
        nextIndex = index === length - 1 ? 0 : index + 1;
    go(index, nextIndex);
    timer = run();
  }

  function run() {
    clearInterval(timer);
    return setInterval(() => {
      next();
    }, timeout);
  }

  timer = run();
})(5000);

// class Swiper {
//   //构造器
//   constructor(timeout = 5000, width = 1226) {
//     this.timeout = timeout;
//   }
//
//   swiper = document.getElementById('J_homeSwiper');
//   swiperWrapper = this.swiper.getElementsByClassName('swiper-wrapper')[0];
//   swiperSlides = this.swiperWrapper.getElementsByClassName('swiper-slide');
//   length = this.swiperSlides.length;
//
//   swiperPagination = document.getElementsByClassName('swiper-pagination')[0];
//   paginationBullets = this.swiperPagination.getElementsByClassName(
//       'swiper-pagination-bullet'
//   );
//
//
//   prevBtn = this.swiper.querySelector('.swiper-button-prev');
//   nextBtn = this.swiper.querySelector('.swiper-button-next');
//
//   //私有属性
//   #timer = null;
//
//   //方法
//   getIndex() {
//     let active = this.swiperWrapper.getElementsByClassName(
//         'swiper-slide-active'
//         )[0],
//         index = active.getAttribute('data-swiper-slide-index');
//     return Number(index);
//   }
//
//   go(from, to) {
//     //移动点
//     let activeBullet = this.swiperPagination.getElementsByClassName(
//         'swiper-pagination-bullet-active'
//     )[0];
//     activeBullet.classList.remove('swiper-pagination-bullet-active');
//     this.paginationBullets[to].classList.add('swiper-pagination-bullet-active');
//
//     //更换图片
//     this.swiperSlides[from].classList.remove('swiper-slide-active');
//     this.swiperSlides[to].classList.add('swiper-slide-active');
//   }
//
//   prev() {
//     let index = this.getIndex(),
//         prevIndex = index === 0 ? this.length - 1 : index - 1;
//     this.go(index, prevIndex);
//     this.#timer = this.run();
//   }
//
//   next() {
//     let index = this.getIndex(),
//         nextIndex = index === this.length - 1 ? 0 : index + 1;
//     console.log(index, nextIndex);
//     this.go(index, nextIndex);
//     this.#timer = this.run();
//   }
//
//   run() {
//     clearInterval(this.#timer);
//     return setInterval(() => {
//       this.next();
//     }, this.timeout);
//   }
//
//   transform() {
//     Array.from(this.swiperSlides).forEach((el) => {
//       let i = el.getAttribute('data-swiper-slide-index');
//       el.style.transform = `translateX(${i * -1226}px)`;
//     });
//   }
//
//   init() {
//     this.transform();
//     this.run();
//   }
// }
//
// let sw = new Swiper(1000);
//
// sw.init();