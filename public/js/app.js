(function() {
  //initialize variables
var startButton = $('#start');
var breakButton = $('#break');
var pauseButton = $('#pause');
var resetButton = $('#reset');
var seconds = $('.seconds');
var minutes = $('.minutes');
var itsTimeFor = $('#itsTimeFor');
var isOnBreak = false;
var breakNow = 0;
var timerInterval;

  //main functionality
  startButton.on('click', startTimer);
  breakButton.on('click', startBreak);
  pauseButton.on('click', pauseTimer);
  resetButton.on('click', resetTimer);

  //function definitions
  //upon clicking break button
  function startBreak(){
    //set that user is on a break
    isOnBreak = true;
    breakNumber = breakNow + 1;
    breakNow = breakNumber;
    if(breakNow !== 3) {
      //short break time
      itsTimeFor.text('Just a short break.');
      minutes.text('00');
      seconds.text('04');
    }
    else {
      //long break time
      itsTimeFor.text('You get a longer break!');
      minutes.text('00');
      seconds.text('05');
      breakNow = 0;
    }
    breakButton.hide();
    startTimer();
  }

  //Upon clicking pause button
  function pauseTimer(){
    clearInterval(timerInterval);
    timerInterval = null;
    startButton.attr('disabled', false);
  }

  //Upon clicking reset button
  function resetTimer(){
    clearInterval(timerInterval);
    timerInterval = null;
    startButton.attr('disabled', false);
    minutes.text('25');
    seconds.text('00');
    itsTimeFor.text('Time to do some work!');
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
        itsTimeFor.text('Break Time!');
      }
      //if was on break
      else {
        minutes.text('00');
        seconds.text('06');
        startButton.attr('disabled', false);
        isOnBreak = false;
        itsTimeFor.text('Time for more work.');
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
