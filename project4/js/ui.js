$(document).ready(function(){
  
    eTree();
 

  

});

  
//tree
function eTree() {
    $(".depth > .btn_fold").click(function () {
        var parent = $(this).parent();
            children = $(this).siblings('.children');

        $(this).toggleClass('open');
        children.slideToggle();
    })
}


