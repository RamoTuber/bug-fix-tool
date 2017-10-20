
// function testString(name, result, test) {
//   if(name.test(string)) {
//     newStrg = " ";
//     wrapper.text(newStrg);
//     wrapper.css({
//       background: result
//     });
//   }
// }

function check(string, wrapper) {
    var terms = {'Ã€':'À', 'Ã':'Á', 'Ã‚':'Â', 'Ãƒ':'Áƒ','â€œ':'Ã“','Â«':'ë','Â±':'ñ','â€š':'Â','â€¢':'Õ','Â¿':'ÿ','Å“':'Ü','â€°':'É','Â½':'ý','Â»':'û','Â©':'é','Â¾':'þ','Â¤':'ä','â€¦':'Å','Å¸':'ß','Â°':'ð','Â®':'î','Â¸':'ø','Â¡':'á','Â³':'ó','Â¹':'ù','Âµ':'õ','Â¼':'ü','â‚¬':'À','Â¶':'ö','â€':'â€“','â€¢':'Õ','Ã„':'Ä', 'Ã…':'Å',
      'Ã†':'Æ', 'Ã‡':'Ç', 'Ãˆ':'È', 'Ã‰':'É', 'ÃŠ':'Ê', 'Ã‹':'Ë','â€“':'Ö',
      'ÃŒ':'Ì', 'ÃŽ':'Î', 'Ã‘':'Ñ', 'Ã’':'Ò',
      'Ã•':'Õ', 'Ã–':'Ö', 'Ã—':'×', 'Ã˜':'Ø', 'Ã™':'Ù', 'Ãš':'Ú',
      'Ã›':'Û', 'Ãœ':'Ü', 'Ãž':'Þ', 'ÃŸ':'ß', 'Ã¡':'á', 'Ã¢':'â',
      'Ã£':'ã', 'Ã¤':'ä', 'Ã¥':'å', 'Ã¦':'æ', 'Ã§':'ç','Ã¨':'è',
      'Ã©':'é', 'Ãª':'ê', 'Ã«':'ë', 'Ã¬':'ì', 'Ã®':'î', 'Ã¯':'ï',
      'Ã°':'ð', 'Ã±':'ñ', 'Ã²':'ò', 'Ã³':'ó', 'Ã´':'ô', 'Ãµ':'õ',
      'Ã¶':'ö', 'Ã·':'÷', 'Ã¸':'ø', 'Ã¹':'ù', 'Ãº':'ú', 'Ã»':'û', 
      'Ã¼':'ü', 'Ã½':'ý', 'Ã¾':'þ', 'Ã¿':'ÿ', 'Ð˜':'ð˜','Ð³':'ð³','Ð¾':'ð¾','Ñ€':'ñ€','Ñœ':'ñœ',
      'Ðš':'ðš','Ð½':'ð½','Ñ':'ñ','Ð°':'ð°','Ñ‚':'ñ‚','Ð¸':'ð¸','Ñ…':'ñ…','ÑŒ':'ñœ','Ð’':'ð’',
      'Ð»':'ð»','Ð´':'ð´','Ð¼':'ð¼','Ð²':'ð²','Ñ‡':'ñ‡','Ð·':'ð·','Ðµ':'ðµ','Ñƒ':'ñƒ','Ð¯':'ð¯',
      'Ðž':'ðž','ÐŸ':'ðÿ','Ð¥':'ð¥','Ð':'ð','Ð¹':'ð¹','Ð±':'ð±','Ðº':'ðº','Ð•':'ð•','Ð¡':'ð¡',
      'Ð™':'ð™','Ð¿':'ð¿','Ð®':'ð®','Ð§':'ð§','Ð£':'ð£','ÑŽ':'ñž','Ð¶':'ð¶','Ð“':'ð“','Ñ†':'ñ†',
      'Ð—':'ð—','Ð¤':'ð¤','Ð›':'ð›','Ð¦':'ð¦','Ñ‹':'ñ‹','Ñˆ':'ñˆ','Ðœ':'ðœ','Ð–':'ð–','Ñ„':'ñ„',
      'Ñ‰':'ñ‰','Ð¢':'ð¢','Ð”':'ð”','Ð¨':'ð¨','Ð«':'ð«','Ð©':'ð©', 'Ð‘':'ð‘', 'Ð ':'ð ', 'Ð':'ð', 'Ð­':'ð­', 'Ñ‘':'ñ‘'};
    
    var match = false;

    var rx = /(Ã€|Ã|Ã‚|Â¸|â€š|â€¢|Â±|â€¢|Â¿|â€¦|â€°|Å“|Â¤|Â»|Â°|Â«|Å¸|Â©|Â®|Â¾|Â½|Â¹|Â¡|Âµ|Â³|â€“|â‚¬|Ãƒ|Â¼|Â¶|â€|Ã„|Ã…|Ã†|Ã‡|Ãˆ|Ã‰|ÃŠ|Ã‹|ÃŒ|ÃŽ|Ã‘|Ã’|â€œ|Ã•|Ã–|Ã—|Ã˜|Ã™|Ãš|Ã›|Ãœ|Ãž|ÃŸ|Ã¡|Ã¢|Ã£|Ã¤|Ã¥|Ã¦|Ã§|Ã¨|Ã©|Ãª|Ã«|Ã¬|Ã®|Ã¯|Ã°|Ã±|Ã²|Ã³|Ã´|Ãµ|Ã¶|Ã·|Ã¸|Ã¹|Ãº|Ã»|Ã¼|Ã½|Ã¾|Ã¿|Ð|Ð |Ð˜|Ð‘|Ð³|Ð¾|Ñ€|Ñœ|Ðš|Ð½|Ñ|Ð°|Ñ‚|Ð¸|Ñ…|ÑŒ|Ð’|Ð»|Ð´|Ð¼|Ð²|Ñ‡|Ð·|Ðµ|Ñƒ|Ð¯|Ðž|ÐŸ|Ð¥|Ð|Ð¹|Ð±|Ðº|Ð•|Ð¡|Ð™|Ð¿|Ð®|Ð§|Ð£|ÑŽ|Ð¶|Ð“|Ñ†|Ð—|Ð¤|Ð›|Ð¦|Ñ‹|Ñˆ|Ðœ|Ð–|Ñ„|Ñ‰|Ð¢|Ð”|Ð¨|Ð«|Ð©|Ð­|Ñ‘)/g;
    
    var terms2 = {'À':'À', 'Ã':'Á', 'Á‚':'Â', 'Áƒ':'', 'Á„':'Ä', 'Á…':'Å','Ã”':'Ô','â€“':'Ö',
                'Á†':'Æ', 'Á‡':'Ç','ô“':'Ö', 'Áˆ':'È', 'Á‰':'É', 'ÁŠ':'Ê', 'Á‹':'Ë','ÁŒ':'Ì', 'ÁŽ':'Î', 
                'Á‘':'Ñ', 'Á’':'Ò', 'Á“':'Ó', 'Á”':'Ô','Ã“':'Ó','Á•':'Õ','Á–':'Ö', 'Á—':'×', 'Á˜':'Ø', 
                'Á™':'Ù', 'Áš':'Ú','Á›':'Û', 'Áœ':'Ü', 'Áž':'Þ', 'ÁŸ':'ß','Á¡':'á', 'Á¢':'â',
                'Á£':'ã', 'Á¤':'ä', 'Á¥':'å', 'Á¦':'æ', 'Á§':'ç','Á¨':'è','Á©':'é', 'Áª':'ê', 'Á«':'ë', 'Á¬':'ì', 'Á®':'î', 'Á¯':'ï',
                'Á°':'ð', 'Á±':'ñ', 'Á²':'ò', 'Á³':'ó', 'Á´':'ô','Áµ':'õ','Á¶':'ö', 'Á·':'÷', 'Á¸':'ø', 'Á¹':'ù', 'Áº':'ú', 'Á»':'û', 
                'Á¼':'ü', 'Á½':'ý', 'Á¾':'þ', 'Á¿':'ÿ','ð˜':'И','ð³':'г','ð¾':'о','ñ€':'р','ñœ':'ь','ðš':'К',
                'ð½':'н','ñ':'с','ð°':'а','ñ‚':'т','ð¸':'и','ñ…':'х','ñœ':'ь','ð’':'В','ð»':'л','ð´':'д',
                'ð¼':'м','ð²':'в','ñ‡':'ч','ð·':'з','ðµ':'е','ñƒ':'у','ð¯':'Я','ðž':'О','ðÿ':'П','ð¥':'Х',
                'ð':'Н','ð¹':'й','ð±':'б','ðº':'к','ð•':'Е','ð¡':'С','ð™':'Й','ð¿':'п','ð®':'Ю','ð§':'Ч',
                'ð£':'У','ñž':'ю','ð¶':'ж','ð“':'Г','ñ†':'ц','ð—':'З','ð¤':'Ф','ð›':'Л','ð¦':'Ц','ñ‹':'ы','ñˆ':'ш','ðœ':'М','ð–':'Ж','ñ„':'ф','ñ‰':'щ','ð¢':'Т','ð”':'Д','ð¨':'Ш','ð«':'Ы','ð©':'Щ', 'ð‘':'Б', 'ð ':'Р', 'ð':'А', 'ð­':'Э', 'ñ‘':'ё'};

    var ft = /(À|Ã|Á‚|Áƒ|Á„|Á…|Á†|â€“|ô“|Á‡|Áˆ|Á‰|ÁŠ|Á‹|Ã“|Ã”|ÁŒ|ÁŽ|Á‘|Á’|Á“|Á”|Á•|Á–|Á—|Á˜|Á™|Áš|Á›|Áœ|Áž|ÁŸ|Á¡|Á¢|Á£|Á¤|Á¥|Á¦|Á§|Á¨|Á©|Áª|Á«|Á¬|Á®|Á¯|Á°|Á±|Á²|Á³|Á´|Áµ|Á¶|Á·|Á¸|Á¹|Áº|Á»|Á¼|Á½|Á¾|Á¿|ð |ð˜|ð³|ð¾|ñ€|ñœ|ðš|ð½|ñ|ð°|ñ‚|ð¸|ñ…|ñœ|ð’|ð‘|ð»|ð´|ð¼|ð²|ñ‡|ð·|ðµ|ñƒ|ð¯|ðž|ðÿ|ð¥|ð|ð¹|ð±|ðº|ð•|ð¡|ð™|ð¿|ð®|ð§|ð£|ñž|ð¶|ð“|ñ†|ð—|ð¤|ð›|ð¦|ñ‹|ñˆ|ðœ|ð–|ñ„|ñ‰|ð¢|ð”|ð¨|ð«|ð©|ð|ð­|ñ‘)/g;

    if (rx.test(string)) {

            newString = string.replace(rx, function(x) { return terms[x] ? terms[x] : ""; });

            if(ft.test(newString)) {
              wrapper.addClass("converted")

              newStr = newString.replace(ft, function(x) { return terms2[x] ? terms2[x] : ""; });
              $(".corrections").append("<li>" + newStr + "</li>");

              
              // $('.index').each(function() {
              //   $(this).text(wrapper.index()+1);
              // });

              wrapper.each(function(i) {
                wrapper.text(newStr);
              });
            }
    }

    var sp = /[#!$%^&*\d()+~=`{}\[\];'?\/ï¿™]/;
    var repsChar = (/([a-zA-Z])\1\1+/).test(string);
    var repsCons_Vowels = (/[aiueo]{4,}|[AIUOE]{4,}|[qwrtypsdfghjklzxcvbnm]{4,}|[QWRTYPSDFGHJKLZXCVBNM]{4,}/).test(string);

    if(string.length <= 2 || string.length >= 30) {
      newStrg = " ";
      wrapper.text(newStrg);
      wrapper.css({
        background: "#e6da9d"
      });
    }

    if(sp.test(string)) {
      newStrg = " ";
      wrapper.text(newStrg);
      wrapper.css({
        background: "rgba(255, 0, 0, 0.5)"
      });
    }

    if(repsChar) {
      newStrg = " ";
      wrapper.text(newStrg);
      wrapper.css({
        background: "rgb(157, 230, 167)"
      });
    }

    if(repsCons_Vowels) {
      newStrg = " ";
      wrapper.text(newStrg);
      wrapper.css({
        background: "rgb(213, 157, 230)"
      });
    }
}

function CleanSpecial() {
  $('.orig-list li').each(function() {
    var name = $(this).text();
    var wrapper = $(this);

    var repsSymbol = (/([^\x00-\x7F])\1\1+/).test(name);
      if(repsSymbol) {
        newStrg = " ";
         wrapper.text(newStrg);
         wrapper.css({
           background: "rgba(94, 142, 255, 0.6)"
         });
      }
  });
}

function copy() {
  $('.orig-list li').each(function() {
    var content = $(this).text().toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        }); ;
    $(".test").append("\n" + content);
  });
}


