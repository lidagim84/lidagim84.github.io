$(document).ready(function(){
    eLnb();
    eTab();


 

  

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

//tab
function eTab() {
    $('.eTab').each(function(){
        var $selected, $content, $links = jQuery(this).find('a');

        var $selected = jQuery($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $selected.parent('li').addClass('selected');

        $content = $($selected[0].hash);

        // Hide the remaining content
        $links.not($selected).each(function () {
            jQuery(this.hash).hide();
        });

        jQuery(this).on('click', 'a', function(e){
            $selected.parent('li').removeClass('selected');
            $content.hide();

            $selected = jQuery(this);
            $content = jQuery(this.hash);

            $selected.parent('li').addClass('selected');
            $content.show();

            e.preventDefault();
        });
    });
}


