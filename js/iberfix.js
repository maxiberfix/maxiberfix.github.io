// intervalo carousel
$('.carousel').carousel({
  interval: 3000
})

// md animations
new WOW().init();

// codigo adaptado de https://stackoverflow.com/questions/25369487/background-image-that-moves-when-you-scroll-down-the-page
// efecto parallax carousel
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


 // cambio de lenguaje
// $.getJSON('/language/es.json', function(data){
//   console.log("success");
// })
// .done(function() {
//   console.log( "second success" );
// })
// .fail(function(data,status,error) {
//   console.log( "error");
//   console.log(status);
//   console.log(error);
// })
// .always(function() {
//   console.log( "complete" );
// });


function sendEmail(){
  Email.send({
// Mail para la empresa
    Host : "smtp.gmail.com",
    Username : "iberfixsa@gmail.com",
    Password : "dtozfrvhciavtnqz",
    To : 'iberfixsa@gmail.com', // este seria el correo de la persona en la empresa que se encarga de esto
    From : "iberfixsa@gmail.com",
    FromName: document.getElementById("name").value,
    ReplyAddress: document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : "Sender: "+document.getElementById("name").value+"<br>Company: "+document.getElementById("company").value+"<br><br>Message: "+document.getElementById("message").value
  }).then(
    message => alert(message)
  );
  Email.send({
  // Copia al usuario de su mail
      Host : "smtp.gmail.com",
      Username : "iberfixsa@gmail.com",
      Password : "dtozfrvhciavtnqz",
      To: document.getElementById("email").value,
      From : "iberfixsa@gmail.com",
      FromName: "IBERFIX S.A. <no reply>",
      Subject : ["Copia de su mail enviado a IBERFIX SA", document.getElementById("subject").value].join("; "),
      Body : ["No responda este mail.<br>" + "Esta es una copia de su email:<br><br>", document.getElementById("message").value].join("\r\n")
});
  list = document.getElementsByClassName("bloque_texto")
  for (let item of list) {
    item.value = "";
  }
};
var lang = null;
function setLang( lan){
    if (lan === "es"){
      $file = '/language/es.json';
      document.getElementById("lang_button").setAttribute("data-lang", "es");
    // por defecto en ingles  
    } else {
      $file = '/language/en.json';
      document.getElementById("lang_button").setAttribute("data-lang", "en");

      // si viene en ingles cambiamos la bandera, sino por defecto es la banderita de espanol
      $en = document.getElementById("lang_en").className;
      $es = document.getElementById("lang_es").className;
      document.getElementById("lang_en").setAttribute("class",$es);
      document.getElementById("lang_es").setAttribute("class",$en);
      var el1 = document.getElementById("lang_en"),
      el2 = document.getElementById("lang_es");
      el1.id ="lang_es";
      el2.id ="lang_en";

    }
    $.getJSON($file, function(data){
      for (const [key, value] of Object.entries(data)) {
        try {
          document.getElementById(key).innerHTML = value;
          // console.log(k,v)
        } catch(e) {
          // pass
        }
      }
      // $en = document.getElementById("lang_en").className;
      // $es = document.getElementById("lang_es").className;
      // document.getElementById("lang_en").setAttribute("class",$es);
      // document.getElementById("lang_es").setAttribute("class",$en);
      // console.log(key, value);
    }
    )
    lang = document.getElementById("lang_button").getAttribute("data-lang");
}
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
      try {
        document.getElementById(key).innerHTML = value;
        // console.log(k,v)
      } catch(e) {
        // pass
      }
    }
    // change classes and ids
    $en = document.getElementById("lang_en").className;
    $es = document.getElementById("lang_es").className;
    document.getElementById("lang_en").setAttribute("class",$es);
    document.getElementById("lang_es").setAttribute("class",$en);
    var el1 = document.getElementById("lang_en"),
    el2 = document.getElementById("lang_es");
    el1.id ="lang_es";
    el2.id ="lang_en";
    // console.log(key, value);
  }
  )
  lang = document.getElementById("lang_button").getAttribute("data-lang");
};
// enviar info por html
function send_lang(link, section){
  let hrefLink;
  if(section==undefined){
    hrefLink = link+"?lang="+lang;
  } else {
    hrefLink = link+"?lang="+lang+section;
  }
  window.location.href = hrefLink;
  return;
}

// leer desde el otro
function set_lang(){
urlParam = new URLSearchParams(window.location.search)
lan = urlParam.get("lang")
setLang(lan)
}
