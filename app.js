$(function(){

  // background change

  $(".container").on("mouseover", function(){
    $("#shuffleButton").css({opacity: 1});
  });

  $(".container").on("mouseleave", function(){
    $("#shuffleButton").css({opacity: 0});
  });

  var randomTitle = 'Developer';

  var randomNumber = function(min, max) {
  	return Math.floor(Math.random() * (1 + max - min) + min);
  };

  var getAPOD = function(){
    var randomDateChance = chance.birthday({ year: chance.year({ min: 2014, max: 2015 }) });
    var randomDate = moment(randomDateChance).format('YYYY-MM-DD');

    

    $(".subtitle").html(randomTitle);

    var apodBase = 'https://api.nasa.gov/planetary/apod?hd=true&date=' + randomDate + '&api_key=';
    var apodKey = 'vRkyBLgP6BandXIDG4D5Fr0Ppub3dUBToDPyotMR'; // get your own key at https://api.nasa.gov/index.html#apply-for-an-api-key
    var apodData = {};

    var $ajax = $.ajax({
      method: 'GET',
      url: apodBase + apodKey
    });

    $ajax.done(function(data){
      console.log('ajax data:', data);
      apodData = data;
      $(".background").css({
        background: "url(" + apodData.hdurl + ")",
        backgroundSize: "cover"
      });
    });
  };

  $("#shuffleButton").on('click', getAPOD);
  // getAPOD();

  // hover text

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
        case 'nileLink':
          hoverText = 'Nile of the North';
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
