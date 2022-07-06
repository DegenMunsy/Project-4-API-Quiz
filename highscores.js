var highScoresList = document.querySelector("#highScoresList")
var highScores = JSON.parse(localStorage.getItem("highScores")) || []


highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li`
}).join("")


// push to high scores page and load

