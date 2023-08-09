$(function(){
    $('.menu-desk').click(function(){
        var devwidth = $(window).width();
        
        if(devwidth <= 768){
        $('.menu-mobile').css('display','inline-block');
        setTimeout(function(){
            $('.menu-mobile').css('display','none');
        }, 3000);
    }});
    $('.categorias li').each(function(){
        $(this).click(function(){
            $('li').removeClass('selected');
            $(this).addClass('selected');
        });
    }); 
           
})