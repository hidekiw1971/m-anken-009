jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  const swiper = new Swiper(".swiper", {
    effect: "fade",
    loop: false,
    speed: 2000,
    autoplay: {
      delay: 4000,
    },
  });
});
