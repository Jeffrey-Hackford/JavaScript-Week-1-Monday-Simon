exports.Simon = function() {

};

exports.Simon.prototype.randomColor = function() {
  var colors = [blue, red, yellow, green];
  var rand = colors[Math.floor(Math.random() * colors.length)];
  return rand;
};

exports.Simon.prototype.compare = function(userColors, simonColors) {
  if(userColors.length != simonColors.length) {
    return false;
  } else {
    for(i = 0; i < userColors.length; i++){
      for(j = 0; j < simonColors.length; j++){
        if(userColors[i] != simonColors[j]){
          return false;
        }
      }
    }
      return true;
    }
  };
