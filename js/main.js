window.onload = () => {
  //  mainvisual
  const mainvisualSwiper = new Swiper(".mainvisual", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //section-news.
  const newsTitleSwiper = new Swiper(".news-title", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const newsThumbnailSwiper = new Swiper(".news-thumbnail", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: newsTitleSwiper,
    },
  });

  //  software
  var softwareSwiper = new Swiper(".software-slide", {
    slidesPerView: "auto", // 또는 적절한 숫자 (e.g., 3)
    spaceBetween: 20, // 슬라이드 사이의 간격 (필요시 설정)
    centeredSlides: true, // 센터 모드 활성화
    loop: true, // 루프 모드 활성화
  });
};
