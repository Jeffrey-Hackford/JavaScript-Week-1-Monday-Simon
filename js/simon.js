exports.Simon = function() {

};

exports.Simon.prototype.randomColor = function() {
  var colors = ["blue", "red", "yellow", "green"];
  var rand = colors[Math.floor(Math.random() * colors.length)];
  return rand;
};

exports.Simon.prototype.compare = function(userColors, simonColors) {
  if(userColors.length != simonColors.length) {
    return false;
  } else {
    for(i = 0; i < simonColors.length; i++){
        if(userColors[i] != simonColors[i]){
          return false;
        }
    }
      return true;
  }
};

exports.Simon.prototype.pattern = function(simonColors) {
  var i = 0;
  var interval = setInterval(doStuff, 1500);
    function doStuff() {
        console.log(simonColors[i]);
        if(simonColors[i] == "blue") {
        $('#blue').animateCss("flash");
        i++;
      } else if (simonColors[i] == "red"){
        $('#red').animateCss("flash");
        i++;
      } else if (simonColors[i] == "yellow"){
        $('#yellow').animateCss("flash");
        i++;
      } else if (simonColors[i] == "green"){
        $('#green').animateCss("flash");
        i++;
      }
      if(i === simonColors.length) {
        clearInterval(interval);
      }
    }
  }

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
