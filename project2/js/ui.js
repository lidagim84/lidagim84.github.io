$(document).ready(function(){
    eLnb();
    eTab();
    eDropDown();


 

  

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

//dropdown
function eDropDown() {
    $(".eDropDown").click(function () {
        var parent = $(this).parent();

        if (parent.hasClass('selected')) {
            parent.removeClass("selected");
        }else {
            parent.siblings().removeClass("selected")
            parent.addClass("selected");
        }
    })
}


// ※ 개발작업시 datepicker 플러그인 수정요청: 최상위에 mCalendar 클래스를 추가해주세요.
$( function() {
    //한글설정
    $.datepicker.regional['ko'] = {
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        currentText: '오늘',
        monthNames: ['1월','2월','3월','4월','5월','6월',
            '7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월',
            '7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        weekHeader: 'Wk',
        dateFormat: 'mm.dd', //'yy.mm.dd'
        firstDay: 1,
        isRTL: false,
        duration:200,
        showAnim:'show',
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ko']);
    $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true
    });
    $('.type_cal .form_cal').on('click', function() {
        $(this).find('.datepicker').datepicker('show');
    });

} );

