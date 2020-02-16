$(document).ready(function(){

    var active;

    $('.checklist .del').on('click', function(){
        $(this).animate({
            'width' : 450,
        },800,'easeOutElastic',function(){
            $(this).addClass('active');
            $('.inner span').attr('id','active')
            //<i class="fas fa-minus"></i>
        });//ani
    })//e

});//op