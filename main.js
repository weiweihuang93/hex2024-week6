import './assets/scss/all.scss';

console.log("Hello world!");

const Switcherswiper = new Swiper('.Switcherswiper', {
    loop: true, // 啟用回到起點模式
    slidesPerView: 1,
    spaceBetween: 24,

    // 媒体查询配置
    breakpoints: {
        // 当窗口宽度 >= 320px 时
        992: {
        slidesPerView: 2,
        spaceBetween: 24,
        },
    },

    // 分頁、左右箭頭、滾動條若有使用則必需設定          
    // 分頁   
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
    // 左右箭頭    
    navigation: {
      nextEl: '.swiper-button-next-new',
      prevEl: '.swiper-button-prev-new',
    },
  });

const myFocusswiper = new Swiper(".myFocusswiper", {
  loop: true, // 啟用回到起點模式
  slidesPerView: 1,
  // spaceBetween: 24,

  pagination: {
    el: ".swiper-paginationFocus",
    clickable: true,
    renderBullet: function (index, className) {
      const labels = ['酒精路跑地圖', '台北拉麵圖鑑', '海島自由行', '短天數出國推薦', '週末露營趣'];
      return `<li class="${className}">${labels[index]}</li>`;
    },
  },
  });

  const seSlideSwiper = new Swiper(".seSlideSwiper", {
    loop: true, // 啟用回到起點模式
    // 媒体查询配置
    breakpoints: {
        // 当窗口宽度 >= 320px 时
        320: {
        slidesPerView: 1,
        direction: "horizontal",
        },
        768: {
          slidesPerView: 3,
          direction: "vertical",
        },
  
    },
  });