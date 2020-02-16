$(document).ready(function(){

    $('.checklist .ico li>i').on('click', function(){
        $(this).siblings('div').show();
        $(this).parent().siblings().find('.option').hide();
    })

    $('.checklist .ico li .close').on('click', function(){
        $(this).parent('div').hide();
    })

    var txtCol;
    var impCol;
    var doneCol;

    $('.checklist .ico li .txt-col li').on('click', function(){
        $('.inner').find('span').css('color',col);
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('.checklist .ico li .imp-col li').on('click', function(){
        $('.inner').find('span.focus-on').css('backgroundColor',col);
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('.checklist .ico li .done-col li').on('click', function(){
        $('.inner').find('span.done').css('backgroundColor',col);
        $(this).addClass('on').siblings().removeClass('on');
    })

})