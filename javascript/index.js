const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  const watchIntervalId = setInterval(() => {
    printSeconds();
    printMinutes();
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // ... your code goes here
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let newListElement = document.createElement('li');
  newListElement.innerHTML = chronometer.split();
  newListElement.setAttribute('class', 'list-item');
  splitsElement.appendChild(newListElement);
}

function clearSplits() {
  // ... your code goes here
  let allListElements = document.querySelectorAll('.list-item');
  for (var i = 0; (li = allListElements[i]); i++) {
    li.parentNode.removeChild(li);
  }
}

function setStopBtn() {
  // ... your code goes here

  //changing left button
  chronometer.stop();
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.setAttribute('class', 'btn start');

  //changing right button
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.setAttribute('class', 'btn reset');
}

function setSplitBtn() {
  // ... your code goes here
  chronometer.split();
  printSeconds();
} 

function setStartBtn() {
  // ... your code goes here

  //changing left button
  chronometer.start();
  printTime();
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');

  //changing right button
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
    setResetBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
  } else {
    chronometer.split();
    printSplit();
  }
});
function newFunction() {
  clearInterval(printTime().watchIntervalId);
}

