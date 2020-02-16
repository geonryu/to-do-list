$(document).ready(function(){
    

    var a;
    var userList = 'userList';
    var strgCls = localStorage.getItem(userList);
    
    function readAttr(){
        cls = [];
        $('.inner span').each(function(){
            a = $(this).attr('class');
            cls.push(a);
        })
    }

    function saveAttr(){
        readAttr();
        localStorage.setItem(userList,cls)
    }

    function loadAttr(){
        strgCls = strgCls.split(',');
        
        $('.checklist .inner span').each(function(){
            var i = $(this).index();
            $(this).removeClass().addClass(strgCls[i]);
        });
    }

    var indicate;
    
    $(document).on('click','.checklist .inner span',function(){
    //$('.checklist .inner span').on('click',function(){

        indicate = $(this).attr('class');

        if(indicate == 'def'){
            $(this).removeClass('def');
            $(this).addClass('focus-on');
        }else if(indicate == 'focus-on'){
            $(this).removeClass('focus-on');
            $(this).addClass('done');
        }else if(indicate == 'done'){
            $(this).removeClass('done');
            $(this).addClass('def');
        }

        saveAttr();

    });

    if(strgCls !== null){

        loadAttr();
    }else{
        strgCls = [];
    }
    


})//