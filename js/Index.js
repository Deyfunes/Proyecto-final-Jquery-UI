//js Document
//Checkers Game with Jquery UI

$(document).ready(function(){
    
    //fichas rojas
     $('p[id="fr"]').draggable({
         containment: '#tablero',
    start: function(event,ui){  
            $(this).css('box-shadow','4px 6px 6px black');
            $(this).css('z-index','2');
        },
    stop: function(event, ui){
        $(this).css('box-shadow','2px 3px 3px black');
            $(this).css('z-index','1');     
    }
    });

     $("#white").droppable({
        
        });

        
    //fichas azules
     $('p[id="fb"]').draggable({
         containment: '#tablero',
         drag: function(event, ui){
            $(this).css('box-shadow','4px 6px 6px black');
            $(this).css('z-index','2');
         },
         stop: function(event,ui){
            $(this).css('box-shadow','2px 3px 3px black');
            $(this).css('z-index','1');
         }
     });
     
     $('#tablero').droppable({
        
});
});