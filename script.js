
// caixa de diálogo
$( function() {
 $( "#dialog" ).dialog({
  autoOpen: false,
  show: {
   effect: "shake",
   duration: 1000
 },
 hide: {
   effect: "explode",
   duration: 1000
 }
});

 $( "#opener" ).on( "click", function() {
  $( "#dialog" ).dialog( "open" );
});
} );



//fancybox
$('[data-fancybox]').fancybox({
 protect: true
});
$.fancybox.defaults.animationEffect = "zoom-in-out";



//marcador do menu
$( function() {
  
  var path = window.location.pathname.split("/").pop();
  if ( path == '' ) {
    path = 'index.html';
  }
  var target = $('nav a[href="'+path+'"]'); 
  target.addClass('active');
});



// animacao de scroll

$(function() {
  $('.scroll0').on('click', function(e) {

    $('html, body').animate({ scrollTop: $("#hero").offset().top}, 500);
  });
});

$(function() {
  $('.scroll1').on('click', function(e) {

    $('html, body').animate({ scrollTop: $("#about").offset().top}, 500);
  });
});

$(function() {
  $('.scroll2').on('click', function(e) {

    $('html, body').animate({ scrollTop: $("#services").offset().top}, 500);
  });
});


//Codigo do botão.

$(function() {
  var subir = $(".btn");
  subir.fadeOut();
  $(window).scroll(function(){
    var posicao = $(this).scrollTop();
    if(posicao >= 999){
      subir.fadeIn();
    }else{
      subir.fadeOut();
    }
  })

  subir.on("click", function(){
    $("html,body").animate({scrollTop: 0}, 500);
  })
});
