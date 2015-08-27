

//npm install -g yo
//npm install -g generator-johnny-five 

//mkdir <your directory>  
//cd <your directory>  
//yo johnny-five 


var five = require("johnny-five"), board, servo, motor; 
board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function () {
  console.log("Ready!");

 // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
 // (new five.Led(1)).strobe();

 /*myServo = new five.Servo(5); 
  board.repl.inject({ 
    servo: myServo
  });*/
  
/*  motor = new five.Motor(5);

  motor.start();

  board.wait(5000, function() {
      motor.stop();
  });

  this.repl.inject({
    motor: motor
  });*/
  
  /*
  var servo = new five.Motor(5);

  servo.start();

  this.repl.inject({
    servo: servo
  });
  */
  

  /*
  var myButton = new five.Button(0); 
  var led = new five.Led(5); 
  myButton.on("down", function(value){ 
    console.log("button pressed!"); 
    led.toggle(); 
  }); 
  */
  
   
/* var servo1 = new five.Motor(5);
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
  */
  // grove arduino yun
  /*
  var myButton = new five.Button(4); 
  var led = new five.Led(6); 
  myButton.on("down", function(value){ 
    console.log("button pressed!"); 
    led.toggle(); 
  });*/ 
});
