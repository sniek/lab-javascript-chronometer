class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    //console.log(minutes);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    //console.log(seconds);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    /* let newValue = ('0' + value).slice(-2);
    console.log(newValue);
    return newValue */
    let newValue = (value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    //console.log(newValue);
    return newValue;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let splitTime = this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds());
    console.log('logging splitTime: ' + splitTime);
    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}