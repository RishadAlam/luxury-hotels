$(function(){

    // Fixed Menu
    let nav =$('.navbar');
    let navTop = nav.offset().top;
    // alert (navTop);

    $(window).scroll(function(){
        let scrTop = $(window).scrollTop();
        
        if(navTop < scrTop){
            nav.addClass('fixed-menu');
        }else{
            nav.removeClass('fixed-menu');
        }
        // Back To Top Button

        if (scrTop > 200) {
            $(".back-top").fadeIn(500);
        } else {
            $(".back-top").fadeOut(500);
        }
    });

    $(".back-top").click(function () {
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          1000
        );
      });

    //   Scroll Button
    $(".scroll").click(function(){
        $("html,body").animate({
            scrollTop: 750,
        },1000);
    });

    // Banner Slider
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });
    // Testimonial Slider
    $('.testimonial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.testimonial-prev',
        nextArrow: '.testimonial-next',
    });

    $('.rooms-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });
});