$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
       $('#sticky-header').addClass('stickyCss');
    } else {
       $('#sticky-header').removeClass('stickyCss');
    }
});