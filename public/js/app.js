(function() {
  //initialize variables
var startButton = $('#start');
var seconds = $('#seconds');

  //main functionality
startButton.on('click', countdown);

  //function definitions
  function countdown (){
    var secondsValue = parseInt(seconds.text());
    if(secondsValue === 0) {
      //Change secondsValue to 59
      seconds.text("59");
    }
    else {
      seconds.text(pad(secondsValue - 1));
    }
  }

  function pad(num) {
    if(num < 10) {
      //spit out number with a leading zero
      return "0" + num;
    }
    else {
      //spit out the original number
      return num;
    }
  }
}());
