var Simon = require('./../js/simon.js').Simon;

$(document).ready(function() {
  var blue = document.getElementById("blue");
  var red = document.getElementById("red");
  var yellow = document.getElementById("yellow");
  var green = document.getElementById("green");

  var simon = new Simon();

  var userColors = [];
  var simonColors = [simon.randomColor()];

  blue.onclick = function() {
    userColors.push(blue.getAttribute("value"));
    console.log(userColors);
  };

  red.onclick = function() {
    userColors.push(red.getAttribute("value"));
    console.log(userColors);
  };

  yellow.onclick = function() {
    userColors.push(yellow.getAttribute("value"));
    console.log(userColors);
  };

  green.onclick = function() {
    userColors.push(green.getAttribute("value"));
    console.log(userColors);
  };

  $('#ready').click(function() {
    simon.pattern(simonColors);
  });

  $('#submit').click(function(){
    if(simon.compare(userColors, simonColors)) {
      $('#correct').append('<p>' + "You are correct!" + "</p>");
      simonColors.push(simon.randomColor());
      userColors = [];
      console.log(simonColors);
    } else {
      $('#correct').append('<p>' + "You not correct!" + "</p>");
      simonColors = [simon.randomColor()];
      userColors = [];
      console.log("second");

    }
  });
});
