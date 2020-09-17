(function($) {
    $(document).ready(function(){

        $('.hero-slider').slick({
            infinite: true,
            slidesToShow: 3,
            appendArrows: $('.hero-slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });


    });

})(jQuery);




