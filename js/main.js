$(document).ready(function(){
    


    $('.about_btn').mouseenter(function(){
        $(this).children().addClass('active');
        $(this).addClass('active');
    });
    $('.about_btn').mouseleave(function(){
        $(this).children().removeClass('active');
        $(this).removeClass('active');
    });

    $('.portfolio_btn').mouseenter(function(){
        $(this).children().addClass('active');
        $(this).addClass('active');
    });
    $('.portfolio_btn').mouseleave(function(){
        $(this).children().removeClass('active');
        $(this).removeClass('active');
    });

    $('.contact_btn').mouseenter(function(){
        $(this).children().addClass('active');
        $(this).addClass('active');
    });
    $('.contact_btn').mouseleave(function(){
        $(this).children().removeClass('active');
        $(this).removeClass('active');
    });

    $('.contact_btn').click(function(){
        $('.contact_txt').addClass('active');
        $('.contact_bg').addClass('active');
    });

    $('.close').click(function(){
        $('.contact_txt').removeClass('active');
        $('.contact_bg').removeClass('active');
    });

});