(function($) {
    $(document).ready(function(){



        // Open Main nav on hamburger click
        $('.hamburger').on('click', function (e) {
            e.preventDefault();
            $('.hamburger').toggleClass('active');
            $('#js-nav').toggleClass('active');
            $('body').toggleClass('fixed');

        });

        // Back Main nav on window resize
        $(window).bind("resize", function () {
            if ($(this).width() >= 992) {
                $('#js-nav').removeClass('active');
                $('.hamburger').removeClass('active');
                $('body').removeClass('fixed')
            }
        }).trigger('resize');






        // HOME PAGE hero tabs
        $('.tabgroup > div').addClass('hide');
        $('.tabgroup > div:nth-of-type(2)').removeClass('hide');
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





        // HOME PAGE Cure section tabs

        $('.cure-tabgroup > div').hide();
        $('.cure-tabgroup > div:nth-of-type(2)').show();
        $('.cure-tabs a').click(function(e){
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#'+$this.parents('.cure-tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();

        });


        // HOME PAGE Favorite section slider
        $('.favorite__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            appendArrows: $('.favorite-slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });



        // COLLECTION PAGE hero tabs


        $('.collection-tabgroup > div').hide();
        $('.collection-tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();

        });





    });

})(jQuery);




