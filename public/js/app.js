(function() {
  //initialize variables
var startButton = $('#start');
var breakButton = $('#break');
var seconds = $('#seconds');
var minutes = $('#minutes');
var isOnBreak = false;
var timerInterval;

  //main functionality
  startButton.on('click', startTimer);
  breakButton.on('click', startBreak);

  //function definitions
  function startBreak(){
    //set that user is on a break
    isOnBreak = true;
    //set minutes to 5 min.
    minutes.text('05');
    //set seconds to 0 seconds
    seconds.text('00');
    //hide break button
    breakButton.hide();
    //start the timer
    startTimer();
  }

  function startTimer(){
    if(!timerInterval) {
      timerInterval = setInterval(countdown, 1000);
    }
  }

  function countdown (){
    var secondsValue = parseInt(seconds.text());
    var minutesValue = parseInt(minutes.text());

    if(minutesValue === 0 && secondsValue === 0) {
      clearInterval(timerInterval);
      timerInterval = null; //stops timer

      if(!isOnBreak){
        //disable the start button
        startButton.attr('disabled', true);
        //unhide the break button
        breakButton.show();
      }
      else {
        minutes.text('25');
        seconds.text('00');
        startButton.attr('disabled', false);
        isOnBreak = false;
      }
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
