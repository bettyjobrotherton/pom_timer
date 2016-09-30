(function() {
  //initialize variables
var startButton = $('#start');
var breakButton = $('#break');
var seconds = $('#seconds');
var minutes = $('#minutes');
var isOnBreak = false;
var breakNow = 0;
var timerInterval;

  //main functionality
  startButton.on('click', startTimer);
  breakButton.on('click', startBreak);

  //function definitions
  //upon clicking break button
  function startBreak(){
    //set that user is on a break
    isOnBreak = true;
    breakNumber = breakNow + 1;
    breakNow = breakNumber;
    if(breakNow !== 3) {
      //short break time
      minutes.text('05');
      seconds.text('00');
    }
    else {
      //long break time
      minutes.text('15');
      seconds.text('00');
      breakNow = 0;
    }
    breakButton.hide();
    startTimer();
  }

  //Upon clicking start button
  function startTimer(){
    if(!timerInterval) {
      timerInterval = setInterval(countdown, 1000);
    }
  }

  //Countdown function
  function countdown (){
    var secondsValue = parseInt(seconds.text());
    var minutesValue = parseInt(minutes.text());

    if(minutesValue === 0 && secondsValue === 0) {
      clearInterval(timerInterval);
      timerInterval = null; //stops timer

      //if not on break
      if(!isOnBreak){
        startButton.attr('disabled', true);
        breakButton.show();
      }
      //if was on break
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
