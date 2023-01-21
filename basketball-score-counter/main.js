var snd = new Audio(
  "./assets/sound/mixkit-basketball-ball-hitting-the-net-2084.wav"
);
var snd2 = new Audio("./assets/sound/referee-whistle-blow-gymnasium-6320.mp3");

let gameStatus = document.getElementById("start-stop");
let timerVar = document.getElementById("timer");
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let scoreH = 0;
let scoreG = 0;
var gameStatusBool = true;

function nwGameSound() {
  snd2.play();
}

function scoreSound() {
  snd.play();
}

function checkWinner() {
  if (scoreG > scoreH) {
    scoreGuest.classList.add("winner-highlight");
    scoreHome.classList.remove("winner-highlight");
  } else if (scoreG < scoreH) {
    scoreHome.classList.add("winner-highlight");
    scoreGuest.classList.remove("winner-highlight");
  } else {
    scoreHome.classList.remove("winner-highlight");
    scoreGuest.classList.remove("winner-highlight");
  }
}

let t = true;
function Totoggle(t) {
  return !t;
}
function toggle() {
  t = Totoggle(t);
}
// console.log(toggle(t));
//counter
console.log(gameStatusBool);
function handleTimer() {
  let hrs = 0;
  let mins = 0;
  let secs = 0;
  let timer = "";
  const Timer = setInterval(() => {
    if (!t) {
      secs += 1;
      if (secs >= 59) {
        secs = 0;
        mins += 1;
      }
      if (mins >= 59) {
        mins = 0;
        hrs += 1;
      }

      if (mins < 10) {
        timer = hrs + ":0" + mins + ":" + secs;

        if (secs < 10) {
          timer = hrs + ":0" + mins + ":0" + secs;
        }
      }

      timerVar.textContent = timer;
      gameStatus.textContent = "Stop Game";
      gameStatusBool = false;
    } else {
      clearInterval(Timer);
      gameStatus.textContent = "New Game";
      gameStatusBool = true;
    }
  }, 1000);
}

//points

function plusOneHome() {
  if (!gameStatusBool) {
    console.log("here");
    scoreH += 1;
    scoreHome.textContent = scoreH;
    checkWinner();
    scoreSound();
  } else {
    window.alert("Please start a new game to be able to use the counter !!");
  }
}

function plusTwoHome() {
  if (!gameStatusBool) {
    scoreH += 2;
    scoreHome.textContent = scoreH;
    checkWinner();
    scoreSound();
  } else {
    window.alert("Please start a new game to be able to use the counter !!");
  }
}

function plusThreeHome() {
  if (!gameStatusBool) {
    scoreH += 3;
    scoreHome.textContent = scoreH;
    checkWinner();
    scoreSound();
  } else {
    window.alert("Please start a new game to be able to use the counter !!");
  }
}

function plusOneGuest() {
  if (!gameStatusBool) {
    scoreG += 1;
    scoreGuest.textContent = scoreG;
    checkWinner();
    scoreSound();
  } else {
    window.alert("Please start a new game to be able to use the counter !!");
  }
}

function plusTwoGuest() {
  if (!gameStatusBool) {
    scoreG += 2;
    scoreGuest.textContent = scoreG;
    checkWinner();
    scoreSound();
  } else {
    window.alert("Please start a new game to be able to use the counter !!");
  }
}

function plusThreeGuest() {
  if (!gameStatusBool) {
    scoreG += 3;
    scoreGuest.textContent = scoreG;
    checkWinner();
    scoreSound();
  } else {
    window.alert("Please start a new game to be able to use the counter !!");
  }
}

function newGame() {
  if (!gameStatusBool) {
    scoreGuest.textContent = 0;
    scoreHome.textContent = 0;
    scoreG = 0;
  }
  scoreH = 0;
  scoreHome.classList.remove("winner-highlight");
  scoreGuest.classList.remove("winner-highlight");
  timerVar.textContent = "0:00:00";
}
