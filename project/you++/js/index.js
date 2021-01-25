$(document).ready(function() {
  var debouncer = function(func, timeout) {
    var timeoutID, timeout = timeout || 200;
    return function() {
      var scope = this,
        args = arguments;
      clearTimeout(timeoutID);
      timeoutID = setTimeout(function() {
        func.apply(scope, Array.prototype.slice.call(args));
      }, timeout);
    };
  };

  $('.my-iframe').height($(window).height() - 85);

  $('#myCarousel').carousel({
    interval: false
  }).bind('mousewheel', debouncer(function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
      $('#myCarousel').carousel('prev');
    } else {
      $('#myCarousel').carousel('next');
    }
  }));

  $('#myJoin').mouseover(function() {
    $('#myJoin').attr('src', 'img/joinusselect.png');
  }).mouseout(function() {
    $('#myJoin').attr('src', 'img/joinus.png');
  });
  $('#myIphone').mouseover(function() {
    $('#myIphone').attr('src', 'img/iphone-download-select.png');
  }).mouseout(function() {
    $('#myIphone').attr('src', 'img/iphone-download.png');
  });
  $('#myAndroid').mouseover(function() {
    $('#myAndroid').attr('src', 'img/android-download-select.png');
  }).mouseout(function() {
    $('#myAndroid').attr('src', 'img/android-download.png');
  });

  var clearActive = function() {
    	$('#myCarousel .item, #myCarousel li').removeClass('active');
  };

  var attrActive = function(index) {
    	$('#myCarousel').find('.item').eq(index).addClass('active');
    	$('#myCarousel').find('li').eq(index).addClass('active');
  };

  $('#navbar a').on('click', function() {
    	clearActive();
    	attrActive($(this).attr('id'));
    	// $(this).parent().css('background-color', '#337ab7');
  });
});
