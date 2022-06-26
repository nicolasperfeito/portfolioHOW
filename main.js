$(window).scroll(function(){
  var threshold = 208;
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
  if( op <= 13 ){
    $("#top-button").show();
  } else {
    $("#top-button").hide();
  }
});

$(window).load(function() {
      $("#top-button").hide();
});
    mouseout: function() {
        event.preventDefault();
        $(this).animate({opacity: 1});
    }
});


