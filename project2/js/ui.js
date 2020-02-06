$(document).ready(function(){
    eLnb();


 

  

});

  
//lnb
function eLnb() {
    //왼쪽 대메뉴
    $(".eFold").click(function () {
        var parent = $(this).parent();
        var sub = $('.children li');

        if (parent.hasClass('selected')) {
            parent.removeClass("selected");
        }else {
            parent.siblings().removeClass("selected")
            parent.addClass("selected");
        }
    })
}



