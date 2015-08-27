var five = require("johnny-five"); 
board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function () {
  console.log("Ready!");

 var servo1 = new five.Motor(5);
 servo1.speed(255);
 servo1.stop();

 var servo2 = new five.Motor(9);
 servo2.speed(255);
 servo2.stop();
  //servo.start();

  this.repl.inject({
   on: function() {
      servo1.start();
      servo2.start();
    },
    off: function() {
      servo1.stop();
      servo2.stop();
    }
  });
  
});