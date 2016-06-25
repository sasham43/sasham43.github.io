$(function(){

  var hoverText = '';

  $(".link > a").on("mouseover", function(){
    var linkID = $(this)[0].id;

    switch (linkID) {
      case 'mailLink':
        hoverText = 'EMAIL';
        break;
      case 'gitLink':
        hoverText = 'GITHUB';
        break;
      case 'inLink':
        hoverText = 'LinkedIn';
        break;
      default:
        hoverText = '<br />';
    }

    $(".hoverText").html(hoverText);
    console.log('self hoverText:', linkID, hoverText);
  });

  $(".link > a").on("mouseleave", function(){
    hoverText = '<br />';
    $(".hoverText").html(hoverText);
  });

  console.log('jquery loaded.');
});
