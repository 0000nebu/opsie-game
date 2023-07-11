const canvasId = "main-canvas";
const canvas = document.getElementById(canvasId);
const startBtn = document.getElementById("start-btn");
const startBackground = document.getElementById("inicio")
const game = new Game(canvasId, visibleRestart);
let scoresScreenVisible = false;



window.addEventListener("keydown", (event) => {
    game.onKeyDown(event);
  });
  

canvas.style.display = "none";
startBtn.focus();



document.getElementById("start-btn").onclick = () => {
  startBtn.remove();
  startBackground.remove();
  canvas.style.display = "block";
  
  

  game.start();
};


function visibleRestart() {
  document.getElementById("restartButton").classList.remove("hidden");
}

document.getElementById("restartButton").addEventListener("click", () => {
  location.reload();
})

function saveScore(score) {
  const playerName = prompt("Ingrese su nombre"); 
  const scores = JSON.parse(localStorage.getItem("scores")) || []; 
  scores.push({ name: playerName, score: score }); 
  if (scores.length > 3) {
    scores.splice(0, scores.length - 3); }
  localStorage.setItem("scores", JSON.stringify(scores)); 
  
}

function showHighScores() {
  

  if (scoresScreenVisible) {
    const highScoresScreen = document.querySelector(".high-scores-screen");
    highScoresScreen.remove();
    scoresScreenVisible = false;
    return;
  }
  const scores = JSON.parse(localStorage.getItem("scores")) || []; 
  scores.sort((a, b) => b.score - a.score); 
  

  const highScoresScreen = document.createElement("div");
  highScoresScreen.classList.add("high-scores-screen");

  const title = document.createElement("h1");
  title.textContent = "The best";
  highScoresScreen.appendChild(title);

  const scoresList = document.createElement("ul");
  highScoresScreen.appendChild(scoresList);

  for (let i = 0; i < scores.length && i < 10; i++) {
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `${scores[i].name}: ${scores[i].score}`;
    scoresList.appendChild(scoreItem);
  }

  document.body.appendChild(highScoresScreen);
  scoresScreenVisible = true;
}
