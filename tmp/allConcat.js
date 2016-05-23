var Simon = require('./../js/simon.js').Simon;

$(document).ready(function() {
  var blue = document.getElementById("blue");
  var red = document.getElementById("red");
  var yellow = document.getElementById("yellow");
  var green = document.getElementById("green");

  var simon = new Simon();

  var userColors = [];
  var simonColors = [];

  blue.onclick = function() {
    userColors.push(blue.getAttribute("value"));
  };

  red.onclick = function() {
    userColors.push(red.getAttribute("value"));
  };

  yellow.onclick = function() {
    userColors.push(yellow.getAttribute("value"));
  };

  green.onclick = function() {
    userColors.push(green.getAttribute("value"));
  };

  $('#submit').click(function(event){
    event.preventDefault();
    if(simon.compare(userColors, simonColors)) {
      $('#correct').append('<p>' + "You are correct!" + "</p>");
      simonColors.push(simon.randomColor());
      userColors = [];
      console.log(simonColors);
    } else {
      $('#correct').append('<p>' + "You not correct!" + "</p>");
      simonColors = [];
      userColors = [];
      console.log("second");

    }
  });
});
