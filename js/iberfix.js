$('.carousel').carousel({
interval: 4000
})

new WOW().init();

// codigo adaptado de https://stackoverflow.com/questions/25369487/background-image-that-moves-when-you-scroll-down-the-page
var velocity = 0.3;
function update(){ 
var pos = $(window).scrollTop(); 
$('.carousel-item').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height();
    $(this).css('backgroundPosition', '50%' + Math.round(pos * velocity)+  'px'); 
   }); 
   };

 $(window).bind('scroll', update);