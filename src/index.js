const timer = document.querySelector(".timer h1");
let sec = 0;
let min = 0;
let hr = 0;
let stopTime = true;

// headel start buttons
function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    watch();
  }
}

// headel stop buttons
function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
  }
}

// headel restart buttons
function resetTimer() {
  timer.innerHTML = `00 : 00 : 00`;
  stopTime = true;
  sec = 0;
  min = 0;
  hr = 0;
}

//for animation
function watch() {
  if (stopTime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;
    // console.log(sec);

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if (hr < 10) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + " : " + min + " : " + sec;

    setTimeout(watch, 1000);
  }
}
