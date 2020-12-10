$(document).ready(() => {

    $('.contents li:not(:first-child)').on("click", (event) => {
        $('.contents li').removeClass('selected');
        $(event.currentTarget).addClass('selected');
       
        $('input:checkbox').each(function(index){
            if(this.checked){
                $(this).prop("checked", true);
            } else{
                $('input:checkbox').eq(index).prop("checked", false);
            }

            
        });

       
     }); 
  
   
});


 