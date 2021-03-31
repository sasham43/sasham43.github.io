$(function(){

  // preload background?
  var src = 'http://apod.nasa.gov/apod/image/1606/PelicanNorthAmerica_Etcheverry_3232.jpg';
  $(window).on("load", function(){
    $(".background").animate({opacity:1}, 200);
  });

  printASCII()

  // background change

  $(".container").on("mouseover", function(){
    $("#shuffleButton").css({opacity: 1});
    $("#infoButton").css({opacity: 1});
  });

  $(".container").on("mouseleave", function(){
    $("#shuffleButton").css({opacity: 0});
    $("#infoButton").css({opacity: 0});
  });

  var apodData = {};

  var getAPOD = function(){
    var randomDateChance = chance.birthday({ year: chance.year({ min: 2014, max: 2015 }) });
    var randomDate = moment(randomDateChance).format('YYYY-MM-DD');

    var apodBase = 'https://api.nasa.gov/planetary/apod?hd=true&date=' + randomDate + '&api_key=';
    var apodKey = 'vRkyBLgP6BandXIDG4D5Fr0Ppub3dUBToDPyotMR'; // get your own key at https://api.nasa.gov/index.html#apply-for-an-api-key


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

      $(window).on("load", function(){
        $(".background").animate({opacity:1});
      });

      $ajax.fail(function(){
        // console.log('failed');
      });

      var explanation;
      if(apodData.explanation){
        explanation = apodData.explanation;
      } else {
        explanation = "Here lie familiar shapes in unfamiliar locations. On the left is an emission nebula cataloged as NGC 7000, famous partly because it resembles our fair planet's continent of North America. The emission region to the right of the North America Nebula is IC 5070, also known for its suggestive outlines as the Pelican Nebula. Separated by a dark cloud of obscuring dust, the two bright nebulae are about 1,500 light-years away. At that distance, the 4 degree wide field of view spans 100 light-years. This spectacular cosmic portrait combines narrow band images to highlight bright ionization fronts with fine details of dark, dusty forms in silhouette. Emission from atomic hydrogen, sulfur, and oxygen is captured in the narrow band image in scientifically assigned colors. These nebulae can be seen with binoculars from a dark location.";
      }

      $("#explanation").html(explanation);
    });
  };

  $("#shuffleButton").on('click', getAPOD);
  // getAPOD();

  // background explanation

  $("#infoButton").on("click", function(){
    var explanation;
    if(apodData.explanation){
      explanation = apodData.explanation;
    } else {
      explanation = "Here lie familiar shapes in unfamiliar locations. On the left is an emission nebula cataloged as NGC 7000, famous partly because it resembles our fair planet's continent of North America. The emission region to the right of the North America Nebula is IC 5070, also known for its suggestive outlines as the Pelican Nebula. Separated by a dark cloud of obscuring dust, the two bright nebulae are about 1,500 light-years away. At that distance, the 4 degree wide field of view spans 100 light-years. This spectacular cosmic portrait combines narrow band images to highlight bright ionization fronts with fine details of dark, dusty forms in silhouette. Emission from atomic hydrogen, sulfur, and oxygen is captured in the narrow band image in scientifically assigned colors. These nebulae can be seen with binoculars from a dark location.";
    }
    $(".primary").toggle();
    $("#explanation").html(explanation).toggle();
  });

  $("#explanation").on("click", function(){
    $(".primary").toggle();
    $("#explanation").html(explanation).toggle();
  });

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
        case 'crumpLink':
          hoverText = 'Crump Cocktails'
          break;
        case 'metronomLink':
          hoverText = 'metronom'
          break;
        case 'resumeLink':
          hoverText = 'Resume'
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


function printASCII(){
    var art=`dHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHb
    HHP%%#%%%%%%%%%%%%%%%%#%%%%%%%#%%VHH
    HH%%%%%%%%%%#%v~~~~~~\%%%#%%%%%%%%HH
    HH%%%%%#%%%%v'        ~~~~\%%%%%#%HH
    HH%%#%%%%%%v'dHHb      a%%%#%%%%%%HH
    HH%%%%%#%%v'dHHHA     :%%%%%%#%%%%HH
    HH%%%#%%%v' VHHHHaadHHb:%#%%%%%%%%HH
    HH%%%%%#v'   'VHHHHHHHHb:%%%%%#%%%HH
    HH%#%%%v'      'VHHHHHHH:%%%#%%#%%HH
    HH%%%%%'        dHHHHHHH:%%#%%%%%%HH
    HH%%#%%        dHHHHHHHH:%%%%%%#%%HH
    HH%%%%%       dHHHHHHHHH:%%#%%%%%%HH
    HH#%%%%       VHHHHHHHHH:%%%%%#%%%HH
    HH%%%%#   b    HHHHHHHHV:%%%#%%%%#HH
    HH%%%%%   Hb   HHHHHHHV'%%%%%%%%%%HH
    HH%%#%%   HH  dHHHHHHV'%%%#%%%%%%%HH
    HH%#%%%   VHbdHHHHHHV'#%%%%%%%%#%%HH
    HHb%%#%    VHHHHHHHV'%%%%%#%%#%%%%HH
    HHHHHHHb    VHHHHHHH:%odHHHHHHbo%dHH
    HHHHHHHHboodboooooodHHHHHHHHHHHHHHHH
    HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
    HHHHH  Mr. Penguin: "Hello" HHHHHHHH
    VHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHV`;

    function getCharacters(art)
    {
    	var i = art.length;
    	// used to track the time at which the letter should print regardless of the current i (which is the character position including whitespace)
    	var i_letter = 0;
    	var s = ''; // string of whitespace
    	var characters = [];
    	do
    	{
    		i = (i + 1) % art.length;
    		var c = art[i];

    		var isWhitespace = /\s/.test(c);
    		if (isWhitespace)
    		{
    			s += c;
    			continue; // don't print the whitespace yet
    		}
    		else
    		{
    			if (s.length > 0)
    			{
    				c = s + c; // be sure to include the character currently being parsed
    				s = '';
    			}

    			i_letter = (i_letter + 1) % art.length;

    			characters.push(c);
    		}
    	}
    	while(i);

    	return characters;
    }

    var characters = getCharacters(art);

    var output = '';
    function printCharacterByIndex(characters, index, delay)
    {
    	if (characters[index] === undefined) return;

    	output += characters[index];
    	console.clear();
    	console.log(output)

    	window.setTimeout(printCharacterByIndex.bind(null, characters, index + 1, delay), delay);
    }

    console.clear();
    printCharacterByIndex(getCharacters(art), 0, 10);

}
