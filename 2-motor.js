var five = require("johnny-five"); 
board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function () {
  console.log("Ready!");


  motor = new five.Motor(5);

  motor.start();

  board.wait(5000, function() {
      motor.stop();
  });

  this.repl.inject({
    motor: motor
  });
  
});