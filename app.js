$(function(){

  var hoverText = '<br />';

  $(".link > a").on("mouseover", function(){
    var linkID = $(this)[0].id;

    $(".hoverText").promise().done(function(){
      switch (linkID) {
        case 'mailLink':
          hoverText = 'Email';
          break;
        case 'gitLink':
          hoverText = 'GitHub';
          break;
        case 'inLink':
          hoverText = 'LinkedIn';
          break;
        case 'dashboardLink':
          hoverText = 'Daily Dashboard';
          break;
        case 'busLink':
          hoverText = 'MSP Transit Locator';
          break;
        default:
          hoverText = '<br />';
      }

      $(".hoverText").html(hoverText).animate({opacity: 1}, 200);
    });
  });

  $(".link > a").on("mouseleave", function(){
    $(".hoverText").animate({opacity:0}, 200);

    $(".hoverText").promise().done(function(){
      hoverText = '<br />';
      $(".hoverText").html(hoverText);
    });
  });

  console.log('jquery loaded.');
});
