
var five = require("johnny-five"); 
board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function () {
  console.log("Ready!");

  
  var myButton = new five.Button(0); 
  var led = new five.Led(5); 
  myButton.on("down", function(value){ 
    console.log("button pressed!"); 
    led.toggle(); 
  }); 
  
});