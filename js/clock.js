$(document).ready(function(){

    var now = new Date;
    
    var hr = now.getHours(),
        min = now.getMinutes();

    function blink(){
        $('.clock .blink').removeClass('on');
    }

    function blinker(){
        $('.clock .blink').addClass('on');
        setTimeout(blink, 500);
    }
    
    function clock(){
        var now = new Date,
            hr = now.getHours(),
            min = now.getMinutes();

            if(hr>12){
                $('.day').text('PM');
                hr -= 12;
            }
        
            if(hr<10){
                hr = '0' + hr;
            }
        
            if(min<10){
                min = '0' + min
            }
        
            $('.hr').text(hr);
            $('.min').text(min);
            
    }

    clock();
    setInterval(clock,500);
    setInterval(blinker,1000)



});//opening