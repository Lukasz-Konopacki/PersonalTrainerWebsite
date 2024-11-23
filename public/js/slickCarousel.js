 $('.slick-carousel').slick({
     dots: true,
     infinite: true,
     slidesToShow: 2,
     slidesToScroll: 1,
     responsive: [{
         breakpoint: 1024,
         settings: {
             autoplay: true,
             autoplaySpeed: 2000,
             arrows: false,
             slidesToShow: 1,
             slidesToScroll: 1,
         }
     }]
 });