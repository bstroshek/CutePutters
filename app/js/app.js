(function($) {
    $(document).ready(function(){

        // HOME PAGE hero tabs
        $('.tabgroup > div').addClass('hide');
        $('.tabgroup > div:first-of-type').removeClass('hide');
        $('.tabs a').click(function(e){
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').addClass('hide');
            $(target).removeClass('hide');

        });





        // HOME PAGE hero sliders

        $('.js-tour-slider').slick({
            infinite: true,
            slidesToShow: 1,
            dots: false,
            appendArrows: $('.js-tour-slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });

        $('.js-classic-slider').slick({
            infinite: true,
            slidesToShow: 1,
            dots: false,
            appendArrows: $('.js-classic-slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });

        $('.js-rx-slider').slick({
            infinite: true,
            slidesToShow: 1,
            dots: false,
            appendArrows: $('.js-rx-slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });




    });

})(jQuery);




