// intervalo carousel
$('.carousel').carousel({
  interval: 4000
})

// md animations
new WOW().init();

// codigo adaptado de https://stackoverflow.com/questions/25369487/background-image-that-moves-when-you-scroll-down-the-page
// efecto parallax carousel
var velocity = 0.2;
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


 // cambio de lenguaje
$.getJSON('/language/es.json', function(data){
  console.log("success");
})
.done(function() {
  console.log( "second success" );
})
.fail(function(data,status,error) {
  console.log( "error");
  console.log(status);
  console.log(error);
})
.always(function() {
  console.log( "complete" );
});

function toggleLang(){
  $actual_lang = document.getElementById("lang_button").getAttribute("data-lang");

  if ($actual_lang === "en"){
    $file = '/language/es.json';
    document.getElementById("lang_button").setAttribute("data-lang", "es");
  } else {
    $file = '/language/en.json';
    document.getElementById("lang_button").setAttribute("data-lang", "en");
  }
  $.getJSON($file, function(data){
    for (const [key, value] of Object.entries(data)) {
      document.getElementById(key).innerHTML = value;
      // console.log(k,v)
    }
    $en = document.getElementById("lang_en").className;
    $es = document.getElementById("lang_es").className;
    document.getElementById("lang_en").setAttribute("class",$es);
    document.getElementById("lang_es").setAttribute("class",$en);
    // console.log(key, value);
    
  }
  )
}