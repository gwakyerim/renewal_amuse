$(function(){
  /* Include html Files */
  $('.header-include').load('../include/header.html');
  $('.gnb-include').load('../include/gnb.html');
  /* Slick Slider */
  $('.main-wrapper').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
  });
  $('.suggest-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					autoplaySpeed: 5000,
				}
			},
			{
				breakpoint:	1023,
				settings: {
					slidesToShow: 2,
					autoplaySpeed: 5000,
				}
			}
		]
  });
	$('.ranking-slider-wrapper').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
		dots: false,
		arrows: false,
  });
	
	$('.suggestion-items').slick({
		slidesToShow: 5,
    autoplay: true,
    responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					autoplaySpeed: 5000,
				}
			},
			{
				breakpoint:	1023,
				settings: {
					slidesToShow: 3,
					autoplaySpeed: 5000,
				}
			}
		]
  });
})