function toggle(link, content) {
  var x = 0

  $('.' + link).click(function() {
    if(x == 0) {
      $('.thesaurus').css("visibility", "visible");
      $('.thesaurus').animate({
        height: "920px"
      }, 100);
      x = 1;
      $('.'+ content).show();
    }else {
      $('.thesaurus').css("visibility", "hidden");
      $('.thesaurus').animate({
        height: 0
      }, 100);
      x = 0;
      $('.'+ content).hide();
    }
  });
}

function reveal_col_def() {
  $('.color').click(function() {
    var id = $(this).attr('id');
    $('.color_definition').hide();
    $('#desc_' + id).show();
  });
}

function switchTheme() {
  $(".dark").click(function() {
    $("head link#theme").attr("href","styles/style_dark.css");
  });

  $(".light").click(function() {
    $("head link#theme").attr("href","styles/style.css");
  });
}


$(document).ready(function() {
  toggle('codes_link', 'codes_wrapper');
  toggle('numbers', 'numprocedures');
  reveal_col_def();
  switchTheme();

  $('#down').click(function() {
    var x = $("#receiver").val();
    $('.orig-list').html(x.replace(/\n(?!>)/g, '<li>'));
    
    $('.orig-list li').each(function() {
        var phrase = $(this).text(); 
        var matchHighlight = $(this);    
        check(phrase, matchHighlight);  
    });

    $('button').css("display", "inline-block");

    var mappedItems = $('.orig-list li').map(function( index ) {
      if($(this).hasClass('converted')) 
        var replacement = $( "<li>" ).text( $( this ).index()+1).get( 0 );
        return replacement;
    });

    $( "#results" ).append(mappedItems);
    $(this).hide();
    $("#refresh").css("display", "inline-block");

    CleanSpecial();
  });

  $("#copy-button").click(function() {
    copy();
  
  });

});
