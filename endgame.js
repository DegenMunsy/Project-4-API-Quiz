// Variables for the page
let finalScore = localStorage.getItem('finalScore');
const recentScore = document.querySelector('#recentScore');
// set recent score as final score
recentScore.innerText = finalScore;

// set variable for highscores as json in local storage
var highScores = JSON.parse(localStorage.getItem("highscores")) || []

// set variable for max high scores
var MAX_HIGH_SCORES = 5

// set final score set above as most recent score
finalScore.innerText = mostRecentScore

// event listener to make save button live
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})
// save score using most recent score and username. Push the score to the array if the score is above the 5th highest score
saveHighScore = e => {
    e.preventDefault()

    var score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    // save the high scores to the page
    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.href=""
}
