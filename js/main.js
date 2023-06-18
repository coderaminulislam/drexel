( function ( $ ) {
    'use strict';

    $('#mobile__menu').meanmenu({
        meanMenuContainer: '.mobile__menu',
        meanScreenWidth: "991"
    });

   //sticky menu
   $(window).on('scroll', function(){
    var scroll=$(window).scrollTop();
    if(scroll<1){
        $(".sticky").removeClass("scroll-header");
    }
    else{
        $(".sticky").addClass("scroll-header");
    }
   });

   //nice select
   $('select').niceSelect();
   
   //hero slider

   $('.slider__active').owlCarousel({
    loop:true,
    navText:['Back', 'Next'],
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:1,
            nav:true
        },
        768:{
            items:1,
            nav:true
        },
        992:{
            items:1,
            nav:true,
            loop:true
        },
        1200:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

//prodcut slider

$('.product__slider').owlCarousel({
    loop:true,
    navText:['Back', 'Next'],
    autoplay:true,
    margin:30,
    slideItem:1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
     
        576:{
            items:2,
            nav:false
        },
        768:{
            items:3,
            nav:true
        },
        992:{
            items:4,
            nav:true
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
});


//brand slider
$('.brand__active').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    margin:30,
    slideItem:1,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:false
        },
     
        576:{
            items:3,
            nav:false
        },
        768:{
            items:4,
            nav:true
        },
        992:{
            items:6,
            nav:true
        },
        1200:{
            items:6,
            nav:true,
            loop:false
        }
    }
});


} ( jQuery ) );