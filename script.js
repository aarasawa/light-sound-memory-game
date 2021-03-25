//Global Constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var lives = 3;

function startGame() {
  //initialize game variables
  lives = 3;
  distance = 60000;
  progress = 0;
  gamePlaying = true;
  randomNum();
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function randomNum() {
  for (let j = 0; j <= 4; j++) {
    const random = Math.floor(Math.random() * 8) + 1 //between 1 and 9
    pattern[j] = random;
    console.log(pattern[j]);
  }
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!")
}

function wrongGuess() {
  lives--;
  if (lives >= 1) {
   alert("Wrong! Try again, you have " + lives + " attempts left."); 
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        distance = 60000;
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    if (lives == 1) {
      loseGame();
    }
    wrongGuess();
  }
}    

//Sound Synthesis Functions
const freqMap = {
  1: 300,
  2: 400,
  3: 500,
  4: 600,
  5: 700,
  6: 800,
  7: 900,
  8: 1000,
  9: 1050
}

function playTone(btn, len) {
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  tonePlaying = true
  setTimeout(function() {
    stopTone()
  }, len)
}

function startTone(btn) {
  if(!tonePlaying) {
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    tonePlaying = true
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

//Page Initialization
//Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)

// Set the date we're counting down to
var distance = 60000;
// Update the count down every 1 second
var x = setInterval(function() {
  if (gamePlaying) {
    distance = distance - 1000;
  }
  
  // Time calculations minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    loseGame();
    document.getElementById("timer").innerHTML = "TIME'S UP!";
  }
}, 1000);

var y = setInterval(function()  {
  document.getElementById("ticker").innerHTML = lives;
}, 1000)
