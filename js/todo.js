$(document).ready(function(){

    var todoInput = $('.checklist .question>input').get(0); // 선택자 잡기
        var whatToDo; // 입력값 저장할 곳
        var ToDoLists = []; // 할 일 목록이 저장될 공간!!!
        var userToDoList = 'userToDoList'; //로컬스토리지 키의 이름이 될 문자열 저장하기
        
        console.log(ToDoLists, whatToDo);

        //입력값 받기
        function values(){
            whatToDo = todoInput.value;
            ToDoLists.push(whatToDo);
            localStorage.setItem(userToDoList,ToDoLists)
        }

        //리스트 출력하기
        function printList(){
            var getList = localStorage.getItem(userToDoList);
                getList = getList.split(',');
            
            var a = getList.length;
                a -= 1

            $('.checklist .inner').append('<span class="def">'+getList[a]+'</span>')
            
        }

        //리스트 불러오기   
        function loadList(){
            ToDoLists = localStorage.getItem(userToDoList);
            
            if(ToDoLists !== null){
                
                    ToDoLists = ToDoLists.split(',');
                    
                for(i=0; i<ToDoLists.length; i++){
                    $('.checklist .inner').append('<span class="def">'+ToDoLists[i]+'</span>');
                }
                
            }else{

                ToDoLists = [];

            }
        }

        loadList();

        $('.checklist .question').on('submit',function(e){
            e.preventDefault();
            values();
            printList();
        });

})//ready