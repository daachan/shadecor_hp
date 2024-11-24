$(function($){
    //scroll setting
    $(window).on('load scroll', function(){
        
        var horizonAnime = 'horizon-line-anime';
        var horizonLine = $('.horizon-line-anime');
        var verticalAnime = 'vertical-line-anime';
        var verticalLine = $('.vertical-line-anime');
        var fadeInAnime = 'fadeIn'
        var fadeIn = $('.fadeIn');
        var workSlide = $('.works-slide')

        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        var checkOpen = $('header-menu');
        
        horizonLine.each(function(){
            var boxOffset = $(this).offset().top;

            if (scrollPos > boxOffset - wh + 100){
                $(this).removeClass(horizonAnime);
            }
        });

        verticalLine.each(function(){
            var boxOffset = $(this).offset().top;

            if (scrollPos > boxOffset - wh + 100){
                $(this).removeClass(verticalAnime);
            }
        });
        
        fadeIn.each(function(){
            var boxOffset = $(this).offset().top;

            if (scrollPos > boxOffset - wh + 200){
                var newMarginTop = topIni + scrollPos;

            }
        });
    });

    $('#hamburger').on('click', function() {
        $('#hamburger').toggleClass("open");
        $('.header-menu').toggleClass("open");
    });
});
