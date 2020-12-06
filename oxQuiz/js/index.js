$(document).ready(() => {

    $('.contents li:not(:first-child)').on("click", (event) => {
        $('.contents li').removeClass('selected');
        $(event.currentTarget).addClass('selected');
        
     }); 
  
   
});


 