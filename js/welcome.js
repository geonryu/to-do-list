$(document).ready(function(){
    var input = $('.name>input').get(0);
    var getInfo;
    var userName = 'userName';
    var strg = localStorage.getItem(userName);
    
    
    $('.name').on('submit', function(e){
        e.preventDefault();
        
            getInfo = input.value;
        
        $('.name').fadeOut();
        $('h2').fadeIn(); 
        
            localStorage.setItem(userName,getInfo);
        
            strg = localStorage.getItem(userName);
        
        $('h2').text('안녕하세요. '+strg+'님!');
        
    })
    
    
    if(strg === null){
        $('.name').fadeIn();
        $('h2').fadeOut();
    }else{
        $('.name').hide();
        $('h2').fadeIn().text('안녕하세요. '+strg+'님!');
    }
        





});//opeing