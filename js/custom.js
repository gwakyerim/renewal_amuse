$(function(){
  /* Include html Files */
  $('.header-include').load('../include/header.html');
  $('.gnb-include').load('../include/gnb.html');
  
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.mobile-nav').toggleClass('active');
  })
  $('.main-content, .login-content, .item-list-content, .notice-content, .product-detail-content').click(function(){
    $('.mobile-nav').removeClass('active');
  })
  
  /* Slick Slider */
  $('.main-banner-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.amuse-pick-slider-inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        }
      }
    ]
  });
  $('.best-review-slider-inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });
  $('.suggestion-items-inner').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        }
      ]
  })
})
