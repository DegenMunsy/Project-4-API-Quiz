// set high scores variable as json in local storage
var highScoresList = document.querySelector("#highScoresList")
var highScores = JSON.parse(localStorage.getItem("highScores")) || []

// Send high scores to the html page and load the page
highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li`
}).join("")







