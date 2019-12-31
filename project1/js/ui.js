$( document ).ready(function() {

    dialog();
    gnb(3);
    
    $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false
    });

    $('.defaultTab').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = jQuery(this).find('a');
    
        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = jQuery($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');
    
        $content = $($active[0].hash);
    
        // Hide the remaining content
        $links.not($active).each(function () {
            jQuery(this.hash).hide();
        });
    
        // Bind the click event handler
        jQuery(this).on('click', 'a', function(e){
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();
    
            // Update the variables with the new link and content
            $active = jQuery(this);
            $content = jQuery(this.hash);
    
            // Make the tab active.
            $active.addClass('active');
            $content.show();
    
            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });

});


function dialog() {

    var dialogBox = $('.layer_pf'),
        dialogBoxInner = $('.layer_pf > .inner'),
		dialogTrigger = $('.dialog__trigger'),
		dialogClose = $('layer_pf .btn_close');

	// Open the dialog
	dialogTrigger.on('click', function(e) {
		dialogBox.toggleClass('active');
		e.stopPropagation()
	});

	// Close the dialog - click close button
	dialogClose.on('click', function() {
		dialogBox.removeClass('active');
	});

	// Close the dialog - press escape key // key#27
	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			dialogBox.removeClass('active');
		}
	});

	// Close dialog - click outside
	$(document).on("click", function(e) {
		if ($(e.target).is(dialogBoxInner) === false) {
			dialogBox.removeClass("active");
		}
	});

};

function gnb(num) {
    var gnbList = ['company','business','portfolio','news'],
        onPage = $('#header .list_gnb li');


onPage.removeClass('on');
// onPage[num].addClass('on');

alert(onPage[num]);
    
}