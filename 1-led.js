var five = require("johnny-five"); 
board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function () {
  console.log("Ready!");

 // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  (new five.Led(1)).strobe();
});