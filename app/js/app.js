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



        // HOME PAGE SLIDER

        $('.hero-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.hero-logos',
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
            appendArrows: $('.hero-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });
        $('.hero-logos').slick({
            slidesToShow: 3,
            slidesToScroll: 0,
            autoplay: true,
            autoplaySpeed: 3000,
            asNavFor: '.hero-slider',
            centerPadding: '0px',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1660,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1185,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1160,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });



        // HOME PAGE Cure section tabs

        $('.cure-tabgroup > div').hide();
        $('.cure-tabgroup > div:nth-of-type(1)').show();
        $('.cure-tabs a').hover(function(e){
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

        // HOME PAGE Cure section mobile slider
        $('.cure-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            appendArrows: $('.cure-slider-arrows'),
            prevArrow:'<span class="cure-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="cure-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });


        // HOME PAGE Favorite section slider
        $('.favorite__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            appendArrows: $('.favorite-slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: false
                    }
                }
            ]
        });

        // HOME PAGE Series section mobile slider
        $('.series__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            appendArrows: $('.series__slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });

        $('.classic-series__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            appendArrows: $('.classic-series__slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });

        $('.rx-series__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            appendArrows: $('.rx-series__slider-arrows'),
            prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
            nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
        });



        // COLLECTION PAGE hero scroll to section

        $(".js-scroll").on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: ($($(this).attr("href")).offset().top + 80)
            }, 1000);
        });

        if ($(window.location.hash).length > 1) {
            $("html, body").animate({
                scrollTop: $(window.location.hash).offset().top
            }, 1000);
        }


        // PRODUCT PAGE Product slider

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            asNavFor: '.slider-nav',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                        arrows: true,
                        appendArrows: $('.product-slider__arrows'),
                        prevArrow:'<span class="hero-slider-left"><img src="images/dest/hero-slider-left.png" alt="icon" width="50" height="100"></span>',
                        nextArrow:'<span class="hero-slider-right"><img src="images/dest/hero-slider-right.png" alt="icon" width="50" height="100"></span>'
                    }
                }
            ]
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical:true,
            arrows: false,
            asNavFor: '.slider-for',
            dots: false,
            focusOnSelect: true,
            adaptiveHeight: true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        vertical: false,
                        verticalSwiping: false
                    }
                }
            ]
        });







        // PRODUCT PAGE Reviews section - show more reviews

        $('.read-reviews__item:lt(3)').show();
        $('.rev-less').hide();
        var items =  4;
        var shown =  3;
        $('.rev-more').click(function (e) {
            e.preventDefault();
            $('.rev-less').show();
            shown = $('.read-reviews__item:visible').length+4;
            if(shown> items) {
                $('.read-reviews__item:lt('+shown+')').show(300);
            } else {
                $('.read-reviews__item:lt('+items+')').show(300);
                $('.rev-more').hide();
            }
        });
        $('.rev-less').click(function (e) {
            e.preventDefault();
            $('.read-reviews__item').not(':lt(3)').hide(300);
            $('.rev-more').show();
            $('.rev-less').hide();
        });



        // PRODUCT PAGE Reviews section - show more images
        if ($(window).width() > 576) {
            $('.images-box li:lt(6)').show();
            $('.less').hide();
            var items =  27;
            var shown =  6;
            $('.more').click(function (e) {
                e.preventDefault();
                shown = $('.images-box li:visible').length+6;
                if(shown< items) {
                    $('.images-box li:lt('+shown+')').show(300);
                } else {
                    $('.images-box li:lt('+items+')').show(300);
                    $('.more').hide();
                    $('.less').show();
                }
            });
            $('.less').click(function (e) {
                e.preventDefault();
                $('.images-box li').not(':lt(6)').hide(300);
                $('.more').show();
                $('.less').hide();
            });
        }

        if ($(window).width() < 576) {
            $('.images-box li:lt(3)').show();
            $('.less').hide();
            var items =  27;
            var shown =  3;
            $('.more').click(function (e) {
                e.preventDefault();
                shown = $('.images-box li:visible').length+7;
                $('#images-box').addClass('images-box-width');
                if(shown< items) {
                    $('.images-box li:lt('+shown+')').show(300);
                } else {
                    $('.images-box li:lt('+items+')').show(300);
                    $('.more').hide();
                    $('.less').show();
                }
            });
            $('.less').click(function (e) {
                e.preventDefault();
                $('.images-box li').not(':lt(3)').hide(300);
                $('.more').show();
                $('.less').hide();
            });

        }








        // PRODUCT PAGE fly-in
        $('.js-fly-action').on('click', function (e) {
            e.preventDefault();
            $('#js-fly-in').toggleClass('active');
            $('.js-fly-close').toggleClass('active');
            $('body').toggleClass('fixed');
        });
        // PRODUCT PAGE fly-in close
        $('.js-fly-close').on('click', function (e) {
            e.preventDefault();
            $(this).removeClass('active');
            $('#js-fly-in').removeClass('active');
            $('body').removeClass('fixed');
        });

        // PRODUCT PAGE Add to cart fly-in
        $('.js-add-to-cart').on('click', function (e) {
            e.preventDefault();
            $('#js-fly-in-cart').toggleClass('active');
            $('.fly-hamburger').toggleClass('active');
            $('body').toggleClass('fixed');
        });
        // PRODUCT PAGE Add to cart fly-in close
        $('.js-close').on('click', function (e) {
            e.preventDefault();
            $('#js-fly-in-cart').removeClass('active');
            $('.js-fly-close').removeClass('active');
            $('.js-close').toggleClass('active');
            $('#js-fly-in').removeClass('active');
            $('body').removeClass('fixed');
        });






    });

})(jQuery);




