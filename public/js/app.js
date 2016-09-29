(function() {
  //initialize variables
var startButton = $('#start');
var breakButton = $('#break');
var seconds = $('#seconds');
var minutes = $('#minutes');
var timerInterval;

  //main functionality
  startButton.on('click', startTimer);

  //function definitions
  function startTimer(){
    if(!timerInterval) {
      timerInterval = setInterval(countdown, 1000);
    }
  }

  function countdown (){
    var secondsValue = parseInt(seconds.text());
    var minutesValue = parseInt(minutes.text());

    if(minutesValue === 0 && secondsValue === 0) {
      clearInterval(timerInterval); //stops timer
      //disable the start button
      startButton.attr('disabled', true);
      //unhide the break button
      breakButton.show();
      return;
    }

    if(secondsValue === 0) {
      if(minutesValue !== 0) {
        //Change secondsValue to 59
        seconds.text("59");
        minutes.text(pad(minutesValue - 1));
      }
    }
    else {
      seconds.text(pad(secondsValue - 1));
      minutes.text(pad(minutesValue));
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
