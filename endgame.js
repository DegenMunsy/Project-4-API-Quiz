let finalScore = localStorage.getItem('finalScore');
const recentScore = document.querySelector('#recentScore');
// 
recentScore.innerText = finalScore;

var highScores = JSON.parse(localStorage.getItem("highscores")) || []

var MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})

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

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.href="https://josshy92.github.io/homework-04/"
}
