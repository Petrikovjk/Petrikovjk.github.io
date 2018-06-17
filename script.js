
$( function() {
   $( "#dialog1" ).dialog({
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
      $( "#dialog1" ).dialog( "open" );
   });
} );



//fancybox
$('[data-fancybox]').fancybox({
   protect: true
});
$.fancybox.defaults.animationEffect = "zoom-in-out";



//marcador do menu
$( function() {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();
  
  // Account for home page with empty path
  if ( path == '' ) {
    path = 'index.html';
  }
      
  var target = $('nav a[href="'+path+'"]'); 
  // Add active class to target link
  target.addClass('active');
});




// aqui começa o negocio de download
// $( function() {
//     var progressTimer,
//       progressbar = $( "#progressbar" ),
//       progressLabel = $( ".progress-label" ),
//       dialogButtons = [{
//         text: "Cancel Download",
//         click: closeDownload
//       }],
//       dialog = $( "#dialog" ).dialog({
//         autoOpen: false,
//         closeOnEscape: false,
//         resizable: false,
//         buttons: dialogButtons,
//         open: function() {
//           progressTimer = setTimeout( progress, 2000 );
//         },
//         beforeClose: function() {
//           downloadButton.button( "option", {
//             disabled: false,
//             label: "Start Download"
//           });
//         }
//       }),
//       downloadButton = $( "#downloadButton" )
//         .button()
//         .on( "click", function() {
//           $( this ).button( "option", {
//             disabled: true,
//             label: "Downloading..."
//           });
//           dialog.dialog( "open" );
//         });
 
//     progressbar.progressbar({
//       value: false,
//       change: function() {
//         progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
//       },
//       complete: function() {
//         progressLabel.text( "Complete!" );
//         dialog.dialog( "option", "buttons", [{
//           text: "Close",
//           click: closeDownload
//         }]);
//         $(".ui-dialog button").last().trigger( "focus" );
//       }
//     });
 
//     function progress() {
//       var val = progressbar.progressbar( "value" ) || 0;
 
//       progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
 
//       if ( val <= 99 ) {
//         progressTimer = setTimeout( progress, 50 );
//       }
//     }
 
//     function closeDownload() {
//       clearTimeout( progressTimer );
//       dialog
//         .dialog( "option", "buttons", dialogButtons )
//         .dialog( "close" );
//       progressbar.progressbar( "value", false );
//       progressLabel
//         .text( "Starting download..." );
//       downloadButton.trigger( "focus" );
//     }
//   } );

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


$(function() {
   var link = $(".menu li a");
      var link = $(".btn");

      link.on("click", function(){
         alert("ainda vo implementar. calma ai.");
         var seletor = $(this).attr("href");
         var posicao = $(seletor).offset().top;
          $('html, body').animate({ scrollTop: posicao })


      })
});
