var snd = new Audio('./assets/sound/mixkit-basketball-ball-hitting-the-net-2084.wav')
var snd2 = new Audio('./assets/sound/referee-whistle-blow-gymnasium-6320.mp3')

let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let scoreH = 0
let scoreG = 0

function nwGameSound () {
    snd2.play()
}

function scoreSound () {
  snd.play()
}


function checkWinner() {
  if (scoreG > scoreH ) {
    scoreGuest.classList.add("winner-highlight")
    scoreHome.classList.remove("winner-highlight")} 
  else if (scoreG < scoreH)
  {scoreHome.classList.add("winner-highlight")
  scoreGuest.classList.remove("winner-highlight")}
 }
 
function plusOneHome() {
  scoreH+=1
  scoreHome.textContent = scoreH
  checkWinner()
}

function plusTwoHome() {
  scoreH+=2
  scoreHome.textContent = scoreH
  checkWinner()
}

function plusThreeHome() {
  scoreH+=3
  scoreHome.textContent = scoreH
  checkWinner()
}

function plusOneGuest() {
  scoreG+=1
  scoreGuest.textContent = scoreG
  checkWinner()
}

function plusTwoGuest() {
  scoreG+=2
  scoreGuest.textContent = scoreG
  checkWinner()
}

function plusThreeGuest() {
  scoreG+=3
  scoreGuest.textContent = scoreG
  checkWinner()
}

function newGame() {
  scoreGuest.textContent = 0
  scoreHome.textContent = 0
  scoreG=0
  scoreH=0
  scoreHome.classList.remove("winner-highlight")
  scoreGuest.classList.remove("winner-highlight")
}