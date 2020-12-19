// $(document).ready(() => {

//     $('.contents li:not(:first-child)').on("click", (event) => {
//         $('.contents li').removeClass('selected');
//         $(event.currentTarget).addClass('selected');
       
//         $('input:checkbox').each(function(index){
//             if(this.checked){
//                 $(this).prop("checked", true);
//             } else{
//                 $('input:checkbox').eq(index).prop("checked", false);
//             }

            
//         });

       
//      }); 
  
   
// });



$(document).ready(() => {

    $('.contents li:not(:first-child)').on("click", (event) => {
        $('.contents li').removeClass('selected');
        $(event.currentTarget).addClass('selected');
        checkBoxClickEvent($(event.currentTarget).children('input:checkbox')[0]);
     }); 

     $('input:checkbox').on("click", (event) => {
        checkBoxClickEvent(event.currentTarget);
     });
     
     function checkBoxClickEvent(target) {
        $('input:checkbox').each(function(index){
            if(target == this) {
                $(this).prop("checked", true);
            } else{
                $('input:checkbox').eq(index).prop("checked", false);
            }
        });
     }

     
  
   
});
 